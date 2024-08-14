const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

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

app.post("/messages", (req, res) => {
  const { name, message } = req.body;
  const sql = "INSERT INTO chats (name, message) VALUES (?, ?)";

  db.query(sql, [name, message], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json(err);
    }
    return res.json({ success: true, result });
  });
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";
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
