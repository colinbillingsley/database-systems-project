const express = require('express');
const router = express.Router();
const RSO = require('./models/RSO');

// Route to get all RSOs
router.get('/api/rsos', (req, res) => {
    // Retrieve all rsos using the RSO model
    RSO.getRSOs((error, rsos) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching rsos" });
        }
        res.status(200).json({ rsos });
    });
});

// Route to get all RSOs in a specific university
router.get('/api/rsos/:universityId', (req, res) => {
    const { universityId } = req.params;

    // Retrieve all RSOs in the specified university using the RSO model
    RSO.getAllByUniversity(universityId, (error, rsos) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching RSOs by university ID" });
        }
        if (!rsos || rsos.length === 0) {
            return res.status(404).json({ error: "No RSOs found in the specified university" });
        }
        res.status(200).json({ rsos });
    });
});


// Route to find an RSO by ID
router.get('/api/rso/:rsoId', (req, res) => {
    const rsoId = req.params.rsoId;

    // Find the RSO by ID using the RSO model
    RSO.findById(rsoId, (error, rso) => {
        if (error) {
            return res.status(500).json({ error: "Error finding RSO by ID" });
        }
        if (!rso) {
            return res.status(404).json({ error: "RSO not found" });
        }
        res.status(200).json({ rso });
    });
});

// Route to get members of RSO
router.get('/api/rso/members/:rsoId', (req, res) => {
    const { rsoId } = req.params;

    // get the members via the RSO model
    RSO.getRsoMembers(rsoId, (error, members) => {
        if (error) {
            return res.status(500).json({ error: "Error finding members from RSO" });
        }
        if (!members) {
            return res.status(404).json({ error: "No members found" });
        }
        res.status(200).json({ members });
    })
});

// Route to create a new RSO
router.post('/api/rso/create', (req, res) => {
    const { uni_id, name, created_by, type, desc, email, number, status } = req.body;
    console.log("create rso route ran")

    // Check if all required fields are provided
    if (!uni_id || !name || !created_by || !type || !email || !number || !status || !desc) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new RSO using the RSO model
    RSO.create(uni_id, name, created_by, type, desc, email, number, status, (error, rsoId) => {
        if (error) {
            return res.status(500).json({ error: "Error creating RSO" });
        }
        res.status(201).json({ message: "RSO created successfully", rsoId });
    });
});

// Route to join an RSO
router.post('/api/rso/join/:rso_id/:uid', (req, res) => {
    const { rso_id, uid } = req.params;

    // check and see if the user has already joined the RSO
    RSO.determineUserJoinedRSO(rso_id, uid, (error, userJoinedRSO) => {
        // error trying to look up in db
        if (error) {
            return res.status(500).json({ error: "Error finding user and rso" });
        }

        // user has already joined, display error message
        if (userJoinedRSO) {
            return res.status(409).json({error: "User has already joined the RSO"});
        } 

        // user has not joined, proceed with joining process
        else {
            // join an RSO using the RSO model
            RSO.joinRSO(rso_id, uid, (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Error joining RSO" });
                }
                res.status(200).json({ message: "Joined RSO successfully", result });
            });
        }
    })
});


// route for getting all rso's that a user is part of 
router.get('/api/user/rsos/:userId', (req, res) => {
    const { userId } = req.params;

    // Retrieve RSOs by user ID using the RSO model
    RSO.getRSOsByUserId(userId, (error, rsos) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching RSOs by user ID" });
        }
        if (!rsos || rsos.length === 0) {
            return res.status(404).json({ error: "User is not a member of any RSOs" });
        }
        res.status(200).json({ rsos });
    });
});

// route for getting rso from given RSO name
router.get('/api/rsos/name/:name/:uid', (req, res) => {
    const { name, uid } = req.params;

    if (!name) {
        return res.status(400).json({ error: "name not passed correctly" });
    }

    // Retrieve RSO by name using the RSO model
    RSO.findByName(name, (error, rso) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching RSOs by user name" });
        }
        // rso not found by name
        if (!rso) {
            return res.status(404).json({ error: "No RSO found by given host name" });
        }
        // check and see if the creator of the rso is the one creating the event
        if (rso.created_by !== parseInt(uid)) {
            console.log(rso.created_by, uid)
            return res.status(404).json({ error: "You are not the owner of the given RSO Host Name. You must be the owner to create this event!" });
        }
        // return the rso id
        const rsoId = rso.rso_id
        res.status(200).json({ rsoId });
    });
});


router.delete('/api/rso/leave/:rsoId/:userId', (req, res) => {
    const { rsoId, userId } = req.params;

    console.log(rsoId, userId)

    // check and see if the user has even joined the RSO
    RSO.determineUserJoinedRSO(rsoId, userId, (error, userJoinedRSO) => {
        // error trying to look up in db
        if (error) {
            return res.status(500).json({ error: "Error finding user and rso" });
        }

        // user is a part of the rso, proceed with removal
        if (userJoinedRSO) {
            console.log("user is a member of RSO")
            RSO.leaveRSO(rsoId, userId, (error, result) => {
                if (error) {
                    return res.status(500).json({ error: "Error leaving RSO" });
                }
                res.status(200).json({ message: "Left RSO successfully", });
            });
        } 

        // user is not a part of the rso, error
        else {
            return res.status(409).json({error: "User is not a part of the RSO"});
        }
    })
});

router.delete('/api/delete/rso/:rso_id', (req, res) => {
    const { rso_id } = req.params;

    RSO.deleteRSO(rso_id, (error, rso) => {
        if (error) {
            return res.status(500).json({ error: "Error deleting RSO" });
        }
        if (!rso) {
            return res.status(404).json({ error: "RSO not found" });
        }
        res.status(200).json({ rso });
    })
})

// Route to get RSO requests for Super Admin to approve
router.get('/api/requests', (req, res) => {
    RSO.getRsoRequests((error, requests) => {
        if (error) {
            return res.status(500).json({ error: "Error fetching RSO requests" });
        }
        if (!requests) {
            return res.status(404).json({ error: "No RSO requests currently" });
        }
        res.status(200).json({ requests });
    })
})

module.exports = router;
