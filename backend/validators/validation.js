const { string } = require("joi");
const Joi = require("joi");

// student Register Validation
exports.studentRegisterValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    mobile_no: Joi.string().min(10).required(),
    email: Joi.string().min(6).required().email(),
    education_id: Joi.string().min(0).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// student Login Validation
exports.studentLoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// investor Register Validation
exports.investorRegisterValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(6).required(),
    mobile_no: Joi.string().min(10).required(),
    email: Joi.string().min(6).required().email(),
    education_id: Joi.string().min(0).required(),
    linkedin_url: Joi.string().min(0).required(),
    twitter_url: Joi.string().min(0).required(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// investor Login Validation
exports.investorLoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// institute register validation
exports.instituteRegisterValidation = (data) => {
  const schema = Joi.object({
    institute_name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    mobile_no: Joi.string().min(10).required(),
    address: Joi.string().min(0),
    registration_no: Joi.string().required(),
    success_story_id: Joi.array(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// institute login validation
exports.instituteLoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return schema.validate(data);
};

// Agency Register Validation
exports.agencyRegisterValidation = (data) => {
  const schema = Joi.object({
    agencies_name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    mobile_no: Joi.string().min(10).required(),
    address: Joi.string().required(),
    password: Joi.string().min(6).require(),
    problem_id: Joi.array(),
  })
  return schema.validate(data);
}

// Agency login validation
exports.agencyLoginValidation = (data) => {
  const schema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  })
  return schema.validate(data);
}