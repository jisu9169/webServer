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
  const { id, pw } = req.body;
  const query =
    "SELECT EXISTS(SELECT 1 FROM member WHERE id = ? AND pw = ?) AS user_exists";

  conn.query(query, [id, pw], (err, rows) => {
    console.log(rows);

    if (rows[0].user_exists == 1) {
      console.log("로그인 성공");
    } else {
      console.log("로그인 실패");
    }
    res.redirect("/");
  });
});

router.get("/update", (req, res) => {
  res.render("update");
});

router.post("/update", (req, res) => {
  // 회원정보 수정기능을 구현
  const { id, pw, nick } = req.body;
  const query = "update member set nick = ? where id = ? and pw = ?";
  conn.query(query, [nick, id, pw], (err, rows) => {
    if (rows.affectedRows > 0) {
      console.log("회원정보수정 성공!");
    } else {
      console.log("회원정보수정 실패...");
    }
  });
  res.redirect("/");
});

router.get("/delete", (req, res) => {
  res.render("delete");
});

router.post("/delete", (req, res) => {
  const { id, pw } = req.body;
  const query = "delete from member where id = ? and pw = ?";
  conn.query(query, [id, pw], (err, rows) => {
    if (rows.affectedRows > 0) {
      console.log("탈퇴 성공");
    } else {
      console.log("탈퇴 실패");
    }
  });
  res.redirect("/");
});
module.exports = router;
