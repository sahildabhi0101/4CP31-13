const express = require("express");
const { instituteLogin, instituteRegister, instituteProfile, profileUpdate } = require("../controllers/institute.controller");
const AuthenticateInstitute = require('../middleware/AuthenticateInstitute')
const router = express();

// PATH: /api/institute/...
router.post("/register", instituteRegister);
router.post("/login", instituteLogin);
router.get("/instituteprofile", AuthenticateInstitute, instituteProfile)
router.put("/updateprofile", AuthenticateInstitute, profileUpdate)

module.exports = router;