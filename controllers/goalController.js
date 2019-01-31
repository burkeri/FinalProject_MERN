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
  
  findById: (req, res) => {
    //
  },

  create: (req, res) => {
    const newGoal = new Goal(req.body);
    // console.log(newGoal);
    
    // enter data into the database
    newGoal.save(err => {
      if (err) return res.status(500).send(err);
      console.log(`Goal created.`);
      return res.json(newGoal);
    });
  },

  update: (req, res) => {
    console.log(`ID to update: ${req.params.id}`);
    console.log(`Progress to update: ${req.params.prog}`);
    Goal.findByIdAndUpdate({_id: req.params.id}, {progress: req.params.prog}, (err, dbGoal) => {
      if (err) return res.status(500).send(err);
      return res.json(dbGoal);
    });
  },

  remove: (req, res) => {
    console.log(`ID to remove: ${req.params.id}`);
    Goal.findByIdAndDelete(req.params.id, (err, dbGoal) => {
      if (err) return res.status(500).send(err);
      return res.json(dbGoal);
    });
  }
};