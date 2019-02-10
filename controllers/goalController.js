const Goal = require("../models/Goal");

module.exports = {
  findAll: (req, res) => {
    Goal.find({})
      .then(dbGoals => {
        res.json(dbGoals);
      })
      .catch(err => res.status(422).json(err));
  },
  
  findById: (req, res) => {
    Goal.findOne({_id: req.params.id})
        .then(dbGoal => {
            res.json(dbGoal);
        })
        .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    const newGoal = new Goal(req.body);

    // enter data into the database
    newGoal.save(err => {
      if (err) return res.status(500).send(err);
      console.log(`Goal created.`);
      return res.json(newGoal);
    });
  },

  update: (req, res) => {
    // console.log(req.body);
    Goal.findByIdAndUpdate(
        { _id: req.params.id }, 
        {
            userID: req.body.userID,
            category: req.body.category,
            name: req.body.name,
            icon: req.body.icon,
            description: req.body.description
        }, 
        (err, dbGoal) => {
        if (err) return res.status(500).send(err);
        console.log(dbGoal);
        return res.json(dbGoal);
        }
    );
  },

  updateProgress: (req, res) => {
    // console.log(`ID to update: ${req.params.id}`);
    // console.log(`Progress to update: ${req.params.prog}`);

    Goal.findByIdAndUpdate({_id: req.params.id}, {progress: req.params.prog}, (err, dbGoal) => {
      if (err) return res.status(500).send(err);
      return res.json(dbGoal);
    });
  },

  remove: (req, res) => {
    // console.log(`ID to remove: ${req.params.id}`);

    Goal.findByIdAndDelete(req.params.id, (err, dbGoal) => {
      if (err) return res.status(500).send(err);
      return res.json(dbGoal);
    });
  }
};