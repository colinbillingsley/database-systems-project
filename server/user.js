const express = require('express');
const router = express.Router();
const User = require('./models/User');


// Route to create a new user
router.post('/api/users', (req, res) => {
    console.log("Route ran");
  const { username, password } = req.body;

  // Check if both username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }return res.status(200).json({ Success: "Username and password recieved" })
  /*
  // Create a new user using the User model
  User.create(username, password, (error, userId) => {
    if (error) {
      return res.status(500).json({ error: "Error creating user" });
    }
    res.status(201).json({ message: "User created successfully", userId });
  });*/
});

// Route to find a user by username
router.get('/api/users/:username', (req, res) => {
  const { username } = req.params;

  // Find a user by username using the User model
  User.findByUsername(username, (error, user) => {
    if (error) {
      return res.status(500).json({ error: "Error finding user by username" });
    }
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ user });
  });
});

module.exports = router;
