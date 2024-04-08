const express = require('express');
const router = express.Router();
const Comment = require('./models/Comment');

// Method to create a comment
router.post('/api/create', (req, res) => {
    console.log("Route ran");
    const { event_id, uid, text, rating, timestamp } = req.body;

    // Check if all required fields are provided
    if (text.length === 0 || !rating) {
        return res.status(400).json({ error: "Please select a rating and insert a comment" });
    }

    // Check if only text is not provided
    if (text.length === 0) {
        return res.status(400).json({ error: "Please insert a comment" });
    }
    // Check if only rating is not provided
    if (rating === 0) {
        return res.status(400).json({ error: "Please select a rating" });
    }

    // Create a new event using the Event model
    Comment.create(event_id, uid, text, rating, timestamp, (error, commentId) => {
        if (error) {
            return res.status(500).json({ error: "Error creating comment" });
        }
        res.status(201).json({ message: "Comment created successfully", commentId });
    });
});

router.get('/api/comments/:event_id', (req, res) => {
    const { event_id } = req.params;

    // get comments from event
    Comment.getComments(event_id, (error, comments) => {
        if (error) {
            return res.status(500).json({ error: "Error finding comments by event id" });
        }
        res.status(200).json({ comments });
    });
});

router.patch('/api/update', (req, res) => {
    const { text, event_id, uid } = req.body;
    // Update comment
    Comment.updateComment(text, event_id, uid, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Error deleting comment" });
        }
        res.status(200).json({ message: "comment updated" });
    })
})

router.delete('/api/delete/:uid/:event_id', (req, res) => {
    const { uid, event_id } = req.params;

    // Delete comment from event
    Comment.deleteComment(uid, event_id, (error, result) => {
        if (error) {
            return res.status(500).json({ error: "Error deleting comment" });
        }
        res.status(200).json({ message: "comment deleted" });
    });
});

module.exports = router;
