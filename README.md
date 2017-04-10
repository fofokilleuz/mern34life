# mern34life // **IN PROGRESS**
The goal of this personal work is to discover ReactJs, which is an open-source JavaScript library for building user interfaces.

## Technologies used
- [Mongoose](http://mongoosejs.com/) which is a mongodb object modeling for Node.js
- [Express](http://expressjs.com/)
- [ReactJs](https://facebook.github.io/react/)
- [Node](https://nodejs.org/en/)
- [Material Design Lite](https://getmdl.io/)

## Installation
1. Git clone the project.
2. Open a terminal and run `npm start` to install all dependencies in the `package.json` file.
3. Register to [MLab](https://mlab.com/) (free account) and create a database.
4. Add a DB user to the database just created (and note the dbUserName and the dbPassword).
5. Go in the `server.js` file and update the line : `mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds157380.mlab.com:57380/<dbname>');` with the correct `dbusername`, `dbpassword` and `dbname`.
6. Open a terminal and run `node server.js` to launch the server. *You can observe your api at the url localhost:3001/api/comments*
7. Open another terminal and run `npm start` to launch the application. *You can observe the application at the url localhost:3000*
