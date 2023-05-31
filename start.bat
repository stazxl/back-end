@echo off

::Start WAMP
cd C:\Autre\Logiciel\wamp64
start cmd.exe /c "wampmanager.exe"

::Start Front-End
cd C:\Autre\Travail\Pay-Abo\Front-End
start cmd.exe /k "yarn start"

:: Start API
cd C:\Autre\Travail\Pay-Abo\Back-End
start cmd.exe /k "npm start"
