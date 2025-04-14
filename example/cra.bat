@echo off

IF "%1" == "" (
     ECHO Provide the project name!
     EXIT /B
)

git clone https://github.com/SegiH/React-Webpack5-Starter-App

rd /s /q React-Webpack5-Starter-App\.git

move React-Webpack5-Starter-App %1

cd %1

npm install
