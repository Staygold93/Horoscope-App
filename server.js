const path = require('path');
const express = require("express")
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const { Router } = require('express');


const app = express();

const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', async (req, res) => {
    res.render('login');
});

app.listen(3001);