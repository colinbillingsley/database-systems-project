const router = express.Router();
const SuperAdmin = require("../../models/SuperAdmin");

// finish api for super admin
app.post("/api/super_admin", (req, res)=> {
    res.json({
     status: "success",
     data: {},
    })
   });