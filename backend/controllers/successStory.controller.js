const SuccessStory = require("../model/SuccessStorySchema");

// @route    POST api/successStory/add
// @desc     successStory
// @access   Private
exports.AddSuccessStory = async (req, res) => {
  const { success_title, success_desc, project_id, institute_id } = req.body;
  if (project_id === undefined && institute_id === undefined) {
    return res.status(400).send("for adding success Story project id or institute id is required");
  }
  const successStory = new SuccessStory({
    success_title,
    success_desc,
    project_id,
    institute_id,
  });

  try {
    const savedSuccessStory = await successStory.save();

    return res.status(200).json({ message: "Success Story added" });
  } catch (err) {
    res.status(400).send(err);
  }
};


// @route    GET /api/successStory
// @desc     All successStory
// @access   Public
exports.getAllSuccessStories = async (req, res) => {
  try {
    const successStories = await SuccessStory.find({});
    res.status(200).send(successStories);
  }
  catch (err) {
    console.log("Error while getting all success Story" + err);
    res.status(500).send({ message: "Server Error" });
  }
}

// @route    GET /api/successStory/p/projectId
// @desc     Get a success Story of given project id
// @access   Public
exports.getSuccessStoryByProjectId = async (req, res) => {
  try {
    const project_id = req.params.projectId;
    const successStories = await SuccessStory.find({ project_id });
    res.status(200).send(successStories);
  }
  catch (err) {
    console.log("Error While getting success story by project id: " + err);
    res.status(400).send({ message: "Server Error" });
  }
}


// @route    GET /api/successStory/i/instituteId
// @desc     Get a success Story of given institute id
// @access   Public
exports.getSuccessStoryByInstituteId = async (req, res) => {
  try {
    const institute_id = req.params.instituteId;
    const successStories = await SuccessStory.find({ institute_id });
    res.status(200).send(successStories);
  }
  catch (error) {
    console.log("Error while getting success tory by institute id: " + error);
    res.status(400).send({ message: "Server Error" });
  }
}

exports.getStoriesByPage = async (req, res) => {
  try {

    const page = parseInt(req.query.page);
    const limitPerPage = 2;
    const count = await SuccessStory.count({});
    const stories = await SuccessStory.find({}, {}, { skip: (page - 1) * limitPerPage, limit: limitPerPage });

    const totalPage = Math.ceil(count / limitPerPage);

    if (stories && page <= totalPage) {
      var response = {
        status: true,
        statusCode: 200,
        message: 'success',
        stories,
        currentItemCount: stories.length,
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

  } catch (error) {
    res.status(400).send({ message: "Server Error" });
  }
}