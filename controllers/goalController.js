const Goal = require("../models/Goal");

module.exports = {
  findAll: (req, res) => {
    Goal.find({ userID: req.params.username })
      .then(dbGoals => {
        res.json(dbGoals);
      })
      .catch(err => res.status(422).json(err));
  },

  findById: (req, res) => {
    Goal.findOne(req.params.id)
      .then(dbGoal => {
        res.json(dbGoal);
      })
      .catch(err => res.status(422).json(err));
  },

  create: (req, res) => {
    const newGoal = new Goal(req.body);

    // enter data into the database
    newGoal.save((err, dbGoal) => {
      if (err) return res.status(500).send(err);
      console.log(`Goal created.`);
      return res.json(dbGoal);
    });
  },

  update: (req, res) => {
    Goal.findOne({ _id: req.params.id })
      .then(dbGoal => {
        // Update the goal depending on the input data
        if (req.body.userID) dbGoal.userID = req.body.userID;
        if (req.body.category) dbGoal.category = req.body.category;
        if (req.body.name) dbGoal.name = req.body.name;
        if (req.body.icon) dbGoal.icon = req.body.icon;
        if (req.body.frequency) dbGoal.frequency = req.body.frequency;
        if (req.body.description) dbGoal.description = req.body.description;
        if (req.body.progress) dbGoal.progress = req.body.progress;
        if (req.body.note) dbGoal.notes.push({ body: req.body.note });
        if (req.body.picture) parser.single(req.body.picture);

        // Save the updated goal to the DB
        dbGoal.save((err, updatedGoal) => {
          if (err) return res.status(500).send(err);
          console.log(`Goal updated.`);
          return res.json(updatedGoal);
        });
      })
      // Catch any errors in finding the goal
      .catch(err => res.status(422).json(err));
  },

  remove: (req, res) => {
    Goal.findByIdAndDelete(req.params.id, (err, dbGoal) => {
      if (err) return res.status(500).send(err);
      return res.json(dbGoal);
    });
  }
};
