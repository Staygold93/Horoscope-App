const express = require('express');
const router = require('express').Router();
const { User, userSign } = require('../models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render('login');
});


router.get('/register', (req, res) => {
  res.render("register")
})
// Get home page
// router.get('/login', (req, res) => {
//   res.render('login.handlebars')
// })








module.exports = router;
