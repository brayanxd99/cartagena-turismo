# PowerShell Script para inicializar y subir a GitHub
Write-Host "========================================================" -ForegroundColor Cyan
Write-Host "  SUBIR CARTAGENA TURISMO A GITHUB & ACTIVAR LINK" -ForegroundColor Yellow
Write-Host "========================================================" -ForegroundColor Cyan

Set-Location -Path $PSScriptRoot

if (-not (Test-Path ".git")) {
    Write-Host "[*] Inicializando repositorio Git local..." -ForegroundColor Green
    git init
    git branch -M main
}

Write-Host "[*] Agregando archivos al control de versiones..." -ForegroundColor Green
git add .

Write-Host "[*] Creando commit inicial..." -ForegroundColor Green
git commit -m "feat: Cartagena Turismo & Stopover Adventure con panel exclusivo del propietario"

$defaultRepo = "https://github.com/brayanxD99/cartagena-turismo.git"
Write-Host "`nRepositorio objetivo configurado: $defaultRepo" -ForegroundColor White

git remote remove origin 2>$null
git remote add origin $defaultRepo

Write-Host "`n[*] Para subirlo a GitHub ejecuta:" -ForegroundColor Cyan
Write-Host "git push -u origin main" -ForegroundColor Yellow
Write-Host "`nTu enlace público con GitHub Pages será:" -ForegroundColor Green
Write-Host "https://brayanxD99.github.io/cartagena-turismo/" -ForegroundColor Yellow
