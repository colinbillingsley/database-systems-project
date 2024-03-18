const express = require('express');
const router = express.Router();
const PrivateEvent = require('../models/PrivateEvent');

// Route to add a new private event
router.post('/api/private-events', async (req, res) => {
  try {
    const { event_id, created_by } = req.body;
    const eventId = await PrivateEvent.add({ event_id, created_by });
    res.status(201).json({ message: "Private event created successfully", eventId });
  } catch (error) {
    console.error('Error creating private event:', error);
    res.status(500).json({ error: "Error creating private event" });
  }
});

module.exports = router;
