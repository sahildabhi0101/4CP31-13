const express = require("express");
const {
  addProject,
  addInvestors,
  removeInvestor,
  addStudent,
  removeStudent,
  displayProject,
  addCollaborator,
  allProjects,
  allStudentProjects,
  oneProjectStudent,
  updateStudentProject,
  deletestudentproject,
  allProjectsByPage,
  allfilterprojects,
  filterprojectsingleuser
} = require("../controllers/project.controller");
const checkAuthStudent = require("../utils/checkAuthStudent");
const router = express();

// PATH: /api/project/...
router.get("/all", allProjects)
router.get("/filterdata", allfilterprojects)
router.get("/projectbypage", allProjectsByPage)
router.post("/add", addProject);

// Project Investor
router.post("/addinvestor", addInvestors);
router.post("/removeInvestor", removeInvestor);
router.post("/displayProject", displayProject);

// Project Student
router.post("/addstudent", checkAuthStudent, addStudent);
router.post("/removestudent", removeStudent);
router.post("/addCollaborator", checkAuthStudent, addCollaborator)
router.get("/allstudentprojects", checkAuthStudent, allStudentProjects)
router.get("/filterprojectsingleuser", checkAuthStudent, filterprojectsingleuser)
router.get("/oneprojectstudent/:project_id", checkAuthStudent, oneProjectStudent)
router.put("/updatestudentproject/:project_id", checkAuthStudent, updateStudentProject)
router.delete("/deletestudentproject/:project_id", checkAuthStudent, deletestudentproject)

module.exports = router;
