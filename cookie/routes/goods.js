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
  const goodsList = req.query.goods;
  console.log(goodsList);

  goodsList.forEach((g, i) => {
    res.cookie("goods" + i, g);
  });

  res.redirect("/");
});

router.get("/myGoodsList", (req, res) => {
  // cookie의 이름만 가져오기
  const key = Object.keys(req.cookies);
  console.log(req.cookies);
  console.log(key);

  const cookiedData = { goods: [] };
  for (let i = 0; i < key.length; i++) {
    cookiedData.goods.push(req.cookies[key[i]]);
  }
  res.render("myGoodsList", cookiedData);
});
module.exports = router;
