const express = require('express')
const authController = require("../controllers/auth")
const { User, userSign } = require('../models');


const router = require('express').Router();


router.post('/register', authController.register);





module.exports = router;