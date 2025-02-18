const express = require('express');
const cors = require('cors');
const path = require('path');
const router = require('./routes');

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

// Логирование всех запросов
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} ${req.method} ${req.url}`);
  next();
});

app.use('/assets', express.static(path.join(__dirname, 'assets'), {
  setHeaders: (res, path) => {
    if (path.endsWith('.ico')) {
      res.set('Content-Type', 'image/x-icon');
    }
  }
}));
console.log('Assets directory:', path.join(__dirname, 'assets'));
app.use(express.static('public'));
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
