const jwt = require("jsonwebtoken");
const InvestorSchema = require("../model/InvestorSchema");
const Investor = require("../model/InvestorSchema");
const {
  investorRegisterValidation,
  investorLoginValidation,
} = require("../validators/validation");

// @route    POST api/investor
// @desc     Register Investor
// @access   Public
exports.investorRegister = async (req, res) => {
  // Validation of student
  const { error } = investorRegisterValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const {
    name,
    mobile_no,
    email,
    education_id,
    linkedin_url,
    twitter_url,
    password,
  } = req.body;

  // check is student exist
  const emailExist = await Investor.findOne({ email: email });
  if (emailExist) return res.status(400).send("Email already exists.");

  // Create a new investor
  const investor = new Investor({
    name,
    mobile_no,
    email,
    education_id,
    linkedin_url,
    twitter_url,
    password,
  });

  try {
    const savedInvestor = await investor.save();
    // res.send(savedInvestor);
    return res.status(200).json({ message: "Signup success! Please Login..." });
  } catch (err) {
    res.status(400).send(err);
  }
};

// @route    POST api/investor/login
// @desc     Login Investor
// @access   Public
exports.investorLogin = async (req, res) => {
  // Login Validation
  const { error } = investorLoginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const { email, password } = req.body;

  // check is user exist
  const investor = await Investor.findOne({ email: email });
  if (!investor) return res.status(400).send("Email or Password is wrong.");

  // if user is found make sure the email and password matches
  // create authenticate method in model and use here.
  if (!investor.authenticate(password)) {
    return res.status(403).json({
      error: "Email and password do not match!",
    });
  }

  // Create and assign token
  const token = jwt.sign({ _id: investor._id, whoIsLoggedIn: "investor" }, process.env.TOKEN_SECRET);
  // console.log(token);
  res.cookie('int', token, {
    expires: new Date(Date.now() + 25892000000),
    httpOnly: true,
  });
  res.cookie('st', '')
  res.cookie('at', '')
  res.cookie('it', '')
  res.cookie('user', 'investor')
  res
    .header("auth-token", token)
    .send({ token, detail: { _id: investor._id, email: investor.email, name: investor.name } });
};

// @route    POST api/investor/getInvestor
// @desc     Get Investor's details
// @access   Private
exports.getInvestor = async (req, res) => {
  try {
    const { investor_id } = req.body;

    // check is user exist
    const investor = await Investor.findOne({ _id: investor_id }).select([
      "-hashed_password",
      "-salt",
      "-createdAt",
      "-updatedAt",
    ]);

    res.status(200).send({ investor: investor });
  } catch (err) {
    console.log("Error while displaying investor" + err);
    res.status(200).send({ error: "Error while displaying investor" });
  }
};

exports.investorProfile = async (req, res) => {
  try {
    console.log('sid', req.id)
    const user = await InvestorSchema.findById({ _id: req.id });
    console.log(user)
    if (user) {
      var response = {
        message: 'Investor is exist.',
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
    const isUpdate = await InvestorSchema.findByIdAndUpdate({ _id: req.id }, req.body, {
      new: true
    });
    console.log(isUpdate)
    if (isUpdate) {
      var response = {
        message: 'Investor Detail Updated.',
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