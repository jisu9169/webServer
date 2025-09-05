// http 모듈 사용 웹 서버 구현
// http => Core API 제공 (서버 생성, 요청 처리, 응답 정의 ...)
const http = require('http'); // 필요한 모듈 가져오기
// 파일 시스템 (fs) 모듈 -> 시간이 걸림(I/O) => 비동기 처리 (libuv)
// Promise(비동기 통신) => async / await 문법 과 대부분 같이 사용됨 (코드 간결하게 처리할 수 있음)
const fs = require('fs').promises;
// (req -> request(요청), res -> response(응답))
// 포트번호(PortNumber) : 컴퓨터에서 어떤 프로그램(서비스)가 어떤문(특정 서비스가 대기하고 있는 접속 지점 )으로 통신할지 구분하는 번호
// 한 컴퓨터 안에서 여러 프로그램이 동시에 서비스 될 수 있으니 서로 충돌없이 구분할 수 있는 포트번호가 필요함.
// 80(http), 443(https), 21(ftp), 22(ssh) ... (0 ~ 1023은 시스템 포트이기 때문에 사용 주의)

// 웹 개발 시 자주 사용되는 포트번호
// 3000(node,js), 3001(예비용), 5000, 8888(테스트용, 로컬용)

http.createServer(async(req, res) => {
// 요청처리~~(req), 응답정의~~(res)

    // ex02.html 파일 불러오기(fs)
    const file = await fs.readFile('./ex02.html');
    
    // 읽어온 ex02.html 파일을 응답할래!
    // 2. 응답 처리 : 패킷사용하여 응답 (Head/Body)
    // Head : 응답코드(200 OK, 404, 500, 201 Created..)
    //        응답형식(html, json ..., 인코딩 방식(UTF-8 ...))
    // Body : 응답 본문(html 문서...)
    res.writeHead(200, {
        'Content-Type' : 'text/html; charset=UTF-8'
    });
    res.write(file); // body
    res.end(); // 응답 정의 끝 

}).listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});


// localhost => 개개인의 컴퓨터 주소
// cotrl + c => 강제종료