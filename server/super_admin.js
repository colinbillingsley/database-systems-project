const express = require('express');
const router = express.Router();
const SuperAdmin = require('./models/SuperAdmin');


// finish api for super admin


router.post("/api/super_admin", (req, res) => {
    console.log("Route ran");
    
    return res.status(200).json({ Success: "Username and password received" });
});


   module.exports = router;