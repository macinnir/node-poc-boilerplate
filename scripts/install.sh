#!/bin/bash

sudo rm -R .git
cp app/config.default.js app/config.js
echo "DATABSE_HOST: "
read DATABASE_HOST
sed -i -- "s/\[DATABASE_HOST\]/"$DATABASE_HOST"/g" app/config.js
echo "DATABASE_USERNAME: "
read DATABASE_USERNAME
sed -i -- "s/\[DATABASE_USERNAME\]/"$DATABASE_USERNAME"/g" app/config.js
echo "DATABASE_PASSWORD: "
read DATABASE_PASSWORD
sed -i -- "s/\[DATABASE_PASSWORD\]/"$DATABASE_PASSWORD"/g" app/config.js
echo "DATABASE_NAME: "
read DATABASE_NAME
sed -i -- "s/\[DATABASE_NAME\]/"$DATABASE_SCHEMA"/g" app/config.js
git init
git add --all
git commit -m 'initial commit'
cd app
npm install
bower install
node server.js
