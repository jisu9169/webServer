const express = require("express");
const path = require("path");
const travelRouter = require("./routes/travel");

const app = express();

// 템플릿 엔진 설정
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use("/", travelRouter);


app.listen(3000, () => {
  console.log("Server is running on http://localhost:3001");
});
