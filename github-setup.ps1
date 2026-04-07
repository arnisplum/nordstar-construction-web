# One-time: log into GitHub, create arnisplum/nordstar-construction-web if missing, push main.
# Run in PowerShell from this folder:
#   Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass -Force; .\github-setup.ps1

$ErrorActionPreference = "Stop"
$gh = "${env:ProgramFiles}\GitHub CLI\gh.exe"
if (-not (Test-Path $gh)) {
  Write-Host "Install GitHub CLI: winget install GitHub.cli"
  exit 1
}

Set-Location $PSScriptRoot

# Native gh stderr must not trip Stop — use cmd for exit code only
cmd /c "`"$gh`" auth status >nul 2>&1"
if ($LASTEXITCODE -ne 0) {
  Write-Host "Opening GitHub login (follow the prompts)..."
  & $gh auth login -h github.com -p https -w
}

# Create repo on GitHub if it does not exist yet (under your logged-in account)
$repo = "nordstar-construction-web"
cmd /c "`"$gh`" repo view arnisplum/$repo >nul 2>&1"
if ($LASTEXITCODE -ne 0) {
  Write-Host "Creating GitHub repo $repo ..."
  & $gh repo create $repo --public --description "Nordstar Construction marketing site (Next.js)"
}

Write-Host "Pushing main to origin ..."
git push -u origin main
Write-Host "Done. Repo: https://github.com/arnisplum/$repo"
