# Burger Nota 1000 API

## Índice

* [1. Sobre o Projeto](#1-sobre-o-projeto)
* [2. Endpoints](#2-endpoints)
* [3. Tecnologias Utilizadas](#3-tecnologias-utilizadas)
* [4. Implementações Futuras](#4-implementações-futuras)

---

## 📌 1. Sobre o projeto

Um pequeno restaurante de hamburgueres, que está crescendo, necessita de um
sistema para realizar pedidos usando um _tablet_, e que os enviem à
cozinha para que sejam preparados de forma ordenada e eficiente.

A interface front-end da aplicação já foi criada, você pode acessar clicando [aqui](https://burger-nota-1000-karinafs.vercel.app/). O back-end utilizando foi disponibilizado pela equipe técnica da <[Laboratória](https://github.com/Laboratoria)>, e agora, foi proposto o desafio de criar um back-end próprio para manejar os dados através de uma _API rest_.

---

## ⚙️ 2. Endpoints

### 2.1 `/users`

* `GET /users`
* `GET /users/:uid`
* `POST /users`
* `PUT /users/:uid`
* `DELETE /users/:uid`

### 2.2 `/products`

* `GET /products`
* `GET /products/:productId`
* `POST /products`
* `PUT /products/:productId`
* `DELETE /products/:productId`

### 2.3 `/orders`

* `GET /orders`
* `GET /orders/:orderId`
* `POST /orders`
* `PUT /orders/:orderId`
* `DELETE /orders/:orderId`

---

## 🔨 3. Tecnologias Utilizadas

* [Node.js](https://nodejs.org/) 

* [Express](https://expressjs.com/)

* [Sequelize](https://sequelize.org)

* [PostgreSQL](https://www.postgresql.org/docs/)

* [Postman](https://www.getpostman.com)

* [Heroku](https://www.heroku.com)

* [DBeaver](https://dbeaver.io)

---

## 📈 4. Implementações Futuras

* Endpoint de autenticação: `POST /auth`
* Middleware de autenticação
* Middleware de erros
* Outros endpoints
* Documentação da API
* Testes unitários para cada função
* Testes _"end to end"_ ou _e2e_ (de uma ponta a outra)

---

Desenvolvido por [Karina Santos](https://github.com/KarinaFS) na <[Laboratoria](https://github.com/Laboratoria)>.