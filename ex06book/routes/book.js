const express = require("express");
const router = express.Router();

//책 정보 (id(책의 식별자 - 1 ~)), 책 정보(제목-title, 작가-author) 데이터베이스

let books = [
  { id: 1, title: "Node.js 책", author: "강예진" },
  { id: 2, title: "딥러닝 책", author: "김민수" },
 ];

module.exports = router;
