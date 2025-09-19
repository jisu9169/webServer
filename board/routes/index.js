const express = require("express");
const router = express.Router();
const conn = require("../config/db");

router.get("/", (req, res) => {
  const query = "SELECT * FROM board ORDER BY indate DESC";
  conn.query(query, (err, rows) => {
    console.log(rows);

    const boardData = { board: rows };

    res.render("index", boardData);
  });
  
});
module.exports = router;
