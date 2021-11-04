const mongoose = require ("mongoose")
const Schema = mongoose.Schema

const User = new Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model("user", User)