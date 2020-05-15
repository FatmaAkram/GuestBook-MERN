# GuestBook-MERN
The 'ME-N'part of GuestBook project where you can share some wisdom, a piece of advice, funny memory or simply leave your name as you can add messages and get replies from other users .


## Getting Started

- Clone/Download the project .
- Install dependencies using ``` npm install ```
- Run server using ``` npm run server```

### Prerequisites

In order to use our GuestBook, you must have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [Postman](https://www.postman.com/) : For testing our api

## Setup Config file

Create a file named `default.json` in config directory. This file should contain:

```
{
    "mongoURI" : "your-mongo-URI",
    "jwtToken" : "your-jwt-secret"
}

```
* monogoURI is the connection string from mongoDB Atlas for future deployment.

### Project workflow

- MongoDB Atlas Setup
- Install Dependencies & Basic Express Setup
- Connecting To MongoDB With Mongoose
- Setup Route Files With Express
- User API Routes & JWT Authentication
- Message API Routes
- Replies API Routes
#### **All routes were tested with Postman before moving to next step**

### Dependencies

| Server-side
| ---
|bcryptjs: ^2.4.3
|config: ^3.3.1
|express: ^4.17.1
|express-validator: ^6.4.1
|jsonwebtoken: ^8.5.1
|mongoose: ^5.9.13

## Built With

- [MongoDB](https://github.com/mongodb/mongo) 
- [Express](https://github.com/expressjs/express) -Server/routing API for web app.
- [Node](https://github.com/nodejs/node) - Backend JS runtime.

## Authors

* **Fatma Akram**


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

