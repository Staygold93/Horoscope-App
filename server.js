const path = require('path');
const express = require("express")
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const axios = require('axios');
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
// re comment this in once you run seed.js
// const db = mysql.createConnection(
//     {
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "horoscope_db",
//     },
//     console.log(`Connected to the horoscope_db database.`)
// );


app.get('/', async (req, res) => {
    res.render('login');
});

app.get('/home',  (req, res) => {
    /* Ideally
        - we want to check if the user is logged in (use express-session for this)
        - If they are, hit the aztro API to get the horoscopes for yesterday and today using the users birthday
    */
    

    const getHoroscope  = async () => {
        const horoscopeInfo = {
            today: null,
            yesterday: null
        }
        const todayHoroscopeResponse = await axios.post('https://aztro.sameerkumar.website/?sign=leo&day=today')
        if (todayHoroscopeResponse.data && todayHoroscopeResponse.data.description) {
            horoscopeInfo.today = todayHoroscopeResponse.data.description;
        }

        const yesterdayHoroscopeResponse = await axios.post('https://aztro.sameerkumar.website/?sign=leo&day=yesterday')
        console.log(yesterdayHoroscopeResponse)
        if (yesterdayHoroscopeResponse.data && yesterdayHoroscopeResponse.data.description) {
            horoscopeInfo.yesterday = yesterdayHoroscopeResponse.data.description;
        }
        console.log(horoscopeInfo);
        res.render('homepage', { horoscopeInfo });

    }

    getHoroscope();
    
})

app.listen(3001, function() {
    console.log("Horoscope server is running on port 3001")
});