const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const productRouter = require("./routes/product");

const app = express();

// 템플릿 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// 정적리소스 경로(public) 설정
app.use(express.static(path.join(__dirname, "public")));

// 라우터 설정
// index페이지 -> localhost:3000/
// product페이지 -> localhost:3000/products
app.use("/", indexRouter);
app.use("/products", productRouter);
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
