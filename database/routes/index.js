const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/join", (req, res) => {
  res.render("join");
});

router.post("/join", (req, res) => {
  console.log(req.body);
  const { id, pw, nick } = req.body;

  // 쿼리문 작성
  const sql = "insert into member values(?,?,?)";

  conn.query(sql, [id, pw, nick], (err, rows) => {
    console.log(err ? err : rows);
  });

  res.redirect("/");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", (req, res) => {
  console.log(req.body);

  res.send("ok");
});
module.exports = router;
