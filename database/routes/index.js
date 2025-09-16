const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/join", (req, res) => {
  res.render("join");
});

router.post("/join", (req, res) => {
  console.log(req.body);
  res.send("ok");
});
module.exports = router;
