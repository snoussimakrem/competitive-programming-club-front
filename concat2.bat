@echo off
echo. > public\AB.txt
for %%f in (src\components\*.jsx) do (
echo src\components\%%~nf.jsx >> public\AB.txt
type "%%f" >> public\AB.txt
echo. >> public\AB.txt
)
for %%f in (src\pages\*.jsx) do (
echo src\pages\%%~nf.jsx >> public\AB.txt
type "%%f" >> public\AB.txt
echo. >> public\AB.txt
)
for %%f in (src\styles\*.css) do (
echo src\styles\%%~nf.css >> public\AB.txt
type "%%f" >> public\AB.txt
echo. >> public\AB.txt
)
