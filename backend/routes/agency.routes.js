const express = require("express");
const { agencyRegister, agencyLogin, agencyProfile, profileUpdate } = require("../controllers/Agency.controller");
const AuthenticateAgency = require("../middleware/AuthenticateAgency")
const router = express();

// PATH: /api/institute/...
router.post("/register", agencyRegister);
router.post("/login", agencyLogin);
router.get("/agencyprofile", AuthenticateAgency, agencyProfile)
router.put("/updateprofile", AuthenticateAgency, profileUpdate)

module.exports = router;