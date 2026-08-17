@echo off
setlocal
cd /d "%~dp0"

echo ============================================================
echo ALMA BTL - FRONTEND ONLY VERIFY
echo ============================================================
echo.

where node >nul 2>nul || (
  echo [FAIL] Node.js no esta instalado o no esta en PATH.
  exit /b 1
)
where npm >nul 2>nul || (
  echo [FAIL] npm no esta instalado o no esta en PATH.
  exit /b 1
)

echo [1/2] Installing dependencies...
call npm install
if errorlevel 1 goto :fail

echo.
echo [2/2] Production build...
call npm run build
if errorlevel 1 goto :fail

echo.
echo [PASS] ALMA frontend verified successfully.
echo No backend deployment is required.
exit /b 0

:fail
echo.
echo [FAIL] Verification failed.
exit /b 1
