const http = require('http');
const url = require('url'); // 요청이 들어온 주소
const fs = require('fs').promises;

http.createServer(async (req, res) => {

    // 요청 url 파싱
    const parseUrl = url.parse(req.url);
    console.log(parseUrl.pathname);
    console.log(parseUrl.query);

    // 응답
    const file = await fs.readFile('./ex02.html');
    
    res.writeHead(200, {
        'Content-Type' : 'text/html; charset=UTF-8'
    });
    res.write(file);
    res.end();

}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});