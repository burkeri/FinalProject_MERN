// dependencies
const mongoose = require('mongoose');

// user schema
const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    picture:{
        type: String
    },
    dob:{
        type: Date
    },
    premium:{
        type: Boolean,
        default: false,
        required: true
    },
    created:{
        type: Date,
        default: Date.now,
    }
});

// create model
const User = mongoose.model("User", UserSchema);

module.exports = User;