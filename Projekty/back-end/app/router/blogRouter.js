const express = require("express");
const router = express.Router();

const post = require('../controllers/user.controller');

router.get("/all", function (req, res) {
  post.list(function (err, posts) {
    if (err) res.send(err);
    res.render("blog", { posts });
  });
});

router.get("/all", function(req, res){
  post.list(function(err, posts){
    if(err) res.send(err);
    res.render("/", { posts });
  });
});

module.exports = router;