const express = require("express");
const router = express.Router();

//책 정보 (id(책의 식별자 - 1 ~)), 책 정보(제목-title, 작가-author) 데이터베이스

let books = [
  { id: 1, title: "Node.js 책", author: "강예진" },
  { id: 2, title: "딥러닝 책", author: "김민수" },
];

// REST API 설계
// 1. 전체 데이터 조회
// ([GET] localhost:3000/books)

// 2. 1개 데이터 조회
// ([GET] localhost:3000/books/{id})
// ([GET] localhost:3000/books?id = {id})

// 3. 데이터 추가
// ([POST] localhost:3000/books)

// 4. 데아터 수정(전체)
// ([PUT] localhost:3000/books/{id})

// 5. 1개 데이터 삭제
// ([DELETE] localhost:3000/books/{id})

// index 페이지 (책 정보 (books)를 가지고 이동)
router.get("/books", (req, res) => {
  // index.ejs 렌더링 + books 데이터
  //                    {books(키-변수이름 : books(책 배열))}
  res.render("index", { books: books });
});
module.exports = router;
