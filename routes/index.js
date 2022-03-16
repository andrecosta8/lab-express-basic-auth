const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});


module.exports = router;
