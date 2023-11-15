const express = require("express");
const app = express();

const hbs = require("express-handlebars");

const userRouter = require("./app/router/userRouter")

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const user = require("./app/controllers/user.controller");
const User = require("./app/models/User");

app.get("/users", function (req, res) {
  user.list(function (err, users) {
    if (err) res.send(err);
    console.log(users)
    res.render("users", {users});
  })
});

app.use("/users", userRouter);
app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
