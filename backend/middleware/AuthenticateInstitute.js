const jwt = require("jsonwebtoken");
const InstituteSchema = require("../model/InstituteSchema")

const AuthenticateInstitute = async (req, res, next) => {
    try {
        // getting token from cookie
        const token = req.cookies.it;
        if (!token) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        const id = jwt.verify(token, process.env.TOKEN_SECRET)._id;
        const result = await InstituteSchema.findOne({ _id: id });
        if (!result) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        // console.log(result);
        req.id = result._id;
        next();
    }
    catch (err) {
        res.status(500).json({
            message: 'server crashed...'
        })
    }
}

module.exports = AuthenticateInstitute;