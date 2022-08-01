const jwt = require("jsonwebtoken");
const student_schema = require("../model/StudentSchema");

const AuthenticateStudent = async (req, res, next) => {
  try {
    const token = req.cookies.st;

    console.log("Token is: ", token);
    if (!token) {
      return res.status(400).json({
        message: "1 You must need to login for access this page",
      });
    }

    const id = jwt.verify(token, process.env.TOKEN_SECRET)._id;
    const result = await student_schema.findOne({ _id: id });
    if (!result) {
      return res.status(400).json({
        message: "11 You must need to login for access this page",
      });
    }
    // console.log(result);
    req.id = result._id;
    next();
  } catch (err) {
    res.status(500).json({
      message: "server crashed...",
    });
    console.log("Error is: " + err);
  }
};

module.exports = AuthenticateStudent;
