const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    subject: {
        type: String,
        required: true,
    },
    classname: {
        type: String,
        required: true,
    },
})

const UserPerson = mongoose.model("User", userSchema);
module.exports = UserPerson;