const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "%",
  user: "Lyle",
  password: "qwerty",
  database: "chat",
});

app.get("/", (re, res) => {
  const sql = "SELECT * FROM";
});

app.listen(3000, () => {
  console.log("listening");
});
