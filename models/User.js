// dependencies
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        required: false
    },
    created:{
        type: Date,
        default: Date.now,
    }
});

// hash
// UserSchema.methods.generateHash = (password) => {
//     return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
// }

// create model
const User = mongoose.model("User", UserSchema);

module.exports = User;