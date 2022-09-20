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
    agencyProblem} = require('../controllers/problems.controller')



routes.get('/all', get_all_problems);
routes.get('/problembypage', get_all_problems_by_page);
routes.get('/getallproblems', checkAuthAgency, allAgencyProblem);
routes.get('/getproblem/:problem_id', getOneProblemAgency);

routes.post('/addproblem',checkAuthAgency, post_problem)
// routes.post("/agencyproblem",checkAuthAgency,agencyProblem)

routes.put('/updateproblem/:problem_id', checkAuthAgency, update_problem);
routes.delete('/removeproblem/:problem_id', remove_problems);
module.exports = routes;