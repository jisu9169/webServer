const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const userRouter = require("./routes/users");
//express => app 객체 생성(core)
const app = express();

// EJS 템플릿 엔진 설정
app.set("view engine", "ejs"); // 템플릿 엔진을 ejs로 사용하겠다!
app.set("views", path.join(__dirname, "views")); // 템픐이 있는 위치 지정


// 미들웨어
app.use(express.urlencoded({ extended: true }));
// => body parsing 미들웨어 추가

app.use("/", indexRouter);

app.use("/users", userRouter);
// 3000 번포트에서 서버 열기
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
