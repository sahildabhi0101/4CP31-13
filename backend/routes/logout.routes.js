const express = require("express");
const router = express();
allogout = (_req, res) => {
    res.clearCookie("st");
    res.clearCookie("at");
    res.clearCookie("int");
    res.clearCookie("it");
    res.clearCookie("user");
    return res.json({ message: "Signout Success!" });
  };
// PATH: /api/logout/
router.get("/", allogout);

module.exports = router;