const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    appleId: {type: String, require: true},
    name: { type: String, require: true},
    email: [{ type: String, require: true}],
})

const User = mongoose.model("User", userSchema);

module.exports = User;