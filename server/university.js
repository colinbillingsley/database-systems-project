const express = require('express');
const router = express.Router();
const University = require('./models/University');

// Get all universities
router.get('/api/all', async (req, res) => {
  University.getAll((error, universities) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json(universities);
  });
});

// Get single university id by name
router.get('/api/:uni_name', async (req, res) => {
  const { uni_name } = req.params;

  University.getUniByName(uni_name, (error, university) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json(university);
  });
});

// Get single university by id
router.get('/api/university/:uni_id', async (req, res) => {
  const { uni_id } = req.params;

  University.getUniById(uni_id, (error, university) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    if (!university) {
      return res.status(404).json({ error: "University not found" });
    }
    res.json(university);
  });
});

// Create a new university
router.post('/api/create', async (req, res) => {
  const { uni_name, desc, location, NOstudents, domain } = req.body;

  if (!uni_name || !desc || !location || !NOstudents || !domain) {
    return res.status(400).json({ error: "All fields are required!" });
  }
  
  University.create(uni_name, desc, location, NOstudents, domain, (error, uni_id) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json({ uni_id });
  });
});

module.exports = router;
