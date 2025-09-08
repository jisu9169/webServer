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

// 책 추가
router.post("/books", (req, res) => {
  // 1. 요청 데이터 받기(body < app.js에 body-parser 사용할 수 있도록 하기)
  const { title, author } = req.body;

  const newBook = { id: books.length + 1, title: title, author: author };
  books.push(newBook);

  // index 렌더링 + books 배열 => /books (get) (redirect => get 요청)
  res.redirect("/books");
});

// 책 상세정보 보기(:id => 변수처럼 값이 달라질 수 있는 자리임을 표시!)
router.get("/books/:id", (req, res) => {
  // : id => url 경로에 포함되어 있는 값 => req.params
  // req.query => 쿼리스트링 ?id=1
  // req.body => POST 등으로 요청해서 데이터가 바디에 있을 때
  // req.params => url(경로) 자체에 데이터가 포함되어 있을 때

  // books 배열의 책 객체(book)를 조회해서 해당 책의 id가 선택한 id랑 같은 경우를 찾아줌
  // => 결과 : 찾은 데이터 자체를 리턴(책 객체)
  const findBook = books.find((book) => {
    book.id === req.params.id;
  });

  // 책 정보 리턴(response), json(자바스크립트 객체) 형태 그대로 리턴(응답)
  // res.send(); // 데이터만 응답(문자열, 숫자, 객체)
  res.json(findBook);
});
module.exports = router;
