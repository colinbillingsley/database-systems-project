const express = require('express');
const router = express.Router();
const Admin = require('./models/Admin');


// Route to register a new admin
router.post('/api/register', (req, res) => {
    const { username, password, role, email, uni_id } = req.body;
    console.log("Route ran");
    // Validate input
    if (!username || !email || !password || !role) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // check if university exists
    if (!uni_id) {
        return res.status(400).json({ error: "University inputted does not exist!" });
    }
  
    // Call the create method in the Admin model to register a new admin
    Admin.create(username, password, role, email, uni_id, (error, adminId) => {
      if (error) {
        console.error('Error creating admin:', error);
        return res.status(500).json({ error: 'Error registering admin' });
      }
      res.status(201).json({ adminId });
    });
  });
  
  module.exports = router;