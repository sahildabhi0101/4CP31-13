const express = require("express");
const { AddSuccessStory,
    getAllSuccessStories,
    getSuccessStoryByProjectId,
    getSuccessStoryByInstituteId,
    getStoriesByPage } = require("../controllers/successStory.controller");
const AuthenticateInstituteorStudent = require("../middleware/AuthenticateInstituteStudent");

const router = express();

// /api/successStory/...
router.get("/", getAllSuccessStories);
router.post("/add", AuthenticateInstituteorStudent, AddSuccessStory);
router.get("/p/:projectId", getSuccessStoryByProjectId);
router.get("/i/:instituteId", getSuccessStoryByInstituteId);
router.get("/stories", getStoriesByPage)


module.exports = router;