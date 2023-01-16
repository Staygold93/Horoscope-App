const router = require('express').Router();

// Import and require mysql2
const mysql = require("mysql2");

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

router.get("/signs", (req, res) => {
  // Query database
  db.query(
    "SELECT zodiac_sign, dates, element",
    function (err, results) {
      console.log("request at /api/signs");
      res.json(results);
    }
  );
});


module.exports = router;
