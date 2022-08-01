const jwt = require("jsonwebtoken");
const agency_schema = require("../model/AgencySchema");
const InstituteSchema = require("../model/InstituteSchema");
const StudentSchema = require("../model/StudentSchema");

const AuthenticateInstituteorStudent = async (req, res, next) => {
    try {
        const token1 = req.cookies.it;
        const token2 = req.cookies.st;
        if (!token1 || !token2) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        const id1 = jwt.verify(token1, process.env.TOKEN_SECRET)._id;
        const id2 = jwt.verify(token2, process.env.TOKEN_SECRET)._id;
        const result1 = await InstituteSchema.findOne({ _id: id1 });
        const result2 = await StudentSchema.findOne({_id: id2});
        if (!result1 || !result2) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        // console.log(result);
        // req.id = result._id;
        next();
    }
    catch (err) {
        res.status(500).json({
            message: 'server crashed...'
        })
    }
}

module.exports = AuthenticateInstituteorStudent;