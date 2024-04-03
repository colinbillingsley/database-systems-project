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

// Get single university by name
router.get('/api/:uni_name', async (req, res) => {
  const { uni_name } = req.params;

  University.getUniByName(uni_name, (error, university) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
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
