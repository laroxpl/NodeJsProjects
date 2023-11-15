const express = require("express");
const router = express.Router()
const Post = require("../models/user");

const post = require("../controllers/user.controller");



router.get("/all", function (req, res) {
    post.list(function (err, posts) {
        if (err) {
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(posts)
    });
});
router.post("/add", function (req, res) {
    post.add(req.body, function (err, post) {
        if (err) {
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(post);
    });
});
router.delete("/delete/:id", function (req, res) {
    post.delete(req.params.id, function (err, data) {
        if (err) {
            res.status(404);
            res.json({error: "post not created"})
        }
        res.json(data)
    })
})

module.exports = router;