const problem_schema = require("../model/Problem");
const solution_schema = require("../model/Solution");

module.exports = {
    get_all_solution: async (req, res) => {
        try {

        }
        catch (error) {

        }
    },

    post_solution: async (req, res) => {
        try {
            const {
                solution_desc,
                problem_id
            } = req.body;
            const new_solution = new solution_schema({
                student_id: req.id,
                solution_desc
            })

            const is_added = await new_solution.save();

            if (!is_added) return res.status(400).json({
                message: 'Please Enter valid details'
            })
            // problem_id taken from body
            const get_problem = await problem_schema.findOne({ _id: problem_id })
            var solution_ids = get_problem.solution_id.push(is_added._id);
            console.log(solution_ids)

            await get_problem.save();

            res.status(200).json({
                message: 'Your solution added successfully.'
            })
        } catch (error) {
            res.status(500).json({
                message: 'Server Crashed...'
            })
        }
    },

    update_solution: async (req, res) => {
        try {

        } catch (error) {

        }
    },

    remove_solution: async (req, res) => {
        try {

        } catch (error) {

        }
    }
}