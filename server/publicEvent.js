const express = require('express');
const router = express.Router();
const PublicEvent = require('../models/PublicEvent');

// Route to add a new public event
router.post('/api/public-events', async (req, res) => {
  try {
    const { event_id, created_by } = req.body;
    const eventId = await PublicEvent.add({ event_id, created_by });
    res.status(201).json({ message: "Public event created successfully", eventId });
  } catch (error) {
    console.error('Error creating public event:', error);
    res.status(500).json({ error: "Error creating public event" });
  }
});

module.exports = router;
