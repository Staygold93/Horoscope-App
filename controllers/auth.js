const mysql = require('mysql');
const sequelize = require('../config/connection')

const bcrypt = require('bcrypt');
const { User } = require('../models');

exports.register = async (req, res) => {


    const { name, email, password } = req.body;

    const alreadyExistUser = await User.findOne({ where: { email } }).catch((err) => {
        console.log("Error:", err);
    });

    if (alreadyExistUser) {
        return res.json({ message: "User with email already exists" })
    }

    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save().catch((err) => {
        console.log("Error:", err);
        res.json({ error: "cannot register user at the moment" })
    })

    if (savedUser) { res.redirect('/login') };


}




