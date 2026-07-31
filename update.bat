@echo off
title BUSKR Travels Auto Update

echo =====================================
echo     Uploading Website to GitHub...
echo =====================================

git pull origin main

git add .
git commit -m "Website updated"

git push origin main

if %errorlevel%==0 (
    echo.
    echo =====================================
    echo     Upload Successful!
    echo Refresh website after 1-2 minutes.
    echo =====================================
) else (
    echo.
    echo =====================================
    echo     Upload Failed!
    echo Check the error above.
    echo =====================================
)

pause