const express = require('express');
const router = express.Router();
const University = require('./University');

// Get all universities
router.get('/universities', async (req, res) => {
  University.getAll((error, universities) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json(universities);
  });
});

// Create a new university
router.post('/universities', async (req, res) => {
  const { desc, location, NOstudents, domain } = req.body;
  University.create(desc, location, NOstudents, domain, (error, uni_id) => {
    if (error) {
      return res.status(500).json({ message: 'Server Error' });
    }
    res.json({ uni_id });
  });
});

module.exports = router;
