const express = require("express");
const router = express.Router();

router.post("/join", (req, res) => {
  console.log(req.body);
  res.redirect("/login");
});

router.post("/login", (req, res) => {
  res.send("로그인 성공");
});

module.exports = router;
