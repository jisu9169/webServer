const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring'); // 쿼리스티링 처리(String)

http.createServer(async (req,res) => {
    // 주소 설계
    // 서버 기본 주소 : http:// localhost:3000
    // 회원가입 페이지 주소 : http:// localhost:3000/join
    // 로그인 페이지 주소 : http:// localhost:3000/login
    // http:// localhost:3000/user/login => 로그인처리 (입력한 id/pw 페이지 출력)

    // 사용자가 입력한 값에 따라서 페이지에 출력값이 달라져야함(html 가공)
    // -1. 템플릿엔진 (ejs, pug, nunjucks ...) -> 페이지 구성이 복잡할 때(일반적)
    // -2. 서버쪽에서 html을 매번 생성해주는 방법 => 페이지 구성이 매우 단순할 때

    // true 옵션 => query 를 객체 형태로 받아 올 수 있음(파싱이 쉬워짐)
    const parseUrl = url.parse(req.url, true);
    const pathname = parseUrl.pathname;
    const query = parseUrl.query;
    console.log(parseUrl);
    //pathname 값에 따라서 / joun -> join.html , login => login.html 응답
    let file;
    if (pathname ==='/join') {
        file = await fs.readFile('./join.html');
    }else if(pathname ==='/login') {
        file = await fs.readFile('./login.html');
    }else if(pathname == '/user/login') {
        
        let userData = ''; // 전체 데이터를 저장할 변수 (사용자 입력값)

        // post 요청이 들어옴 => 패킷의 body를 확인해야함 =>  data가 들어오는 이벤트가 발생함
        req.on('data', (data) =>{ // data => body에 실어진 데이터(사용자가 입력한 값)
            userData+=data; // 들어오는 데이터 누적 => query string 형식
        });

        req.on('end', () =>{ // data 이벤트가 마무리가 된 후 

            const psData = qs.parse(userData);
            console.log(psData);
            let html = '<html>';
            html += '<body>';
            html += '<h1> 아이디   : '+ psData.id +'</h1>';
            html += '<h1> 비밀번호 : '+ psData.pw +'</h1>';
            html += '</body>';
            html += '</html>';

            res.writeHead(200, {
                'Content-Type' : 'text/html; charset=UTF-8'
            });
            res.write(html);
            res.end();  
        });

    }  
    if(file) {
        res.writeHead(200, {
            'Content-Type' : 'text/html; charset=UTF-8'
        });
        res.write(file);
        res.end();
    }

}).listen(3000, () =>{
    console.log('Server is running on http://localhost:3000');
})