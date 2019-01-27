// dependencies
const validator = require('validator');

// models
const User = require("../models/User");

function validateFrom(data) {
    let errors = [];

    if (validator.isEmpty(data.name)) {
        errors.push({ msg: "This is a required field." });
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

        const { errors } = validateFrom(req.body);

        if(errors.length > 0) {
            res.send(errors);
        }

        // const { email } = req.body;

        // User.findOne({ email: email })
        //     .then(user => {
        //         console.log(user);
        //         console.log(email);
                
        //     });

        // const testUser = new User({
        //     name: "Tess",
        //     username: "test",
        //     email: "tessT@email.com",
        //     password: "test12",
        //     dob: "1111-11-11",
        //     premium: "false",
        // });

        // testUser.save(err => err ? console.log(err) : console.log("test user saved"));

        
        // take in req.body and make sure that you don't have
        // multiple users by checking against the database, 
        // if it does not exist,
        // hash the password
        // then save the new user to the database

    }
};