const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const productData = {
    products: [
      { name: "노트북", price: 1200000 },
      { name: "스마트폰", price: 1800000 },
      { name: "키보드", price: 100000 },
      { name: "마우스", price: 50000 },
    ],
  };

  res.render("product", productData);
});

module.exports = router;
