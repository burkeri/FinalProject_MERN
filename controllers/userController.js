// dependencies
const validator = require('validator');
const isEmpty = require('lodash/isEmpty');

// models
const User = require("../models/User");

function validateFrom(data) {
    let errors = [];

    if (data.name === "test") {
        errors.push("TEST"); 
    }

    return {
        errors
    }
}

module.exports = {

    // register/create new user ------
    registerUser: function(req, res) {
        console.log("server: ");
        console.log(req.body);

        let errors = [];

        if (req.body.name === "test") {
            errors.push({msg: "TEST"}); 
        }

        // const { errors } = validateFrom(req.body);

        // if (Object.keys(errors).length > 0) {
        //     res.status(400).json(errors);
        // }
        
        if(errors.length > 0) {
            res.send(errors);
        }

        // const testUser = new User({
        //     name: "Tess",
        //     username: "test",
        //     email: "tessT@email.com",
        //     password: "test12",
        //     dob: "1111-11-11",
        //     premium: "false",
        // });

        // testUser.save(err => err ? console.log(err) : console.log("test user saved"));

    }
};