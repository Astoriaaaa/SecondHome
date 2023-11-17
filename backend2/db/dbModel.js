const mongoose = require('mongoose')
const UserProfile = new mongoose.Schema({
    username: String,
    password: String
})

module.exports = mongoose.model("UserProfile", UserProfile)