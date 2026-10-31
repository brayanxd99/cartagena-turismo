@echo off
chcp 65001 > nul
echo ========================================================
echo   SUBIR CARTAGENA TURISMO A GITHUB & ACTIVAR LINK
echo ========================================================
echo.
echo Verificando repositorio Git...

cd /d "%~dp0"

if not exist ".git" (
    echo [*] Inicializando repositorio Git local...
    git init
    git branch -M main
)

echo [*] Agregando archivos del proyecto...
git add .

echo [*] Creando commit con la version completa...
git commit -m "feat: Cartagena Magica Turismo con 5 destinos, datos curiosos, formulario y panel admin"

echo.
echo Por favor asegúrate de haber creado el repositorio en GitHub:
echo https://github.com/new (Nombre sugerido: cartagena-turismo)
echo.

set /p REPO_URL="Pega la URL de tu repositorio de GitHub (o presiona Enter para usar https://github.com/brayanxD99/cartagena-turismo.git): "
if "%REPO_URL%"=="" (
    set REPO_URL=https://github.com/brayanxD99/cartagena-turismo.git
)

git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo.
echo [*] Subiendo codigo a GitHub...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   [OK] SUBIDO CON ÉXITO A GITHUB!
    echo ========================================================
    echo.
    echo Tu repositorio está en: %REPO_URL%
    echo.
    echo Para ver tu link de carga en vivo (GitHub Pages):
    echo 1. Entra a tu repositorio en GitHub
    echo 2. Ve a Settings ^> Pages
    echo 3. Selecciona la rama 'main' y guarda
    echo 4. Tu enlace sera: https://brayanxD99.github.io/cartagena-turismo/
    echo ========================================================
) else (
    echo.
    echo [!] Hubo un detalle al subir. Si te pide credenciales de GitHub, ingresa tu Personal Access Token o inicia sesión en Git Credential Manager.
)

echo.
pause
