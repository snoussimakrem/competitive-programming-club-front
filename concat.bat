@echo off
setlocal enabledelayedexpansion
set "output=public\AB.txt"
if exist "%output%" del "%output%"
for /r src %%f in (*.js *.jsx *.css *.json *.ts *.tsx) do (
    echo %%f >> "%output%"
    type "%%f" >> "%output%"
    echo. >> "%output%"
    echo. >> "%output%"
)
endlocal
