const express = require('express');
const router = express.Router();
const Event = require('./models/Event');
const PublicEvent = require('./models/PublicEvent');
const PrivateEvent = require('./models/PrivateEvent');
const RsoEvent = require('./models/RsoEvent');

// Route to create a new event
router.post('/api/events', (req, res) => {
    console.log("Route ran");
    const { uni_id, time, desc, location_name, date, category, event_host, event_phone, event_email, event_type, event_name, longitude, latitude } = req.body;

    // Check if all required fields are provided
    if (!uni_id || !time || !desc || !location_name || !date || !category || !event_host || !event_phone || !event_email || !event_type || !event_name || !longitude || !latitude) {
        return res.status(400).json({ error: "All fields are required" });
    }

    else {
        // check and see if an event takes place during the timeframe inputted at the location selected
        Event.determineEventTimeTaken(time, date, location_name, longitude, latitude, (error, count) => {
            if (error) {
                return res.status(500).json({ error: "Error determining if event occurs at this location during the timeframe" });
            }
            // if there is a count, an event already occurs at the location during the timeframe
            if (count > 0) {
                return res.status(400).json({ error: "Event occurs at this location during the inputted timeframe. Please select another date or time" });
            } 
            // no event occurs at the location during the timeframe
            else {
                // Create a new event using the Event model
                Event.create(
                    uni_id,
                    time,
                    desc,
                    location_name,
                    date,
                    category,
                    event_host,
                    event_phone,
                    event_email,
                    event_type,
                    event_name,
                    longitude,
                    latitude, (error, eventId) => {
                    if (error) {
                        return res.status(500).json({ error: "Error creating event" });
                    }
                    res.status(200).json({ message: "Event created successfully", eventId });
                });
            }
        })
    }
});

// Route to insert newly created event into the DB via its type
router.post('/api/event/type', (req, res) => {
    const { event_id, created_by, event_type, rso_id } = req.body;

    // make sure all fields are correctly passed
    if (!event_id || !created_by || !event_type) {
        return res.status(400).json({ error: "event_id, created_by, or event_type was not passed correctly" });
    }

    if (event_type === 'RSO' && !rso_id) {
        return res.status(400).json({ error: "rso_id was not passed correctly" });
    }

    else {
        if (event_type === 'Private') {
            // insert event into the Public_Events table
            PrivateEvent.add(event_id, created_by, (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Error inserting event via Private" });
                }
                res.status(200).json({ result });
            })
        }
        else if (event_type === 'RSO') {
            // insert event into the Public_Events table
            RsoEvent.add(event_id, rso_id, (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Error inserting event via RSO" });
                }
                res.status(200).json({ result });
            })
        }
        else {
            // insert event into the Public_Events table
            PublicEvent.add(event_id, created_by, (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Error inserting event via Public" });
                }
                res.status(200).json({ result });
            })
        }
    }
})

// Route to get all events
router.get('/api/events', (req, res) => {
    // Retrieve all events using the Event model
    Event.getEvents((error, events) => {
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

// Route to get all events specific to a university
router.get('/api/events/:universityId', (req, res) => {
    const universityId = req.params.universityId;

    // Retrieve all events specific to the university using the Event model
    Event.getAll(universityId, (error, events) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching events" });
        }
        res.status(200).json({ events });
    });
});

router.get('/api/requests', (req, res) => {
    Event.getEventRequests((error, requests) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching Event requests" });
        }
        if (!requests) {
            return res.status(404).json({ error: "No Event requests currently" });
        }
        res.status(200).json({ requests });
    })
})

module.exports = router;
