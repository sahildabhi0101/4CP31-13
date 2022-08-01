const express = require("express");
const router = express();

const student = require("./student.routes");
const institute = require("./institute.routes");
const investor = require("./investor.routes");
const agency = require("./agency.routes");
const project = require("./project.routes");
const successStory = require("./successStory.routes");
const logout = require("./logout.routes");
const problem = require('./problem.routes')
// const { education } = require("../controllers/education");
// const { institute } = require("../controllers/institute");
// const { successStory } = require("../controllers/successStory");
// const { project } = require("../controllers/project");


router.use("/student", student);
router.use("/institute", institute);
router.use("/investor", investor);
router.use("/agency", agency);
router.use("/project", project);
router.use("/problem", problem);
router.use("/successStory", successStory);
router.use("/logout", logout);

module.exports = router;