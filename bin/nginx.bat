cls 
@ECHO OFF 
SET NGINX_PATH=D: 
SET NGINX_DIR=D:\tools\nginx-1.7.8\
color 0a 
TITLE Nginx Management  
GOTO MENU 
:MENU 
CLS 
ECHO. 
ECHO. * * * *  Nginx Management  * * * * * * * * * * * 
ECHO. * * 
ECHO. * 1 ����Nginx * 
ECHO. * * 
ECHO. * 2 �ر�Nginx * 
ECHO. * * 
ECHO. * 3 ����Nginx * 
ECHO. * * 
ECHO. * 4 �� �� * 
ECHO. * * 
ECHO. * * * * * * * * * * * * * * * * * * * * * * * * 
ECHO. 
ECHO.������ѡ����Ŀ����ţ� 
set /p ID= 
IF "%id%"=="1" GOTO cmd1 
IF "%id%"=="2" GOTO cmd2 
IF "%id%"=="3" GOTO cmd3 
IF "%id%"=="4" EXIT 
PAUSE 
:cmd1 
ECHO. 
ECHO.����Nginx...... 
IF NOT EXIST %NGINX_DIR%nginx.exe ECHO %NGINX_DIR%nginx.exe������ 
%NGINX_PATH% 
cd %NGINX_DIR% 
IF EXIST %NGINX_DIR% start %NGINX_DIR%nginx.exe 
ECHO.OK 
PAUSE 
GOTO MENU 
:cmd2 
ECHO. 
ECHO.�ر�Nginx...... 
taskkill /F /IM nginx.exe > nul 
ECHO.OK 
PAUSE 
GOTO MENU 
:cmd3 
ECHO. 
ECHO.�ر�Nginx...... 
taskkill /F /IM nginx.exe > nul 
ECHO.OK 
GOTO cmd1 
GOTO MENU