require('dotenv').config()

const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const port = process.env.PORT



const user = require('./user');
const superAdminRouter = require('./super_admin');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
 


app.use('/user', user);
//app.use('/super_admin', superAdminRouter);
 
/*
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
});
*/
app.listen(port,  () => {
  console.log('Server is running on ' + port);
});

