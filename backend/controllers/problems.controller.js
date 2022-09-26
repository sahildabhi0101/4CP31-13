const problem_schema = require('../model/ProblemSchema')
const agy_pbm_schema = require('../model/AgencyProblemSchema');
const Problem = require('../model/ProblemSchema');
const StudentProjectSchema = require('../model/StudentProjectSchema');
const AgencyProblemSchema = require('../model/AgencyProblemSchema');

const AddAgencyProblem = async (problem_id,agency_id) => {
	try{
		const data = new AgencyProblem({
			problem_id,
			agency_id,
		});
		const result = await AgencyProblem.findOne({problem_id,student_id});
		if(result){
			console.log("result already found")
			return { isError: true, errorMsg: "agency already exists"}
		}
		const agency_problem = await data.save();

		if(agency_problem) return { isError: false};
		else return { isError: true, errorMsg: "Server Error! Please try again"};
	}
	catch(err){
		console.log("Error while adding students in projects: "+err);
	}
}
module.exports = {
	get_all_problems: async (req, res) => {
		try {
			const problemWithAgencies = await problem_schema.aggregate([
				{
					// look up for finding student id which is associated with projects
					$lookup: {
						from: 'agencyproblems',
						localField: "_id",
						foreignField: "problem_id",
						as: "agency"
					}
				},
				// another lookup finding student data
				{
					$lookup: {
						from: "agencys", // override the previoud lookup result that is selected as student (that contain project_id, student_id data)
						localField: 'agency.agencies_id',
						foreignField: "_id",
						as: "agency"
					}
				},
				{
					$project: {
						"agency.mobile_no": 0,
						"agency.address": 0,
						"agency.createdAt": 0,
						"agency.updatedAt": 0,
						"agency.hashed_password": 0,
						"agency.salt": 0,
						"createdAt": 0,
						"updatedAt": 0
					}
				}
			])

			res.status(200).send(problemWithAgencies)


		} catch (err) {
			console.log("Error while getting all problems: ", err)
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	},
	get_all_problems_by_page: async (req, res) => {
		try {
			const page = parseInt(req.query.page)
			const limitPerPage = parseInt(req.query.limit)
			console.log('page ', page, ' ', limitPerPage)
			const count = await problem_schema.count({});
			const problemWithAgencies = await problem_schema.aggregate([
				{
					// look up for finding student id which is associated with projects
					$lookup: {
						from: 'agencyproblems',
						localField: "_id",
						foreignField: "problem_id",
						as: "agency"
					}
				},
				// another lookup finding student data
				{
					$lookup: {
						from: "agencys", // override the previoud lookup result that is selected as student (that contain project_id, student_id data)
						localField: 'agency.agencies_id',
						foreignField: "_id",
						as: "agency"
					}
				},
				{
					$project: {
						"agency.mobile_no": 0,
						"agency.address": 0,
						"agency.createdAt": 0,
						"agency.updatedAt": 0,
						"agency.hashed_password": 0,
						"agency.salt": 0,
						"createdAt": 0,
						"updatedAt": 0
					}
				}
			]).skip(((page - 1) * (limitPerPage))).limit(limitPerPage)

			const totalPage = Math.ceil(count / limitPerPage);
			
			if (problemWithAgencies && page <= totalPage) {
				var response = {
					status: true,
					statusCode: 200,
					message: 'success',
					problemWithAgencies,
					currentItemCount: problemWithAgencies.length,
					currentPage: page,
					itemPerPage: limitPerPage,
					totalPage: totalPage,
					lastPage: totalPage,
					totalItem: count
				}
				res.status(200).send(response)
			}
			else {
				var response = {
					status: false,
					statusCode: 400,
					message: 'Userdata not founded.',
					totalPage: totalPage
				}
				res.status(400).send(response)

			}
		}
		catch (err) {
			console.log("Error while getting all problems: ", err)
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	},
	post_problem: async (req, res) => {
		const {
			problem_title,
			problem_desc,
			tags,
			image,
			solution_id
		} = req.body;
		const new_problem = new Problem({
			problem_title,
			problem_desc,
			tags,
			image,
			solution_id
		})
		try {
			console.log('insidde... ',req.body)
			const is_added = await new_problem.save();
			if (!is_added) {
				return res.status(400).json({
					message: "Please Enter valid details"
				})
			}

			const agy_pbm = new agy_pbm_schema({
				problem_id: is_added._id,
				agencies_id: req.user._id
			})
			const is_add = await agy_pbm.save();
			if (!is_add) {
				return res.status(400).json({
					message: "Please Enter valid details"
				})
			}

			return res.status(200).json({
				message: 'Problem added in gov_pvt successfully.', is_added
			})
		} catch (error) {
			console.log(error);
			res.status(500).json({
				message: 'Server Crashed...'
			})
		}
	},
	// agency problem
	allAgencyProblem: async (req, res) => {
		try {
			const allproblem = await agy_pbm_schema.find({ agencies_id: req.user._id }).populate('problem_id')
			console.log('age problem', allproblem, req.user)
			res.status(200).json({
				message: 'all agecny problem.',
				userdata: allproblem
			})

		} catch (err) {
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	},

	getOneProblemAgency: async (req, res) => {
		try {
			// console.log('daat', req.user._id, req.params.problem_id)
			const oneProblem = await problem_schema.findOne({ _id: req.params.problem_id })
			// console.log('age project', oneProblem, req.user)
			// res.status(200).json({
			// 	message: 'one agency projects.',
			// 	userdata: oneProblem
			// })
			res.status(200).json(oneProblem)

		} catch (err) {
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	},

	update_problem: async (req, res) => {
		try {
			const isUpdate = await problem_schema.findByIdAndUpdate({ _id: req.params.problem_id }, req.body, {
				new: true
			})
			if (!isUpdate) {
				return res.status(400).json({
					'message': 'Your problem is updated',
				})
			}
			res.status(200).json({
				message: 'Your problem is updated.',
				userdata: isUpdate,
				statusCode: 200

			})

		} catch (err) {
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	},
	displayProblem: async (req,res) => {
		try{
			const { problem_id } = req.body;
			const problem = await Problem.findOne({_id: problem_id});
			
			const students_ids = await StudentProjectSchema.find({
				problem_id: problem_id,
			})
			.select("student_id")
			.populate("student_id");

			return res.status(200).json({
				problem: problem,
				students_ids: students_ids,
			});
		}catch(err){
			console.log("Error while displaying problem"+err);
			res.status(200).send({error:"Error while displaying problem"})
		}
	},
	oneProblemAgency: async (req, res) => {
		try{
			const oneProblem = await AgencyProblemSchema.findOne({ $ans: [{ agency_id: req.user._id},{project_id: req.params.problem_id}]}).populate('problem_id')
			console.log('agency problem',oneProblem, req.user)
			res.status(200).json({
				message: 'all agency problems.',
				userData: oneProblem
			})
		}catch(err){
			res.status(500).send({message:"Something want to wrong Please try later"})
		}
	},
	remove_problems: async (req, res) => {
		try {
			const isDelete = await problem_schema.findByIdAndDelete({ _id: req.params.problem_id })
			const ageproblem = await agy_pbm_schema.deleteOne({ problem_id: req.params.problem_id })
			if (!isDelete || !ageproblem) {
				return res.status(400).json({
					'message': 'Your problem is updated',
				})
			}
			res.status(200).json({
				message: 'Your problem is updated.',
				userdata: isDelete,
				statusCode: 200

			})

		} catch (err) {
			res.status(500).send({ message: "Something want to wrong Please try later" })
		}
	}

}