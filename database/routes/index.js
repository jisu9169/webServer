const express = require("express");
const router = express.Router();
const conn = require("../config/db");
const session = require("express-session");

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
  const query = "select * from member WHERE id = ? AND pw = ?";

  conn.query(query, [id, pw], (err, rows) => {
    console.log(rows);

    if (rows.length > 0) {
      console.log("로그인 성공");
      console.log(rows[0]);
      req.session.info = rows[0];
      res.render("index", req.session);
    } else {
      console.log("로그인 실패");
      res.redirect("/");
    }
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

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/list", (req, res) => {
  // 모든 회원의 정보를 console에 출력하고 페이지에 ok를 응답하시오.
  console.log("");
  const query = "select * from member where id not in('admin')";

  conn.query(query, (err, rows) => {
    const listData = { list: rows };
    res.render("list", listData);
  });
});

router.get("/aDelete", (req, res) => {
  const id = req.query.id;

  const query = "delete from member where id = ?";

  conn.query(query, id, (err, rows) => {
    if (rows.affectedRows > 0) {
      console.log("회원 삭제 성공!");
    } else {
      console.log("회원 삭제 실패");
    }

    res.redirect("/list");
  });
  
});

module.exports = router;
