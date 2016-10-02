
# N1Z
## Breaking Dev
## IST Rider

#### Install

* Install GIT
```
sudo apt-get update
sudo apt-get install git
```

* NodeJS 6 for Ubuntu 14.04
```
$ curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
$ sudo apt-get install -y nodejs
```

* Gulp
````
npm install gulp-cli
```

* MongoDB
```
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo "deb http://repo.mongodb.org/apt/ubuntu "$(lsb_release -sc)"/mongodb-org/3.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.0.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

#### Setup project
* Clone project
```
git clone https://github.com/filiperfernandes/N1Z rider
cd rider
```

* Install npm packages
```
npm install
```

#### Start project
````
npm start
# or
forever start server/server.js
```

