const Education = require("../model/Education");

// @route    POST api/education
// @desc     Education
// @access   Private
exports.education = async (req, res) => {
  const {
    institute_name,
    email,
    mobile_no,
    address,
    field_of_study,
    graduation_year,
  } = req.body;

  const education = new Education({
    institute_name,
    email,
    mobile_no,
    address,
    field_of_study,
    graduation_year,
  });

  try {
    const savedEducation = await education.save();

    return res.status(200).json({ message: "Education added" });
  } catch (err) {
    res.status(400).send(err);
  }
};
