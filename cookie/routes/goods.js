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
  const cookiedData = { goods: [] };
  for (let i = 0; i < key.length; i++) {
    if (key[i].includes("goods")) {
      console.log("key[i] = " + key[i]);
      cookiedData.goods.push(req.cookies[key[i]]);
    }
  }
  res.render("myGoodsList", cookiedData);
});

router.get("/goodsRemove", (req, res) => {
  // 쿠키 객체의 모든 키(쿠키 이름)를 가져옵니다.
  const keys = Object.keys(req.cookies);

  // 모든 쿠키 이름을 순회합니다.
  for (let i = 0; i < keys.length; i++) {
    const cookieName = keys[i];

    if (cookieName.includes("goods")) {
      res.clearCookie(cookieName);
      console.log(`쿠키가 삭제되었습니다: ${cookieName}`);
    }
  }

  res.redirect("/myGoodsList");
});

module.exports = router;
