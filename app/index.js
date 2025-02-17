const express = require('express');
const cors = require('cors');
const echoRouter = require('./routes/echo.routes.js')

const PORT = process.env.PORT || 8080;
const app = express();

const corsOptions = {
  // Разрешаем запросы с любого источника
  origin: '*',
  // origin: 'http://localhost:5173',
  // Разрешенные методы
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  // Разрешенные заголовки
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  // Разрешаем отправку учетных данных (cookies, authorization headers и т.д.)
  credentials: false,
  // Максимальное время кеширования preflight-запросов (в секундах)
  maxAge: 86400
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', echoRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
