const express = require("express");
const path = require("path");
const bookRouter = require("./routes/book");



const app = express();

// public 경로 지정
app.use(express.static(path.join(__dirname, "public")));

// 템플릿 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// localhost:3000/
app.use('/',bookRouter);






app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
