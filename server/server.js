require('dotenv').config()
const mysql = require('mysql');
const express = require('express');
const app = express();
const port = process.env.PORT
app.use(express.json());

 
//register
app.post("/api/register", (req, res)=> {
  res.json({
   status: "success",
   data: {},
  })
 });
 
 


app.listen(port,  () => {
  console.log('Server is running on ' + port);
});

