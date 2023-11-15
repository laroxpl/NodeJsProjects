const express = require("express");
const app = express();
const User = require("./User");

app.use(express.urlencoded({ extended: true }));
app.use("/f", express.static("public"));

const powrot = '<a href="/f">powrot</a>'

app.post("/login", function (req, res) {
  User.find()
    .lean()
    .exec(function (err, users) {
      if (err) console.log(err);
      else {
        //console.log(users);
        //console.log(req.body);
        const UserMatched = users.filter(
            (user) =>
                user.name === req.body.name && user.password === req.body.password
        )
        //console.log(UserMatched);
        if(UserMatched[0]){
            res.send(
                "Zostales zalogowany w naszej stronie " + powrot
            )
        } else {
            res.send(
                "zly login i haslo  " + powrot
            )
        }
      }
    });
});

app.listen(8080, function () {
  console.log("server Node.js dziala");
});
