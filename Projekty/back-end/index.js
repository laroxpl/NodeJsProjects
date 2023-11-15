const express = require("express");
const app = express();


const blogRouter = require("./app/router/blogRouter")
const postApi = require("./app/api/userApi")
const cors = require("cors")

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//const hbs = require("express-handlebars");


app.set("view engine", "handlebars");

app.use("/blog", blogRouter)
app.use("/api/userApi", postApi)

app.listen(8080, function () {
  console.log("Serwer Node.js działa");
});