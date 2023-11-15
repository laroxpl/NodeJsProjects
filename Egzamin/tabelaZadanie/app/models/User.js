const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/users-information");

const schema = new mongoose.Schema({
    name: String,
    
    address:{street: String, suite: String, city: String, zip: String},
    
    website: String
});

module.exports = mongoose.model("User", schema);