// models
const User = require("../models/User");

module.exports = {

    // register/create new user ------
    registerUser: function(req, res) {
        console.log("server: ");
        console.log(req.body);

        const { email } = req.body;

        User.findOne({ name: "Tess"})
            .then(user => {
                console.log(user);
            });

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