const express = require('express');
const router = express.Router();
const SuperAdmin = require('./models/SuperAdmin');
const RsoEvent = require('./models/RsoEvent');
const RSO = require('./models/RSO');


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

  // Route to approve event
  router.patch('/api/event/approve/:event_id', (req, res) => {
    const { event_id } = req.params;

    if (!event_id) {
      return res.status(400).json({ error: "event id was not gathered" });
    }

    RsoEvent.approveEvent(event_id, (error, result) => {
      if (error) {
        console.error('Error approving event:', error);
        return res.status(500).json({ error: 'Error approving event' });
      }
      res.status(201).json({ message: "Event has been approved", result });
    })
  })

  // Route to deny event
  router.patch('/api/event/deny/:event_id', (req, res) => {
    const { event_id } = req.params;

    if (!event_id) {
      return res.status(400).json({ error: "event id was not gathered" });
    }

    RsoEvent.denyEvent(event_id, (error, result) => {
      if (error) {
        console.error('Error denying event:', error);
        return res.status(500).json({ error: 'Error denying event' });
      }
      res.status(201).json({ message: "Event has been denied", result });
    })
  })

  // Route to approve RSO
  router.patch('/api/rso/approve/:rso_id', (req, res) => {
    const { rso_id } = req.params;

    if (!rso_id) {
      return res.status(400).json({ error: "rso id was not gathered" });
    }

    RSO.approveRSO(rso_id, (error, result) => {
      if (error) {
        console.error('Error approving RSO:', error);
        return res.status(500).json({ error: 'Error approving RSO' });
      }
      res.status(201).json({ message: "RSO has been approved", result });
    })
  })

  // Route to deny RSO
  router.patch('/api/rso/deny/:rso_id', (req, res) => {
    const { rso_id } = req.params;

    if (!rso_id) {
      return res.status(400).json({ error: "rso id was not gathered" });
    }

    RSO.denyRSO(rso_id, (error, result) => {
      if (error) {
        console.error('Error denying RSO:', error);
        return res.status(500).json({ error: 'Error denying RSO' });
      }
      res.status(201).json({ message: "RSO has been denied", result });
    })
  })
  
  module.exports = router;