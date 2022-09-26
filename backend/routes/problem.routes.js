const express = require('express')
const routes = express.Router();
const checkAuthAgency = require("../utils/checkAuthAgency");
const { get_all_problems,
    getOneProblemAgency,
    post_problem,
    update_problem,
    remove_problems,
    allAgencyProblem,
    get_all_problems_by_page, 
    agencyProblem,
    displayProblem,
    oneProblemAgency,
    deleteAgencyProblem} = require('../controllers/problems.controller')



routes.get('/all', get_all_problems);
routes.get('/problembypage', get_all_problems_by_page);
routes.get('/getallproblems', checkAuthAgency, allAgencyProblem);
routes.get('/getproblem/:problem_id', getOneProblemAgency);
routes.post("/displayproblem", displayProblem)

routes.post('/addproblem',checkAuthAgency, post_problem)
// routes.post("/allagencyproblems",checkAuthAgency,allAgencyProblems)

routes.get("/oneproblemagency/:problem_id", checkAuthAgency, oneProblemAgency)
routes.put('/updateproblem/:problem_id', checkAuthAgency, update_problem);
routes.delete('/deleteagencyproblem/:problem_id',checkAuthAgency, deleteAgencyProblem);
module.exports = routes;