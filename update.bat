@echo off
title Avanti Tour & Travels Auto Update

echo =====================================
echo     Uploading Website to GitHub...
echo =====================================

git add .
git commit -m "Website updated"
git push origin main

echo.
echo =====================================
echo      Upload Successful!
echo Refresh website after 1-2 minutes.
echo =====================================

pause