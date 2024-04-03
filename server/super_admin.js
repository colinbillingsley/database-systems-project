const express = require('express');
const router = express.Router();
const SuperAdmin = require('./models/SuperAdmin');


// Route to register a new super admin
router.post('/api/register', (req, res) => {
    const { username, password, role, email, uni_id } = req.body;
    console.log("Route ran");
    // Validate input
    if (!username || !email || !password || !role || !uni_id) {
      return res.status(400).json({ error: "All fields are required!" });
    }
  
    // Call the create method in the SuperAdmin model to register a new super admin
    SuperAdmin.create(username, password, role, email, uni_id, (error, superAdminId) => {
      if (error) {
        console.error('Error creating super admin:', error);
        return res.status(500).json({ error: 'Error registering super admin' });
      }
      res.status(201).json({ superAdminId });
    });
  });
  
  module.exports = router;