const path = require('path');
const express = require("express")
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const { Router } = require('express');

// Import and require mysql2
const mysql = require("mysql2");


const app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Connect to database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "",
      database: "horoscope_db",
    },
    console.log(`Connected to the horoscope_db database.`)
);


app.get('/', async (req, res) => {
    res.render('login');
});

app.get('/home', (req, res) => {
    res.render('homepage');
  })

app.listen(3001);