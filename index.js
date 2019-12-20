const express = require("express");
const Users = require("./db");
const bodyParser = require("body-parser");

const app = express();

// //application/json
// app.use(
//   bodyParser.json({
//     type: "application/json"
//   })
// );

// application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.send("ok");
});

app.post("/add", (req, res) => {
  const { username, password } = req.body;
  console.log("----", req.body);
  Users.create({ username, password })
    .then(() => {
      return res.json({ kq: 1 });
    })
    .catch(err => {
      return res.json({ kq: 0, err });
    });
});

app.get("/read", (req, res) => {
  Users.findAll()
    .then(users => {
      return res.json({ kq: 1, users });
    })
    .catch(err => {
      return res.json({ kq: 0, err });
    });
});

app.get("/read/:id", (req, res) => {
  const { id } = req.params;
  Users.findAll({ where: { id } })
    .then(user => res.json({ kq: 1, user }))
    .catch(err => res.json({ kq: 0, err }));
});

app.put("/update", (req, res) => {
  const { id, username, password } = req.body;
  Users.update({ username, password }, { where: { id } })
    .then(row => {
      return res.json({ kq: 1, row });
    })
    .catch(err => {
      return res.json({ kq: 0, err });
    });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  Users.destroy({ where: { id } })
    .then(row => {
      return res.json({ kq: 1, row });
    })
    .catch(err => {
      return res.json({ kq: 0, err });
    });
});

app.listen(8080, () => console.log("Server stared on localhost:8080"));
