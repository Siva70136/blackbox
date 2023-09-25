const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: String,
    quantinity: String,
    description: String

})

const RegisterModel = mongoose.model("register", RegisterSchema);
module.exports = RegisterModel;