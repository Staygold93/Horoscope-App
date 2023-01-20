const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const router = express.Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await User.findOne({ where: { email } }).catch(
    (err) => {
      console.log("Error: ", err);
    }
  );

  if (!userWithEmail) {
    console.log("BAD EMAIL:", email);
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });
  }

  if (!bcrypt.compareSync(password, userWithEmail.password)) {
    console.log("BAD PASSWORD:", password);
    return res
      .status(400)
      .json({ message: "Email or password does not match!" });
  }
    
  // const jwtToken = jwt.sign(
  //   { id: userWithEmail.id, email: userWithEmail.email },
  //   process.env.JWT_SECRET
  // );


  // UNCOMMENT ONCE SESSIONS ARE ENABLED
  req.session.user = {
    name: userWithEmail.name,
    email: userWithEmail.email,
  };

  // res.json({ message: "Welcome Back!", token: jwtToken });
  res.json({ message: "Welcome Back!" });

});

module.exports = router;