// library file require
const express = require('express');
require('dotenv').config(); //node js에서 require('dotenv').config()를 선언해준 다음 process.env.변수명의 형태로 적용할 수 있다.
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan'); //로그 기록을 남기는 morgan 모듈
const createError = require('http-errors');
// local file require
const connectDB = require('./database/connectDB');
const router = require('./routes');
const v1Route = require('./routes/v1');
const errorResponse = require('./middleware/errorResponse');

// 1. database 연결
connectDB();

const app = express();

// 2. middleware
app.use(helmet()); // 보안을 위해서 설정
app.use(cors({ origin: 'http://localhost:3000' })); // CORS 미들웨어 추가
app.use(express.json());
app.use(morgan('dev')); //dev 개발용을 위해 response에 따라 색상이 입혀진 축약된 로그를 출력합니다. :status값이 빨간색이면 서버 에러코드, 노란색이면 클라이언트 에러 코드, 청록색은 리다이렉션 코드, 그외 코드는 컬러가 입없습니다. :method :url :status :response-time ms - :res[content-length]

// 3. Routes
app.use(router);
app.use('/v1', v1Route);

// 4. error response middleware
app.use(errorResponse);

const PORT = 4000;
const MASTER = 'SWOO';

app.listen(PORT, () => {
  console.log(`${MASTER}의 서버에 접속했습니다. ${PORT}번 포트로 연결 되었습니다.`.bgWhite);
});
