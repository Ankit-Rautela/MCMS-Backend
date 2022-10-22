const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: String,
    category: String,
    userId: String,
    owner: String
});


module.exports = mongoose.model("products",productSchema)


