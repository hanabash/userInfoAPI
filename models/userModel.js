const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter user's full name"]
        },
        email: {
            type: String,
            required: [true, "Please enter user's work email address"]
        },
        age: {
            type: Number,
            required: [true, "Please enter user's age"]
        }
    },
    {
        //helpful for tracking when user added, updates to name/email
        timestamps: true
    }
);

const User = mongoose.model("User", userSchema);
module.exports = User;