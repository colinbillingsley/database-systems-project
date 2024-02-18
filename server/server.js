require('dotenv').config()

const mysql = require('mysql');
const express = require('express');
const app = express();
const port = process.env.PORT
app.use(express.json());


const user = require('./user');

 
app.use('/user', user);
 


app.listen(port,  () => {
  console.log('Server is running on ' + port);
});

