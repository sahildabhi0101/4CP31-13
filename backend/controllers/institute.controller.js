const Institute = require("../model/InstituteSchema");
const {
  instituteLoginValidation,
  instituteRegisterValidation,
} = require("../validators/validation");
const jwt = require("jsonwebtoken");
const InstituteSchema = require("../model/InstituteSchema");

// @route    POST api/institute
// @desc     Register Institute
// @access   Public
exports.instituteRegister = async (req, res) => {
  // Register detail validate
  const { error } = instituteRegisterValidation(req.body);
  if (error) return res.status(400).send(error.details[0]);
  const {
    institute_name,
    email,
    mobile_no,
    address,
    registration_no,
    success_story_id,
    password,
  } = req.body;

  const institute = new Institute({
    institute_name,
    email,
    mobile_no,
    address,
    registration_no,
    success_story_id,
    password,
  });

  try {
    // institute already exits or not
    const instituteExist = await Institute.findOne({ email: email });
    if (instituteExist)
      return res.status(400).send({ error: "Email Already exits" });
    // save institute
    const savedInstitute = await institute.save();
    console.log(savedInstitute);
    return res.status(200).json({ message: "Signup success! Please Login..." });
  } catch (err) {
    res.status(400).send(err);
  }
};

// @route    POST /api/institute/login
// @desc     Login Institute
// @access   Public
exports.instituteLogin = async (req, res) => {
  // Login Validation
  const { error } = instituteLoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0]);

  const { email, password } = req.body;

  // check is institute is exits or not
  const institute = await Institute.findOne({ email: email });
  if (!institute)
    return res.status(400).send({ error: "Institute is not exits" });

  // if institude is found that check email and password
  // authentication model created in model and use here
  if (!institute.authenticate(password)) {
    return res.status(403).json({
      error: "Email and password are not match!",
    });
  }
  // Create and assig token
  const token = jwt.sign({ _id: institute._id, whoIsLoggedIn: "institute"}, process.env.TOKEN_SECRET);
  // console.log(token);
  res.cookie('it', token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  res.cookie('st', '')
  res.cookie('at', '')
  res.cookie('int', '')
  res.cookie('user', 'institute')
  res
    .header("auth-token", token)
    .send({ token, detail: { _id: institute._id, email: institute.email, name: institute. institute_name } });
};

exports.instituteProfile = async (req, res) => {
  try {
    console.log('sid', req.id)
    const user = await InstituteSchema.findById({ _id: req.id });
    console.log(user)
    if (user) {
      var response = {
        message: 'Institute is exist.',
        statusCode: 200,
        userdata: user
      }
      res.status(200).send(response);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
}

exports.profileUpdate = async (req, res) => {
  try {
    console.log('sid', req.id)
    const isUpdate = await InstituteSchema.findByIdAndUpdate({ _id: req.id }, req.body, {
      new: true
    });
    console.log(isUpdate)
    if (isUpdate) {
      var response = {
        message: 'Institute Detail Updated.',
        statusCode: 200,
        userdata: isUpdate
      }
      res.status(200).send(response);
    }
  } catch (error) {
    console.log(error)
    res.status(500).send('error')
  }
}