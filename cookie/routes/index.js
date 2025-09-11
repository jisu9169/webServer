const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  // 로그인을 성공해서 이쪽으로 왔다면 클라이언트는 nick 이름으로 쿠키를 가지고 있다.
  // 쿠키가 있으면 쿠키의 값을 메인페이지로 보내준다.
  const nickData = { nick: req.cookies.nick };
  res.render("index", nickData);
});

module.exports = router;
