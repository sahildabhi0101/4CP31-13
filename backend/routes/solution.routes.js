const express = require('express')
const routes = express.Router();
const AuthenticateSolution = require("../middleware/AuthenticateSolution");
const { get_all_solution,
    post_solution } = require('../controllers/solutions_controller')



routes.get('/getsolutions', get_all_solution);
routes.post('/postsolution', AuthenticateSolution, post_solution)
module.exports = routes;