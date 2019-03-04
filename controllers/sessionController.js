module.exports = {
  currentUser: (req, res) => {
    res.json(req.user);
  }
};
