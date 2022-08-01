const express = require("express");
const { investorLogin, investorRegister, getInvestor, investorProfile, profileUpdate } = require("../controllers/investor.controller");
const AuthenticateInvestor = require('../middleware/AuthenticateInvestor')

const router = express();

// PATH: /api/investor/...
router.post("/register", investorRegister);
router.post("/login", investorLogin);

router.post("/getInvestor", getInvestor);
router.get("/investorprofile", AuthenticateInvestor, investorProfile)
router.put("/updateprofile", AuthenticateInvestor, profileUpdate)


module.exports = router;