var mysql = require("mysql2");

var db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_SCHEMA,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting", err);
  } else {
    console.log("Connected to Database");
  }
});

export default db;
