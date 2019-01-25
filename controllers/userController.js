// models
const db = require("../models");

module.exports = {

    // register/create new user ------
    registerUser: function(req, res) {
        console.log("server: ");
        console.log(req.body);

        // take in req.body and make sure that you don't have
        // multiple users by checking against the database, 
        // if it does not exist,
        // hash the password
        // then save the new user to the database
    }
};