const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/express-blog");

const schema = new mongoose.Schema({
    title: {type: String, required: true},
    content: String,
    created_at: {type: String, default: Date.now},
    isPublic: {type: Boolean, default: false}
});

module.exports = mongoose.model("Post", schema);