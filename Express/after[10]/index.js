const express = require("express");
const app = express();


const blogRouter = require("./app/router/blogRouter")
const postApi = require("./app/api/postApi")
const cors = require("cors")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const hbs = require("express-handlebars");

app.engine("handlebars", hbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
  res.render("home", {
    title: "Tytuł z Express",
    content: "Cześć programisto",
  });
});

app.use("/blog", blogRouter)
app.use("/api/post", postApi)

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});