#!/bin/bash

if [ $# -ne 1 ]
  then
    echo "Please provide the project name"
    exit 1
fi

git clone https://github.com/SegiH/React-Webpack5-Starter-App

rm -rf React-Webpack5-Starter-App\.git

mv React-Webpack5-Starter-App %1

cd %1

npm install
