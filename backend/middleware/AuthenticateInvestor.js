const jwt = require("jsonwebtoken");
const InvestorSchema = require("../model/InvestorSchema")

const AuthenticateInvestor = async (req, res, next) => {
    try {
        // getting token from cookie
        const token = req.cookies.int;
        if (!token) {
            return res.status(400).json({
                message: "You must need to login for access this page",
            });
        }
        const id = jwt.verify(token, process.env.TOKEN_SECRET)._id;
        const result = await InvestorSchema.findOne({ _id: id });
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

module.exports = AuthenticateInvestor;