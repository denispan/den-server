# Echo Server

Веб-сервер на Express.js, который отображает данные полученные через GET или POST запросы в HTML формате.

<img width="1023" alt="image" src="https://github.com/user-attachments/assets/fbb100f5-1c12-49a6-8dd7-51788436dc8b" />

## Структура проекта

```
app/
├── controllers/
│   └── echo.controller.js    # Контроллер для обработки echo-запросов
├── routes/
│   └── echo.routes.js        # Маршруты для echo-запросов
├── utils/
│   └── template.js           # Утилита для работы с HTML шаблонами
├── views/
│   └── echo.html            # HTML шаблон для отображения ответа
└── index.js                 # Точка входа в приложение
```

## Функциональность

- Обработка GET и POST запросов
- Отображение полученных данных в форматированном виде
- Поддержка CORS
- Простая система шаблонов для HTML

## Требования

- Node.js
- npm

## Установка

1. Установите зависимости:

```bash
npm install
```

## Запуск

```bash
node index.js
```

Сервер запустится на порту 8080 (или на порту, указанном в переменной окружения PORT).

## API Endpoints

### Echo

#### GET /api/echo

Возвращает HTML страницу с данными, переданными в query параметрах.

**Query параметры:**

- Любые параметры (например, `message`, `name` и т.д.)

**Пример запроса:**

```
GET http://localhost:8080/api/echo?message=hello&name=user
```

#### POST /api/echo

Возвращает HTML страницу с данными, переданными в теле запроса.

**Тело запроса:**

- Content-Type: application/json
- Любые JSON данные

**Пример запроса:**

```bash
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{"message":"hello","user":{"name":"John","age":25}}' \
  http://localhost:8080/api/echo
```

**Ответ для обоих методов:**

- Content-Type: text/html
- HTML страница с отформатированными данными запроса

## Зависимости

- express - веб-фреймворк
- cors - middleware для поддержки CORS
