const express = require("express");
const app = express();

const hbs = require("express-handlebars");

const blogRouter = require("./app/router/blogRouter")

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.engine("hbs", hbs({ defaultLayout: "main", extname: ".hbs" }));
app.set("view engine", "hbs");

const Post = require("./app/models/Post");

const post = require("./app/controllers/post.controllers");

app.use("/blog", blogRouter);
app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});
