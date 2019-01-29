const Goal = require("../models/Goal");

module.exports = {
  findAll: (req, res) => {
    Goal.find({})
      .then(dbGoals => {
        // console.log(dbGoals);
        res.json(dbGoals);
      })
      .catch(err => res.status(422).json(err));
  },
  
  create: (req, res) => {
    const newGoal = new Goal(req.body);
    console.log("server: ");
    console.log(newGoal);
    
    // enter data into the database
    newGoal.save(err => {
      if (err) return res.status(500).send(err);
      return res.json(newGoal);
    });
  }
};