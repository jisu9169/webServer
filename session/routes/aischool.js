const express = require("express");
const router = express.Router();

router.get("/aiAddress", (req, res) => {
  // 사용자가 session없다면 session을 만들어줘야함
  // session이 있다면 기존의 session을 사용한다.
  req.session.aiAddress = "광주광역시 동구 제봉로 92 인공지능사관학교";
  res.render("aiAddress", req.session);
});

module.exports = router;
