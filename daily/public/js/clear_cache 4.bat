@echo off

:PROMPT
SET /P AREYOUSURE=Are you sure you want to clear cache and close all of your current browsers? (Press Y for Yes and N for No)
IF "%AREYOUSURE%" NEQ "Y" IF "%AREYOUSURE%" NEQ "y" IF "%AREYOUSURE%" NEQ "yes" GOTO END

:: Stop all browsers
taskkill /F /IM "chrome.exe">nul 2>&1
taskkill /F /IM "firefox.exe">nul 2>&1
taskkill /F /IM "opera.exe">nul 2>&1
taskkill /F /IM "Safari.exe">nul 2>&1
taskkill /F /IM "iexplore.exe">nul 2>&1
timeout 2 >nul 2>&1

:: ECHO **** Clear CHROME cookie and cache START
set ChromeDataDir=%userprofile%\AppData\Local\Google\Chrome\User Data\Default
set ChromeCache=%ChromeDataDir%\Cache>nul 2>&1  
del /q /s /f "%ChromeCache%\*.*">nul 2>&1    
:: clear cookie && Saved Passwords && auto-fill
set ChromeDataDir=%userprofile%\AppData\Local\Google\Chrome
for /r "%ChromeDataDir%" %%f in (Cookies*) do ( del /q /s /f "%%f" )
for /r "%ChromeDataDir%" %%f in ("Login Data"*) do ( del /q /s /f "%%f" )
for /r "%ChromeDataDir%" %%f in ("Web Data"*) do ( del /q /s /f "%%f" )

set ChromeDataDir=%userprofile%\Local Settings\Application Data\Google\Chrome\User Data\Default
set ChromeCache=%ChromeDataDir%\Cache>nul 2>&1
del /q /s /f "%ChromeCache%\*.*">nul 2>&1   
:: clear cookie && Saved Passwords && auto-fill
set ChromeDataDir=%userprofile%\Local Settings\Application Data\Google\Chrome
for /r "%ChromeDataDir%" %%f in (Cookies*) do ( del /q /s /f "%%f" )
for /r "%ChromeDataDir%" %%f in ("Login Data"*) do ( del /q /s /f "%%f" )
for /r "%ChromeDataDir%" %%f in ("Web Data"*) do ( del /q /s /f "%%f" )
:: ECHO **** Clear CHROME cookie and cache DONE

:: ECHO **** Clear FIREFOX cookie and cache START
set DataDir=%userprofile%\AppData\Local\Mozilla\Firefox\Profiles
del /q /s /f "%DataDir%">nul 2>&1
rd /s /q "%DataDir%">nul 2>&1
set DataDir=%userprofile%\AppData\Roaming\Mozilla\Firefox
:: clear cookie && Saved Passwords && auto-fill
for /r "%DataDir%" %%f in (*"sqlite"*) do ( del /q /s /f "%%f" )
for /r "%DataDir%" %%f in ("logins"*) do ( del /q /s /f "%%f" )
for /r "%DataDir%" %%f in (*"secmod"*) do ( del /q /s /f "%%f" )
::ECHO **** Clear FIREFOX cookie and cache DONE

::ECHO **** Clear OPERA cookie and cache START
set DataDir=%userprofile%\AppData\Local\Opera Software
if exist "%DataDir%" del /q /s /f "%DataDir%">nul 2>&1
if exist %DataDir% rd /s /q "%DataDir%">nul 2>&1
:: clear cookie && Saved Passwords && auto-fill
set DataDir=%userprofile%\AppData\Roaming\Opera Software
for /r "%DataDir%" %%f in (Cookies*) do (del /q /s /f "%%f")
for /r "%DataDir%" %%f in ("Login Data"*) do (del /q /s /f "%%f")
for /r "%DataDir%" %%f in ("Web Data"*) do (del /q /s /f "%%f")
::ECHO **** Clear OPERA cookie and cache DONE
::ECHO **** Clear SAFARI cookie and cache START
set DataDir=%userprofile%\AppData\Roaming\Apple Computer\Safari
:: clear cookie and auto-fill
for /r "%DataDir%" %%f in (Cookies*) do (del /q /s /f "%%f")
for /r "%DataDir%" %%f in (Database*) do (del /q /s /f "%%f")
::ECHO **** Clear SAFARI cookie and cache DONE
::ECHO **** Clear IE cookie and cache START
set DataDir=%userprofile%\AppData\Local\Microsoft\Windows
:: clear cookie
for /r "%DataDir%" %%f in (*.cookie) do (del /q /s /f "%%f")
set DataDir=%userprofile%\AppData\Local\Packages
:: clear cookie
for /r "%DataDir%" %%f in (*.cookie) do (del /q /s /f "%%f")
RunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 32
::ECHO **** Clear IE cookie and cache DONE
:END
echo.&pause

