const express = require('express');
const router = express.Router();
const Event = require('./models/Event');


// Route to create a new event
router.post('/api/events', (req, res) => {
    console.log("Route ran");
    const { time, desc, location, date, category, event_host, event_phone, event_email, event_name } = req.body;

    // Check if all required fields are provided
    if (!time || !desc || !location || !date || !category || !event_host || !event_phone || !event_email || !event_name) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new event using the Event model
    Event.create({
        time,
        desc,
        location,
        date,
        category,
        event_host,
        event_phone,
        event_email,
        event_name
    }, (error, eventId) => {
        if (error) {
            return res.status(500).json({ error: "Error creating event" });
        }
        res.status(201).json({ message: "Event created successfully", eventId });
    });
});

// Route to get all events
router.get('/api/events', (req, res) => {
    // Retrieve all events using the Event model
    Event.getAll((error, events) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching events" });
        }
        res.status(200).json({ events });
    });
});

// Route to find an event by ID
router.get('/api/events/:eventId', (req, res) => {
    const eventId = req.params.eventId;

    // Find the event by ID using the Event model
    Event.findById(eventId, (error, event) => {
        if (error) {
            return res.status(500).json({ error: "Error finding event by ID" });
        }
        if (!event) {
            return res.status(404).json({ error: "Event not found" });
        }
        res.status(200).json({ event });
    });
});

module.exports = router;
