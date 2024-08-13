const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "Lyle",
  password: "qwerty",
  database: "messages",
});

app.get("/", (re, res) => {
  return res.json("Fromback");
});

app.get("/messages", (req, res) => {
  const sql = "SELECT * FROM chats";
  db.query(sql, (err, data) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    return res.json(data);
  });
});

app.listen(3000, () => {
  console.log("listening");
});
