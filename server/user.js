const express = require('express');
const router = express.Router();
const User = require('./models/User');


router.post("/api/users/create", (req, res) => {
    console.log("Route ran");
  const { username, password, role, email, uni_id } = req.body;

  // Check if both username and password are provided
  if (!username || !email || !password || !role || !uni_id) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  
  // Create a new user using the User model
  User.create(username, password, role, email, uni_id, (error, userId) => {
    if (error) {
      return res.status(500).json({ error: "Error creating user" });
    }
    res.status(201).json({ message: "User created successfully", userId });
  });
});


// Route to find a user by username
router.get('/api/users/finduser', (req, res) => {
    const { username } = req.query;
    console.log("Route ran")
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

  // Route to get a username by uid
  router.get('/api/user/:userId', (req, res) => {
    const { userId } = req.params;

    // get the username via the User model
    User.getUsername(userId, (error, user) => {
      if (error) {
        return res.status(500).json({ error: "Error finding user by uid" });
      }
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ user });
    });
  });

  //login
  // Route for user login
router.post('/api/users/login', (req, res) => {
    const { username, password } = req.body;

    // Check if both username and password are provided
    if (!username || !password) {
        return res.status(400).json({ error: "Username and password are required" });
    }

    // Find a user by username using the User model
    User.findByUsername(username, (error, user) => {
        if (error) {
            return res.status(500).json({ error: "Error finding user by username" });
        }
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }
        // Check if the password matches
        if (user.password === password) {
            res.status(200).json({ message: "Login successful", user });
        } else {
            res.status(401).json({ error: "Invalid password" });
        }
    });
});

module.exports = router;
