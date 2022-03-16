const router = require("express").Router();


const { isLogIn: requireLogin } = require("../middlewares/route-guard");

router.use(requireLogin);
const renderProfilePage = (req, res) => {
  res.render("profile", { user: req.session.currentUser });
};
router.get("/profile", renderProfilePage);

const renderDetailsPage = (req, res) => {
  console.log(req.myOwnCustomKey);
  res.send("this is another route");
};
router.get("/details", renderDetailsPage);

module.exports = router;