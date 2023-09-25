const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: String,
    quantinity: String,
    description: String

})

const RegisterModel = mongoose.model("register", RegisterSchema);
if (mongoose.models['register']) {
    console.log('UserModel is created.');
} else {
    console.log('UserModel is not found.');
}
  
module.exports = RegisterModel;