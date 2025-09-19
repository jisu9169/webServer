const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use('/', indexRouter);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.listen(3000, () => {
  console.log("Sever is running on http://localhost:3000");
});
