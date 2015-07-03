# Node POC Boilerplate

Boilerplate Node project for POC (proof of concept) micro-projects.

# Install
```
git clone https://github.com/macinnir/node-poc-boilerplate.git [project name] && cd [project name]/app
cp config.default.js config.js
sed -i -- 's/\[DATABASE_HOST\]/localhost/g' app/config.js
sed -i -- 's/\[DATABASE_USERNAME\]/my_username/g' app/config.js
sed -i -- 's/\[DATABASE_PASSWORD\]/my_password/g' app/config.js
sed -i -- 's/\[DATABASE_NAME\]/my_password/g' app/config.js
npm install
bower install
node server.js
```

