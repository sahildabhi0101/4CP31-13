const jwt = require("jsonwebtoken");

const checkAuthStudent = (req, res, next) => {
  // Not working
  // const token1 = req.header("auth-token");

  const token = req.cookies.st;
  console.log("checkAuth", token);
  if (!token) return res.status(401).send("Access Denied");

  try {
    console.log("token", token);
    // console.log(process.env.TOKEN_SECRET)
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    console.log(verified)
    // { _id: '61dc4afe92898efe987e2e53', whoIsLoggedIs: "student", iat: 1641830535 } => verified will return

    if (!(verified.whoIsLoggedIn === "student")) {
      return res.status(400).json({
        message: "You have not access to this page.",
      });
    }
    console.log("verified", verified);

    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = checkAuthStudent;
