const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/finalProj";


module.exports = {
  getSession: () => {
    MongoClient.connect(MONGODB_URI, (err, db) => {
      if (err) throw err;
      var dbo = db.db("finalProj");
      dbo
        .collection("sessions")
        .find({})
        .then(session => {
          console.log(session);
          db.close();
        });
    });
  }
};
