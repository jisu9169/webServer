//페이지 이동 기능 처리 라우터
const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/", (req, res) => {
  // 템플릿 엔진(.ejs) => html 문서로 최종변환 => 렌더링
  const data = {
    user: {
      name: "<i>나이스</i>",
      isPremium: false,
    },
    items: [
      { fruit: "사과", price: 2000 },
      { fruit: "바나나", price: 4000 },
      { fruit: "오렌지", price: 1500 },
    ],
  };
  res.render("index", data);
});

router.get("/join", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "join.html"));
});

router.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "../", "views", "login.html"));
});

module.exports = router;
