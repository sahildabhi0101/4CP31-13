const Project = require("../model/ProjectShema");
const InvestorProject = require("../model/InvestorProjectSchema");
const StudentProject = require("../model/StudentProjectSchema");
const Student = require("../model/StudentSchema");
const checkAuth = require("../utils/checkAuthStudent");
const StudentSchema = require("../model/StudentSchema");
const ProjectShema = require("../model/ProjectShema");
const StudentProjectSchema = require("../model/StudentProjectSchema");
const { all } = require("../routes/project.routes");

// @route    POST api/project/add
// @desc     Project
// @access   Private
exports.addProject = async (req, res) => {
  console.log('add project', req.body)
  // geting data from request
  const {
    project_title,
    project_desc,
    tags,
    image,
    success_Story_id,
    student_ids,
    investor_ids,
  } = req.body;

  // create project project object and save it
  const project = new Project({
    project_title,
    project_desc,
    tags,
    image,
    success_Story_id,
  });
  console.log('img', image)

  try {
    const savedProject = await project.save();

    return res.status(200).json({ message: "Project added in student's personal section", savedProject });
    
    throw "Errow While Saving data";
  } catch (err) {
    res.status(400).send(err);
  }
};

// TODO :- duplicate record may insert
// That is utility function that helps to map investor id with project id and save it
const addInvestorsFun = async (project_id, investor_ids) => {
  try {
    // create an array of obejct in form of {investor_id, project_id}
    const projectInvestorDetail = investor_ids.map((investor_id) => {
      return {
        investor_id,
        project_id,
      };
    });

    // save to data base
    const investorProjectSave = await InvestorProject.insertMany(
      projectInvestorDetail
    );
    // is saved successfully then return true else false
    if (investorProjectSave) return true;
    else return false;
  } catch (err) {
    console.log("Error while adding investor in project : " + err);
    return false;
  }
};

// This is a utility function that helps to map student id with project id and save to database
const addStudentproject = async (project_id, student_id) => {
  try {
    const data = new StudentProject({
      project_id,
      student_id,
    });
    const result = await StudentProject.findOne({ project_id, student_id });
    if (result) {
      console.log("Result already founds")
      return { isError: true, errorMsg: "Student already exists" }
    }
    const student_project = await data.save();

    if (student_project) return { isError: false };
    else return { isError: true, errorMsg: "Server Error! Please try again" };
  }
  catch (err) {
    console.log("Error while adding students in projects: " + err);
  }
};

// @route    POST /api/project/addInvestor
// @desc     Add Investor in project
// @access   Private
exports.addInvestors = (req, res) => {
  const { project_id, investor_id } = req.body;
  // if addInvestorFun return true then investor is added else some error is found
  try {
    if (addInvestorsFun(project_id, investor_id)) {
      res.status(200).send({ message: "Investor added Successfully" });
    }
  }
  catch (err) {
    res.status(500).send({ error: err });
  }
};

// @route    POST /api/project/removeInvestor
// @desc     Remove Investor from projects
// @access   Private
exports.removeInvestor = async (req, res) => {
  try {
    const { project_id, investor_id } = req.body;
    // delete investor from project
    const cnt = await InvestorProject.deleteOne({ project_id, investor_id });
    res.status(200).send({ message: "Investor Deleted" });
  } catch (err) {
    console.log("Error while delete investor from project: " + err);
    res.status(400).send({ error: "Error while deleting investor" });
  }
};

// @route    POST /api/project/addStudent
// @desc     Add Student in Project
// @access   Private
// This add student api for adding student in project its add student who is currently loggedin
exports.studentProject = async (req, res) => {
  // console.log("req.body", req.body);

  const { project_id } = req.body;

  // if addStudentFun return true then Student is added else some error is found
  const student_id = req.user._id;

  const result = await addStudentproject(project_id, student_id);
  if (!result.isError) {
    res.status(200).send({ message: "Project add in student project Successfully" });
  } else {
    res.status(500).send({ error: result.errorMsg });
  }
};

// @route    POST /api/project/addCollaborator
// @desc     Add Student in Project
// @access   Private
// This add student api for adding collaborator
exports.addCollaborator = async (req, res) => {
  const { project_id, email } = req.body;
  const student_id = await StudentSchema.findOne({ email }, { _id: 1 })

  if (!student_id) {
    return res.status(400).send({ message: "Email is not registered with us" })
  }

  const result = await addStudentsFun(project_id, student_id);
  // console.log(result)
  if (!result.isError) {
    res.status(200).send({ message: "Colloborator added Successfully" });
  } else {
    res.status(500).send({ error: result.errorMsg });
  }
};

// @route    POST /api/project/removeStudent
// @desc     Remove Student from projects
// @access   Private
exports.removeStudent = async (req, res) => {
  try {
    const { project_id, student_id } = req.body;
    // delete Student from project
    const cnt = await StudentProject.deleteOne({ project_id, student_id });
    res.status(200).send({ message: "Student Deleted" });
  } catch (err) {
    console.log("Error while delete Student from project: " + err);
    res.status(400).send({ error: "Error while deleting Student" });
  }
};


// @route    POST /api/project/displayProject
// @desc     Display Project from project id
// @access   Public
exports.displayProject = async (req, res) => {
  try {
    const { project_id } = req.body;
    // console.log(project_id);
    const project = await Project.findOne({ _id: project_id });

    const investors_ids = await InvestorProject.find({
      project_id: project_id,
    })
      .select("investor_id")
      .populate("investor_id");
    // console.log("Investor Data: ", investors_ids)

    //  Take Image URL here for data
    const students_data = await StudentProject.find({
      project_id
    }, { student_id: 1 }).populate({ path: 'student_id', select: ["name", "mobile_no", "email"] })
    // console.log("student ids: ", students_data)

    return res.status(200).json({
      project: project,
      investors_ids: investors_ids,
      students: students_data,
    });
  } catch (err) {
    console.log("Error while displaying project" + err);
    res.status(200).send({ error: "Error while displaying project" });
  }
};

// @route    GET /api/project/all
// @desc     Display all projects 
// @access   Public
exports.allProjects = async (req, res) => {
  try {
    const projects = await ProjectShema.find({}, { success_Story_id: 0 });

    // const projectsWithStudentData = Promise.all(projects.map(async (project) => {
    //   const students_data = await StudentProject.find({
    //     project_id: project._id
    //   }, { student_id: 1 }).populate({ path: 'student_id', select: ["name"] }); // here only take profile image
    //   // console.log({...project, students: students_data})
    //   return ({
    //     project: project,
    //     students: students_data
    //   });
    // }))
    // console.log(projectsWithStudentData)
    // if(projectsWithStudentData){
    //   res.status(200).send(
    //     projectsWithStudentData
    //   );
    // }

    const projectWithStudent = await ProjectShema.aggregate([
      {
        // look up for finding student id which is associated with projects
        $lookup: {
          from: 'studentprojects',
          localField: "_id",
          foreignField: "project_id",
          as: "student"
        }
      },
      // another lookup finding student data
      {
        $lookup: {
          from: "students", // override the previoud lookup result that is selected as student (that contain project_id, student_id data)
          localField: 'student.student_id',
          foreignField: "_id",
          as: "student"
        }
      },
      {
        $project: {
          "student.createdAt": 0,
          "student.updatedAt": 0,
          "student.hashed_password": 0,
          "student.salt": 0,
          "student.education_id": 0,
          "createdAt": 0,
          "updatedAt": 0
        }
      }
    ])

    res.status(200).send(projectWithStudent)

  } catch (err) {
    console.log("Error while getting all projects: ", err)
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}

exports.allfilterprojects = async (req, res) => {
  try {
    const projects = await ProjectShema.find({ tags: req.query.search }, { success_Story_id: 0 });
    res.status(200).send(projects)

  } catch (err) {
    console.log("Error while getting all filtered projects: ", err)
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}

exports.allProjectsByPage = async (req, res) => {
  try {
    // const projects = await ProjectShema.find({}, { success_Story_id: 0 });

    // const projectsWithStudentData = Promise.all(projects.map(async (project) => {
    //   const students_data = await StudentProject.find({
    //     project_id: project._id
    //   }, { student_id: 1 }).populate({ path: 'student_id', select: ["name"] }); // here only take profile image
    //   // console.log({...project, students: students_data})
    //   return ({
    //     project: project,
    //     students: students_data
    //   });
    // }))
    // console.log(projectsWithStudentData)
    // if(projectsWithStudentData){
    //   res.status(200).send(
    //     projectsWithStudentData
    //   );
    // }
    const page = parseInt(req.query.page)
    const limitPerPage = parseInt(req.query.limit)
    console.log('page ', page, ' ', limitPerPage)
    const count = await ProjectShema.count({});
    const projectWithStudent = await ProjectShema.aggregate([
      {
        // look up for finding student id which is associated with projects
        $lookup: {
          from: 'studentprojects',
          localField: "_id",
          foreignField: "project_id",
          as: "student"
        }
      },
      // another lookup finding student data
      {
        $lookup: {
          from: "students", // override the previoud lookup result that is selected as student (that contain project_id, student_id data)
          localField: 'student.student_id',
          foreignField: "_id",
          as: "student"
        }
      },
      {
        $project: {
          "student.createdAt": 0,
          "student.updatedAt": 0,
          "student.hashed_password": 0,
          "student.salt": 0,
          "student.education_id": 0,
          "createdAt": 0,
          "updatedAt": 0
        }
      }
    ]).skip(((page - 1) * (limitPerPage))).limit(limitPerPage)

    const totalPage = Math.ceil(count / limitPerPage);

    if (projectWithStudent && page <= totalPage) {
      var response = {
        status: true,
        statusCode: 200,
        message: 'success',
        projectWithStudent,
        currentItemCount: projectWithStudent.length,
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


  } catch (err) {
    console.log("Error while getting all projects: ", err)
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}

exports.allStudentProjects = async (req, res) => {
  try {
    const allProjects = await StudentProjectSchema.find({ student_id: req.user }).populate('project_id').populate('student_id')
    // console.log('stu projects', allProjects, req.user)
    res.status(200).json({
      message: 'all student projects.',
      userdata: allProjects
    })

  } catch (err) {
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}
exports.filterprojectsingleuser = async (req, res) => {
  try {
    console.log(req.query.search);
    // console.log("inside filter function",req.user)
    const allProjects = await StudentProjectSchema.find({ student_id: req.user, }).populate('project_id')
    // console.log(allProjects);
    let demo = []
    allProjects.map((project) => {
      project.project_id.tags.map((e) => {
        if (e === req.query.search) { demo.push(project) }
      })
    })
    // console.log(demo)
    res.status(200).json({
      message: 'all student projects.',
      userdata: demo
    })

  } catch (err) {
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}
exports.oneProjectStudent = async (req, res) => {
  try {
    const oneProjects = await StudentProjectSchema.findOne({ $and: [{ student_id: req.user._id }, { project_id: req.params.project_id }] }).populate('project_id')
    console.log('stu project', oneProjects, req.user)
    res.status(200).json({
      message: 'all student projects.',
      userdata: oneProjects
    })

  } catch (err) {
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}

exports.updateStudentProject = async (req, res) => {
  try {
    const isUpdate = await Project.findByIdAndUpdate({ _id: req.params.project_id }, req.body, {
      new: true
    })
    if (!isUpdate) {
      return res.status(400).json({
        'message': 'Your project is updated',
      })
    }
    res.status(200).json({
      message: 'Your project is updated.',
      userdata: isUpdate,
      statusCode: 200

    })

  } catch (err) {
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}

exports.deletestudentproject = async (req, res) => {
  try {
    const isDelete = await Project.findByIdAndDelete({ _id: req.params.project_id })
    const stuproject = await StudentProjectSchema.deleteOne({ project_id: req.params.project_id })
    if (!isDelete || !stuproject) {
      return res.status(400).json({
        'message': 'Your project is updated',
      })
    }
    res.status(200).json({
      message: 'Your project is updated.',
      userdata: isDelete,
      statusCode: 200

    })

  } catch (err) {
    res.status(500).send({ message: "Something want to wrong Please try later" })
  }
}
