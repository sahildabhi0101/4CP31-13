const jwt = require("jsonwebtoken");
const agency_schema = require("../model/AgencySchema")

const AuthenticateAgency = async (req, res, next) => {
    try {
        const token = req.cookies.at;

        if (!token) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        const id = jwt.verify(token, process.env.TOKEN_SECRET)._id;
        const result = await agency_schema.findOne({ _id: id });
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

module.exports = AuthenticateAgency;