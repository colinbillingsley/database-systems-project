const express = require('express');
const router = express.Router();
const RSO = require('../models/RSO');

// Route to create a new RSO
router.post('/api/rso', (req, res) => {
    const { name, createdBy } = req.body;

    // Check if all required fields are provided
    if (!name || !createdBy) {
        return res.status(400).json({ error: "Name and createdBy are required" });
    }

    // Create a new RSO using the RSO model
    RSO.create(name, createdBy, (error, rsoId) => {
        if (error) {
            return res.status(500).json({ error: "Error creating RSO" });
        }
        res.status(201).json({ message: "RSO created successfully", rsoId });
    });
});

// Route to join an RSO
router.post('/api/rso/join', (req, res) => {
    const { rsoId, userId } = req.body;

    // Check if all required fields are provided
    if (!rsoId || !userId) {
        return res.status(400).json({ error: "rsoId and userId are required" });
    }

    // Join an RSO using the RSO model
    RSO.joinRSO(rsoId, userId, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Error joining RSO" });
        }
        res.status(200).json({ message: "Joined RSO successfully", result });
    });
});

module.exports = router;
