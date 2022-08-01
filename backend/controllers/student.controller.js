const {
  studentRegisterValidation,
  studentLoginValidation,
} = require("../validators/validation");
const Student = require("../model/StudentSchema");
const jwt = require("jsonwebtoken");

// @route   POST api/student/register
// @desc    Register Student
// @access  Public
exports.studentRegister = async (req, res) => {
  // Validation of student
  const { error } = studentRegisterValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { name, mobile_no, email, education_id, password } = req.body;
  console.log('register')
  // check is student exist
  const emailExist = await Student.findOne({ email: email });
  if (emailExist) return res.status(400).send("Email already exists.");

  // Create a new user
  const student = new Student({
    name,
    mobile_no,
    email,
    education_id,
    password,
  });

  try {
    const savedStudent = await student.save();
    // res.send(savedStudent);
    return res.status(200).json({ message: "Signup success! Please Login..." });
  } catch (err) {
    res.status(400).send(err);
  }
};

// @route   POST api/student/login
// @desc    Login Student
// @access  Public
exports.studentLogin = async (req, res) => {
  // Login Validation
  const { error } = studentLoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  // check is user exist
  const student = await Student.findOne({ email: email });
  if (!student) return res.status(400).send("Email or Password is wrong.");

  // if user is found make sure the email and password matches
  // create authenticate method in model and use here.
  if (!student.authenticate(password)) {
    return res.status(403).json({
      error: "Email and password do not match!",
    });
  }

  // Create and assign token
  const token = jwt.sign({ _id: student._id, whoIsLoggedIn: "student" }, process.env.TOKEN_SECRET);
  // console.log(token);
  res.cookie('st', token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  res.cookie('at', '')
  res.cookie('it', '')
  res.cookie('int', '')
  res.cookie('user', 'student')
  res
    .header("auth-token", token)
    .send({ token, detail: { _id: student._id, email: student.email, name: student.name } });
};


exports.studentProfile = async (req, res) => {
  try {
    console.log('sid', req.id)
    const isStudent = await Student.findById({ _id: req.id });
    console.log(isStudent)
    if (isStudent) {
      var response = {
        message: 'Student is exist.',
        statusCode: 200,
        userdata: isStudent
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
    const isUpdate = await Student.findByIdAndUpdate({ _id: req.id }, req.body, {
      new: true
    });
    console.log(isUpdate)
    if (isUpdate) {
      var response = {
        message: 'Student Detail Updated.',
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