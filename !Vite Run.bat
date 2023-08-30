@ECHO off
ECHO [1] Open
ECHO [2] Build
ECHO [3] Preview

CHOICE /c 123 /n
IF ERRORLEVEL 3 (
    npm run preview
)
IF ERRORLEVEL 2 (
    npm run build
)
IF ERRORLEVEL 1 (
    npm run dev
)
