# mern34life
It's a personal project to test react.

## Technologies

## Installation
1. Git clone the project
2. Register to [MLab](https://mlab.com/) (free account) and create a database.
3. Add a DB user to the database just created (and note the dbUserName and the dbPassword).
4. Go in the `server.js` file and update the line :
  ```
  mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds157380.mlab.com:57380/<dbname>');
  ```
  with the correct `dbusername`, `dbpassword` and `dbname`.
5. Open a terminal and run `node server.js` to launch the server. *you can observe your api at the url localhost:3001/api/comments*
6. Open another terminal and run `npm start` to launch the application. *you can observe the application at the url localhost:3000*
