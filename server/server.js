require('dotenv').config()

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT



const user = require('./user');
const superAdminRouter = require('./super_admin');
const adminRouter = require('./admin');
const event = require('./event');
const comment = require('./comment');
const rso = require('./rso');
const university = require('./university');

const app = express();

// Middleware to allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
 


app.use('/user', user);
app.use('/super_admin', superAdminRouter);
app.use('/admin', adminRouter);
app.use('/event', event);
app.use('/comment', comment);
app.use('/rso', rso);
app.use('/university', university);
 
/*
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
*/
app.listen(port,  () => {
  console.log('Server is running on ' + port);
});

