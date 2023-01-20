const router = require("express").Router();

router.get("/homepage", (req, res) => {
    // UNCOMMENT ONCE SESSIONS ARE ENABLED
    if(req.session.user) {
        return res.render("homepage", { user: req.session.user });
    }
    res.redirect("/");
    // return res.render("homepage");
})

module.exports = router;