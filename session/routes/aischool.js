const express = require("express");
const router = express.Router();

router.get("/aiAddress", (req, res) => {
  // 사용자가 session없다면 session을 만들어줘야함
  // session이 있다면 기존의 session을 사용한다.
  req.session.aiAddress = "광주광역시 동구 제봉로 92 인공지능사관학교";
  res.render("aiAddress", req.session);
});

router.get("/aiInfo", (req, res) => {
  req.session.aiInfo = {
    name: "인공지능사관학교",
    address: "광주광역시 동구 제봉로 92",
    price: "교육비 전액 무료",
    number: "6기",
  };

  res.render("aiInfo", req.session);
});

router.get("/aiList", (req, res) => {
  const teacher = [
    { name: "김민수", nick: "유사 주우재", age: 20, hobby: "쇼핑하기" },
    { name: "최영화", nick: "자연재해", age: 21, hobby: "방탈출 하기" },
    { name: "조준영", nick: "초대형거인", age: 22, hobby: "아이들 보기" },
    { name: "양하영", nick: "짱구", age: 23, hobby: "예카 방문" },
    { name: "최황준", nick: "황진이", age: 24, hobby: "모르는 사람 만나기" },
    { name: "박병관", nick: "호두아빠", age: 25, hobby: "유튜브 운영" },
  ];

  req.session.teacher = teacher;

  res.render("aiList", req.session);
});

router.get("/loginForm", (req, res) => {
  res.render("loginForm");
});

router.post("/login", (req, res) => {
  console.log(req.body); // 클라이언트에서 보낸 데이터 확인
  // 로그인 로직 (예시: 아이디와 비밀번호 확인)
  if (req.body.id === "123" && req.body.pw === "123") {
    // 로그인 성공 시, index 템플릿에 사용자 정보를 전달
    req.session.nick = "관리자";
  }
  res.render("index", req.session); // 객체 형태로 전달
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

router.get("/teamInfo", (req, res) => {
  const teamInfo = {
    name: "형준",
    age: "20",
    number: "010-****-****",
    hobby: "공부",
  };
  console.log("1234123213");
  res.render("teamInfo", teamInfo);
});
module.exports = router;
