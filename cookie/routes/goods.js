const express = require("express");
const router = express.Router();

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/loginCheck", (req, res) => {
  console.log(req.body);
  if (req.body.id == "aischool" && req.body.pw == "1234") {
    // 로그인 성공
    // cokie 는 key 와 value 형태로 전달된다.

    res.cookie("nick", "관리자");
  }

  res.redirect("/");
});

router.get("/logout", (req, res) => {
  res.cookie("nick", "", { maxAge: 1 });
  res.redirect("/");
});

router.get("/goodsList", (req, res) => {
  res.render("goodsList");
});

router.get("/goodsAdd", (req, res) => {
  console.log(req.query.goods);
  const goodsList = req.query.goods;
  console.log(goodsList);
  let id = 1;
  goodsList.forEach((g) => {
    res.cookie( "goods"+id++, g);
  });

  res.send("ok");
});
module.exports = router;
