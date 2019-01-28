const Goal = require("../models/Goal");

module.exports = {
  create: (req, res) => {
    const newGoal = new Goal(req.body);
    // console.log(newGoal);
    
    // enter data into the database
    newGoal.save(err => {
      if (err) return res.status(500).send(err);
      return res.status(200);
    });
  }
};