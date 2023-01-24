const router = require("express").Router();

router.get("/homepage", (req, res) => {
  
    if(req.session.user) {
        return res.render("homepage", { user: req.session.user });
    }
    res.redirect("/");
   
})

router.get('/logout', (req, res) => {
 
        res.render("/");
      });
  

module.exports = router;