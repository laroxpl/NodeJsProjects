const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/accounts");

const schema = new mongoose.Schema({
    name: String,
    surname: String,
    city: String,
    event: String
});

module.exports = mongoose.model("User", schema);