const isLogIn = (req, res, next) => {
    if (!req.session.currentUser) {
        return res.redirect("/login");
    }
    next();
};

const isLogOut = (req, res, next) => {
    if (req.session.currentUser) {
        return res.redirect("/");
    }
    next();
};

module.exports = {
    isLogOut,
    isLogIn,
};