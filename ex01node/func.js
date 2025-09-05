// var.js 모듈 필요함
const {odd, even} = require('./var.js'); // 사용자 정의 모듈 가져올 때는 경로로 지정

function checkOddOrEven(num) {
    if(num % 2 === 1 ) { // 홀수
        return odd
    }else{  // 짝수
        return even
    }
};

module.exports = checkOddOrEven;