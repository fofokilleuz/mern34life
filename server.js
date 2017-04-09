//server.js
'use strict'
//Dependencies :
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var Comment = require('./models/comments');

//create instances
var app = express();
var router = express.Router();

//set port
var port = process.env.API_PORT || 3001;

//db config
mongoose.connect('mongodb://<dbusername>:<dbpassword>@ds157380.mlab.com:57380/mern34life');


//configure the API to use bodyParser
//and look for JSON data in the request body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set
//our headers to allow CORS with middleware :
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//set route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});

//THE /comments ROUTE
router.route('/comments')
  //get all comments
  .get(function(req, res) {
    Comment.find(function(err, comments) {
      if (err)
      res.send(err);
      res.json(comments)
    });
  })
  //post new comment
  .post(function(req, res) {
    var comment = new Comment();
    comment.author = req.body.author;
    comment.text = req.body.text;
    comment.save(function(err) {
      if (err)
      res.send(err);
      res.json({ message: 'Comment successfully added!' });
    });
  });

//THE /comments/:id ROUTE for a specific comment
router.route('/comments/:comment_id')
//The put method gives us the chance to update our comment based on the ID passed to the route
 .put(function(req, res) {
   Comment.findById(req.params.comment_id, function(err, comment) {
     if (err)
       res.send(err);
     //setting the new author and text to whatever was changed. If nothing was changed
     // we will not alter the field.
     (req.body.author) ? comment.author = req.body.author : null;
     (req.body.text) ? comment.text = req.body.text : null;
     //save comment
     comment.save(function(err) {
       if (err)
         res.send(err);
       res.json({ message: 'Comment has been updated' });
     });
   });
 })
 //delete method for removing a comment from our database
 .delete(function(req, res) {
   //selects the comment by its ID, then removes it.
   Comment.remove({ _id: req.params.comment_id }, function(err, comment) {
     if (err)
       res.send(err);
     res.json({ message: 'Comment has been deleted' })
   })
 });

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
