/**
 * nav-scroll.js
 * 导航二级菜单滚动交互组件
 *
 * 职责：
 *  1. 点击带 [data-nav-scroll] 属性的菜单链接，平滑滚动到对应内容区块
 *  2. 若目标区块内有 Tab 组件，自动切换到指定 Tab（data-section-tab）
 *  3. 更新 URL hash、高亮当前菜单项、管理 aria-current 无障碍属性
 *  4. 防抖处理，防止频繁点击引起抖动
 *  5. 支持键盘 Tab 导航（Enter / Space 触发）
 *
 * 数据属性约定（加在 <a> 元素上）：
 *  data-nav-scroll          — 标记为可滚动导航链接（必填，无需赋值）
 *  data-target="<sectionId>"— 目标区块的 id（必填）
 *  data-section-tab="<key>" — 区块内需激活的 Tab 的 data-tab 值（可选）
 *  data-hash="<hashKey>"    — URL hash 标识，默认等于 data-target（可选）
 *  data-iframe="<selector>" — 若目标在某个 iframe 内，填写该 iframe 的 CSS 选择器（可选）
 *
 * iframe 两种方案（当 data-iframe 存在时）：
 *  方案 A（同源）：直接访问 iframe.contentDocument 进行滚动
 *  方案 B（跨域）：通过 postMessage 向 iframe 发送滚动指令
 *
 * iframe 接收端示例（在 iframe 内部页面添加）：
 *  window.addEventListener('message', function (event) {
 *    // 生产环境请校验 event.origin，不要无条件接受
 *    if (!event.data || event.data.type !== 'nav-scroll') return;
 *    var el = document.getElementById(event.data.target);
 *    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
 *  });
 */
(function () {
  /** 顶部固定导航栏高度补偿（px），防止区块被遮挡 */
  var SCROLL_OFFSET = 80;

  /** 防抖延迟（ms） */
  var DEBOUNCE_DELAY = 300;

  /** 激活状态 CSS 类名 */
  var ACTIVE_CLASS = 'nav-link--active';

  // ── 工具函数 ────────────────────────────────────────────────────────────────

  /**
   * 通用防抖工厂
   * @param {Function} fn
   * @param {number} delay
   */
  function debounce(fn, delay) {
    var timer = null;
    return function () {
      var ctx = this;
      var args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(ctx, args);
      }, delay);
    };
  }

  /**
   * 将页面滚动到指定元素，预留顶部导航偏移
   * @param {Element} el
   */
  function scrollToElement(el) {
    var top = el.getBoundingClientRect().top + window.pageYOffset - SCROLL_OFFSET;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  /**
   * 等待动态注入的目标元素出现后执行回调
   * 用于内容通过 fetch 异步加载的场景（最长等待 3s）
   * @param {string} id       — 目标元素 id
   * @param {Function} callback
   */
  function waitForElement(id, callback, onTimeout) {
    var maxTries = 30;
    var interval = setInterval(function () {
      var el = document.getElementById(id);
      if (el) {
        clearInterval(interval);
        callback(el);
        return;
      }
      if (--maxTries <= 0) {
        clearInterval(interval);
        console.warn('[nav-scroll] 等待目标元素超时：#' + id);
        if (typeof onTimeout === 'function') {
          onTimeout();
        }
      }
    }, 100);
  }

  // ── 方案 A：同源 iframe 内滚动 ──────────────────────────────────────────────

  /**
   * 访问同源 iframe 的 contentDocument，查找目标元素并滚动
   * 若 iframe 跨域，访问 contentDocument 会抛出 SecurityError，
   * 外层 catch 会自动降级到方案 B
   * @param {HTMLIFrameElement} iframe
   * @param {string} targetId — 目标元素 id（不含 #）
   */
  function scrollInSameOriginIframe(iframe, targetId) {
    var iDoc = iframe.contentDocument || iframe.contentWindow.document;
    if (!iDoc) {
      console.warn('[nav-scroll] 方案A：无法访问 iframe.contentDocument');
      return;
    }
    var target = iDoc.getElementById(targetId);
    if (!target) {
      console.warn('[nav-scroll] 方案A：iframe 内未找到元素 #' + targetId);
      return;
    }
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ── 方案 B：跨域 iframe，postMessage 通信 ──────────────────────────────────

  /**
   * 通过 postMessage 向 iframe 发送滚动指令（跨域场景）
   * 请在 iframe 内部页面添加对应的 message 监听器（见文件顶部注释）
   * @param {HTMLIFrameElement} iframe
   * @param {string} targetId
   * @param {string} [targetOrigin] — 目标域名，安全起见生产环境请填写精确值
   */
  function scrollInCrossOriginIframe(iframe, targetId, targetOrigin) {
    var origin = targetOrigin || '*'; // 生产环境替换为如 'https://your-domain.com'
    iframe.contentWindow.postMessage(
      { type: 'nav-scroll', target: targetId },
      origin
    );
  }

  /**
   * 自动判断同源/跨域，选择方案 A 或 B
   * @param {HTMLIFrameElement} iframe
   * @param {string} targetId
   */
  function scrollInIframe(iframe, targetId) {
    try {
      // 尝试访问 contentDocument（同源则成功，跨域则抛出 SecurityError）
      var iDoc = iframe.contentDocument || iframe.contentWindow.document;
      if (iDoc && typeof iDoc.getElementById === 'function') {
        scrollInSameOriginIframe(iframe, targetId); // 方案 A
      } else {
        scrollInCrossOriginIframe(iframe, targetId); // 方案 B 兜底
      }
    } catch (e) {
      // 跨域访问被浏览器拦截，降级为方案 B
      scrollInCrossOriginIframe(iframe, targetId);
    }
  }

  // ── Tab 联动 ────────────────────────────────────────────────────────────────

  /**
   * 在目标区块内查找指定 Tab 按钮并模拟点击，激活对应面板
   * Tab 按钮需有 data-tab="<key>" 属性
   * @param {Element} section
   * @param {string} tabKey
   */
  function activateTabInSection(section, tabKey) {
    if (!section || !tabKey) return;
    var tab = section.querySelector('[data-tab="' + tabKey + '"]');
    if (tab) {
      tab.click();
    }
  }

  // ── 激活状态管理 ────────────────────────────────────────────────────────────

  /** 当前高亮的菜单链接 */
  var activeLink = null;

  /**
   * 更新高亮状态：移除旧的，添加到新的
   * @param {Element|null} link
   */
  function setActiveLinkStyle(link) {
    if (activeLink && activeLink !== link) {
      activeLink.classList.remove(ACTIVE_CLASS);
      activeLink.removeAttribute('aria-current');
    }
    if (link) {
      link.classList.add(ACTIVE_CLASS);
      link.setAttribute('aria-current', 'true');
    }
    activeLink = link || null;
  }

  // ── 核心处理逻辑 ────────────────────────────────────────────────────────────

  /**
   * 点击导航链接后的主流程
   * @param {Element} link — 带 [data-nav-scroll] 的 <a> 元素
   */
  function handleNavLinkClick(link) {
    var targetId = link.getAttribute('data-target');
    var tabKey = link.getAttribute('data-section-tab') || '';
    var hashKey = link.getAttribute('data-hash') || targetId;
    var iframeSelector = link.getAttribute('data-iframe') || '';

    if (!targetId) {
      console.warn('[nav-scroll] 链接缺少 data-target 属性', link);
      return;
    }

    // 更新 URL hash（不触发页面跳转，不影响滚动位置）
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + hashKey);
    } else {
      // 旧浏览器兜底：直接设置 hash（会轻微跳动）
      var scrollY = window.pageYOffset;
      window.location.hash = hashKey;
      window.scrollTo(0, scrollY);
    }

    // 更新菜单高亮
    setActiveLinkStyle(link);

    // ── 分支：目标是否在 iframe 内 ──────────────────────────────────────────
    if (iframeSelector) {
      var iframe = document.querySelector(iframeSelector);
      if (iframe) {
        scrollInIframe(iframe, targetId);
        return;
      }
      console.warn('[nav-scroll] 未找到 iframe：' + iframeSelector);
    }

    // ── 默认：目标在当前页面（含异步注入的内容） ───────────────────────────
    var section = document.getElementById(targetId);
    if (section) {
      scrollToElement(section);
      // 稍作延迟，等滚动到位后再切换 Tab，避免视觉抖动
      setTimeout(function () {
        activateTabInSection(section, tabKey);
      }, 100);
    } else {
      // 内容尚未加载（fetch 注入中），等待元素出现
      waitForElement(
        targetId,
        function (el) {
          scrollToElement(el);
          setTimeout(function () {
            activateTabInSection(el, tabKey);
          }, 100);
        },
        function () {
          var params = new URLSearchParams(window.location.search);
          if (params.get('page')) {
            window.location.href = './welcome.html#' + hashKey;
          }
        }
      );
    }
  }

  // ── 从 URL hash 恢复状态 ────────────────────────────────────────────────────

  /**
   * 页面加载时，若 URL 中有 hash，自动激活对应链接并滚动
   * @param {Element[]} links
   */
  function restoreFromHash(links) {
    var hash = (window.location.hash || '').replace(/^#/, '');
    if (!hash) return;

    links.forEach(function (link) {
      var linkHash = link.getAttribute('data-hash') || link.getAttribute('data-target');
      if (linkHash === hash) {
        setActiveLinkStyle(link);
        // 等内容完全渲染后再执行滚动（兼容 fetch 异步加载）
        setTimeout(function () {
          handleNavLinkClick(link);
        }, 500);
      }
    });
  }

  // ── 初始化 ──────────────────────────────────────────────────────────────────

  function initNavScroll() {
    var links = Array.prototype.slice.call(
      document.querySelectorAll('[data-nav-scroll]')
    );

    if (!links.length) return;

    // 使用防抖包装核心处理函数，防止快速多次点击引起抖动
    var debouncedHandle = debounce(function (link) {
      handleNavLinkClick(link);
    }, DEBOUNCE_DELAY);

    links.forEach(function (link) {
      // 确保 <a> 以外的元素也可通过键盘聚焦
      if (link.tagName.toLowerCase() !== 'a' && !link.getAttribute('tabindex')) {
        link.setAttribute('tabindex', '0');
      }

      // 鼠标点击
      link.addEventListener('click', function (e) {
        e.preventDefault();
        debouncedHandle(link);
      });

      // 键盘无障碍：Enter 确认，Space 确认
      link.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          debouncedHandle(link);
        }
      });
    });

    // 恢复 URL hash 对应的高亮与滚动
    restoreFromHash(links);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavScroll);
  } else {
    initNavScroll();
  }

  window.initNavScroll = initNavScroll;
})();
