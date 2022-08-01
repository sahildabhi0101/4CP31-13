const express = require("express");
const { studentRegister, studentLogin, studentProfile, profileUpdate } = require("../controllers/student.controller");
const AuthenticateStudent = require('../middleware/AuthenticateStudent')
const router = express();

// PATH: /api/student/...
router.post("/register", studentRegister);
router.post("/login", studentLogin);
router.get("/stuprofile", AuthenticateStudent, studentProfile)
router.put("/updateprofile", AuthenticateStudent, profileUpdate)

module.exports = router;