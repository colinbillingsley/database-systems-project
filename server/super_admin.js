const express = require('express');
const router = express.Router();
const SuperAdmin = require('./models/SuperAdmin');


// Route to register a new super admin
router.post('/api/super_admin/register', (req, res) => {
    const { username, password } = req.body;
    console.log("Route ran");
    // Validate input
    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }
  
    // Call the create method in the SuperAdmin model to register a new super admin
    SuperAdmin.create(username, password, (error, superAdminId) => {
      if (error) {
        console.error('Error creating super admin:', error);
        return res.status(500).json({ message: 'Error registering super admin' });
      }
      res.status(201).json({ superAdminId });
    });
  });
  
  module.exports = router;