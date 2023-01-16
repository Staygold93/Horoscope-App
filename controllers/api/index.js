const router = require('express').Router();
const userRoutes = require('./userRoutes');
// const projectRoutes = require('./projectRoutes');
const express = require("express");

// Import and require mysql2
const mysql = require("mysql2");

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

app.get("/api/signs", (req, res) => {
  // Query database
  db.query(
    "SELECT zodiac_sign, dates, element",
    function (err, results) {
      console.log("request at /api/signs");
      res.json(results);
    }
  );
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


module.exports = router;
