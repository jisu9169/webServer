const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const aischoolRouter = require("./routes/aischool");

// 세션을 사용하기위한 불러오기
const cookieParser = require("cookie-parser");
const session = require("express-session");
const fileStore = require("session-file-store")(session);

const app = express();

// 세션 사용 설정
app.use(cookieParser("secret key")); //쿠키 가지고 올 때 필요
app.use(
  session({
    httpOnly: true, //자바스크립트를 통해 세션 쿠키를 사용할 수 없도록 함
    secure: true, //https 환경에서만 session 정보를 주고받도록처리
    secret: "secret key", //암호화하는 데 쓰일 키
    resave: false, //세션을 언제나 저장할지 설정함
    saveUninitialized: true, //세션이 저장되기 전 uninitialized 상태로 미리 만들어 저장
    cookie: {
      //세션 쿠키 설정 (세션 관리 시 클라이언트에 보내는 쿠키)
      httpOnly: true,
      Secure: true,
    },
    store: new fileStore(),
  })
);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use("/", indexRouter);
app.use("/", aischoolRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
