const router = require("express").Router();
const UserModel = require("../models/User.model");
const bcrypt = require("bcrypt");


router.get("/signup", (req, res, next) => {
    res.render("signup");
});

router.post("/signup", async (req, res, next) => {
    //console.log(req.body);
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    const user = {
        username,
        password: hash,
    };
    console.log(user);
    await UserModel.create(user);
    res.render('login');
});

router.get("/login", (req, res) => {
    res.render("login");
  });

router.post("/login", async(req, res) =>{
    try {
        console.log(req.body);
        const user = await UserModel.findOne({ username: req.body.username });
        console.log(user);
        const hashFromDb = user.password;
        const passwordCorrect = await bcrypt.compare(req.body.password, hashFromDb);
        console.log(passwordCorrect ? "Yes" : "No");
        if (!passwordCorrect) {
          throw Error("Password incorrect");
        }
        res.redirect("/profile");
      } catch (err) {
        res.render("login", { error: "Wrong username or password" });
      }
    });




module.exports = router;