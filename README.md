# Shake Shack
Order food from Shake Shack. Really simple full-stack web API demo.

### Install Node.js

```all
brew install node
```

### Install MongoDB

```all
brew tap mongodb/brew
brew install mongodb-community@4.2
mongod --config /usr/local/etc/mongod.conf
```

### Change to Shack directory

```all
cd ~/Downloads/shack
```
Open a terminal and change to the Shack directory, wherever you have downloaded it.


### Install node modules

```all
npm install
```

### Start MongoDB

```all
mongod --dbpath data/db
```
In a separate terminal window or tab, launch the MongoDB sever. You can specify the database path using the dbpath flag. The default directory data/db has already been created for you, but you can create a different directory and use that if you want to.

### Initialize the database

```all
node import.js model.json
```
You can initialize the database using the import.js script with some default environments. This may be useful when you are getting started with the Flare API. 

### Start the server

```all
node shack.js
```
In a separate terminal window or tab, start the Flare server. This will tell Node.js to run the shack.js script and wait for incoming HTTP requests.

### Start page

You can open the start page by going to [http://localhost:1234/](http://localhost:1234/) in your browser. Substitute the name of your computer to connect from other devices. 

