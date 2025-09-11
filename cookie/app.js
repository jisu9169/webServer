const express = require("express");
const path = require("path");
const indexRouter = require("./routes/index");
const goodsRouter = require("./routes/goods");
const cookieParser = require("cookie-parser");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.use("/", goodsRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
