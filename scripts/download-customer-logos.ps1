# Download customer logos from Clearbit to assets/images/customerlogo
# Data: customer-logos-list.json (UTF-8)
$ErrorActionPreference = 'Stop'
$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$OutDir = Join-Path $scriptDir '..\assets\images\customerlogo'
$listPath = Join-Path $scriptDir 'customer-logos-list.json'

$json = Get-Content -Path $listPath -Encoding UTF8 -Raw
$customers = $json | ConvertFrom-Json

if (-not (Test-Path $OutDir)) { New-Item -ItemType Directory -Path $OutDir -Force | Out-Null }

$ok = 0
$fail = 0
foreach ($c in $customers) {
    $name = $c[0]
    $domain = $c[1]
    $slug = $domain -replace '\.', '-'
    $file = Join-Path $OutDir "$slug.png"
    if (Test-Path $file) {
        Write-Host "[Skip] $name ($domain) exists"
        $ok++
        continue
    }
    $url = "https://logo.clearbit.com/${domain}?size=128"
    try {
        Invoke-WebRequest -Uri $url -OutFile $file -UseBasicParsing -TimeoutSec 10
        Write-Host "[OK] $name -> $slug.png"
        $ok++
    } catch {
        Write-Host "[Fail] $name ($domain)"
        $fail++
        if (Test-Path $file) { Remove-Item $file -Force }
    }
    Start-Sleep -Milliseconds 300
}
Write-Host ""
Write-Host "Done. OK: $ok, Fail: $fail"
