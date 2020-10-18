# Task Management System

> A take home test

---

## Stack

- Node.js
- Express
- Sequelize
- PostgreSQL

---

## TLDR

This project is API express with ORM sequelize using PostgreSQL. I've set the migration and seed with steps I wrote in this README. And I also managed to implement auth endpoints with hashed password using bcrypt and token using jsonwebtoken. Other endpoints is also secured by API-Key. But unfortunately I didn't manage to finish implementing add new task. Well, it's actually my first time using ORM sequelize PostgreSQL and it was fun. Thank you for the interesting test.

## API Endpoints

### Index

| HTTP  | Endpoint | Description       |
| ----- | -------- | ----------------- |
| `GET` | `/`      | Show info message |

### Auth

| Endpoint         | HTTP   | Description                   | Header                      |
| ---------------- | ------ | ----------------------------- | --------------------------- |
| `/auth/register` | `POST` | Register new user             |                             |
| `/auth/login`    | `POST` | Login to existing user        | Authorization: bearer token |
| `/auth/profile`  | `GET`  | Show authenticated user data  | Authorization: bearer token |
| `/auth/logout`   | `POST` | Logout the authenticated user | Authorization: bearer token |

### Users

| HTTP  | Endpoint       | Description                                      | Header    |
| ----- | -------------- | ------------------------------------------------ | --------- |
| `GET` | `/users`       | Get all users name                               | X-API-Key |
| `GET` | `/users/tasks` | Get all users name and their corresponding tasks | X-API-Key |

### Tasks

| HTTP   | Endpoint              | Description                          | Header                      |
| ------ | --------------------- | ------------------------------------ | --------------------------- |
| `GET`  | `/tasks`              | Get all tasks and its user           | X-API-Key                   |
| `GET`  | `/tasks/:id`          | Get task by id and show its subtasks | X-API-Key                   |
| `GET`  | `/tasks/list?{query}` | Get task queried by time or location | Authorization: bearer token |
| `POST` | `/tasks`              | Add new task by single string        | Authorization: bearer token |

## Installation

### Install dependencies

```
yarn
```

### Install global `sequelize-cli` package

```
npm install --global sequelize-cli
```

```
yarn global add sequelize-cli
```

---

## Setup

After installing dependencies, `.env` file will be automatically generated.

### Setup environment variables

Edit the `.env` file according to your database configuration.

From this:

```
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=
DB_HOST=
DB_DIALECT=
SECRET_KEY=
API_KEY=
```

To something like this:

```
DB_USERNAME=username
DB_PASSWORD=secret_password
DB_DATABASE=database_name
DB_HOST=localhost
DB_DIALECT=postgres
SECRET_KEY=your_secret_key_jwt
API_KEY=your_x_api_key
```

### Create database with PostgreSQL

```sh
$ createdb database_name
```

### Run migrations and seeders

```sh
yarn migrate
# it will run
# sequelize db:migrate
```

```sh
yarn seed
# it will run
# sequelize db:seed:all
```

---

## Development

### Run Express app in development

```sh
yarn dev
```

### Run Express app in production

```sh
yarn start
```

---

## Production

Copy and paste all environment variables.

```sh
heroku run npm install -g yarn -a app-name
heroku run yarn -a app-name
heroku run yarn migrate -a app-name
heroku run yarn seed -a app-name
```

---

## License

MIT
