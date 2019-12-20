const sequelize = require("sequelize");

//docs:
// https://www.postgresql.org/docs/current/tutorial.html

// config db
const db = new sequelize({
  database: "demo",
  username: "postgres",
  password: "123456",
  host: "localhost",
  port: 5432,
  dialect: "postgres",
  define: {
    freezeTableName: true
  }
});

// // test connection
// db.authenticate()
//   .then(() => console.log("connect success"))
//   .catch(err => console.log(err));

// define table
const Users = db.define("User", {
  username: sequelize.STRING,
  password: sequelize.STRING
});

//// create table
// db.sync()
//   .then(() => console.log("create table User is success"))
//   .catch(err => console.log(err));

// // insert one
// Users.create({
//   username: "Teo",
//   password: "123456"
// })
//   .then(() => console.log("insert success"))
//   .catch(err => console.log(err));

// // insert multi
// Users.bulkCreate([
//   { username: "ti", password: "123456" },
//   { username: "tun", password: "12345" }
// ])
//   .then(() => console.log("insert multi record is success"))
//   .catch(err => console.log(err));

// // update
// Users.update(
//   {
//     username: "user1",
//     password: "pass1"
//   },
//   {
//     where: { id: 1 }
//   }
// )
//   .then(row => console.log(`The row is ${row}`))
//   .catch(err => console.log(err));

// // delete
// Users.destroy({
//   where: { id: 10 }
// })
//   .then(row => console.log(`The row is ${row}`))
//   .catch(err => console.log(err));

// // query
// Users.findAll({
//   where: { id: [1, 3] },
//   raw: true
// })
//   .then(user => console.log(user))
//   .catch(err => console.log(err));

module.exports = Users;
