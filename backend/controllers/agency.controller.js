const {
  agencyRegisterValidation,
  agencyLoginValidation,
} = require("../validators/validation");
const Agency = require("../model/AgencySchema");
const jwt = require("jsonwebtoken");
const AgencySchema = require("../model/AgencySchema");

// @route    POST api/agency/register
// @desc     Register Agency
// @access   public
exports.agencyRegister = async (req, res) => {
  try {
    // Validator not work
    // const { error } = agencyRegisterValidation(req.body);
    // console.log("Error is: " + error);
    // if (error) return res.status(400).send(error.details[0]);

    const { agencies_name, email, mobile_no, address, problem_id, password } =
      req.body;
    // check that agency is already exits or not
    const agencyExits = await Agency.findOne({ email: email });
    if (agencyExits) return res.status(400).send("Agency already exists");

    // create new agency and save it
    const agency = new Agency({
      agencies_name,
      mobile_no,
      email,
      address,
      problem_id,
      password,
    });

    const agencySave = await agency.save();
    return res.status(200).json({ message: "Signup success! Please Login..." });
  } catch (error) {
    res.status(400).send(error);
  }
};

// @route    POST api/agency/login
// @desc     Agency Login
// @access   public
exports.agencyLogin = async (req, res) => {
  // Validaton of Login Data
  // const { error } = agencyLoginValidation(req.body);
  // if(error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  // check that agency exits or not
  const agency = await Agency.findOne({ email: email });
  if (!agency)
    return res.status(400).send("Angecy is not exits please register");

  // if exists then validate password
  // This authenticate function is created in the model file
  if (!agency.authenticate(password)) {
    return res.status(403).json({
      error: "Email and password are not match!",
    });
  }

  // if password match then generate token and send in response header
  const token = jwt.sign({ _id: agency._id, whoIsLoggedIn: "agency" }, process.env.TOKEN_SECRET);

  res.cookie('at', token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  res.cookie('it', '')
  res.cookie('st', '')
  res.cookie('int', '')
  res.cookie('user', 'agency')
  res
    .header("auth-token", token)
    .send({ token, detail: { _id: agency._id, email: agency.email, name: agency.agencies_name } });
};

exports.agencyProfile = async (req, res) => {
  try {
    console.log('sid', req.id)
    const user = await AgencySchema.findById({ _id: req.id });
    console.log(user)
    if (user) {
      var response = {
        message: 'Agency is exist.',
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
    const isUpdate = await AgencySchema.findByIdAndUpdate({ _id: req.id }, req.body, {
      new: true
    });
    console.log(isUpdate)
    if (isUpdate) {
      var response = {
        message: 'Agency Detail Updated.',
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