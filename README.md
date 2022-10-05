# Deno RESTFul API

Пример использования Deno в создании базового CRUD API

## Используемые технологии

- [Deno][1] - это простая, современная и безопасная среда выполнения js, ts,
  которая использует v8 и встроена в Rust;
- [Denon][2] - для сохранения комфортной разработки, его аналогом является
  Nodemon;
- [Oak][3] - это промежуточный фреймворк для http-сервера Deno, включая
  маршрутизатор;
- [Denodb][4] - это ORM, которая поддерживает (MariaDB, MongoDB, MySQL,
  Postgresql, SQLite);

Прочитать подробнее о каждой технологии можно, пройдя по ссылке на официальную
документацию.

## Начало работы

```markdown
1. git clone https://github.com/renacargnelutti/deno-rest-api.git;

2. установка MySQL и MySQL Workbench;

3. denon start;
```

## Маршруты

```
GET     /character
GET     /character/:id
POST    /character
PUT     /character/:id
DELETE  /character/:id
```

[1]: 'https://github.com/denoland/deno'
[2]: 'https://deno.land/x/denon@2.5.0'
[3]: 'https://deno.land/x/oak@v11.1.0'
[4]: 'https://deno.land/x/denodb@v1.0.40'
