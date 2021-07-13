const db = require("../models");

module.exports = {
    findAll: function(req, res) {
      db.User
        .find(req.query)
        .sort({ date: -1 })
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    findOne: function(req, res) {
      db.User
        .findOne({appleId: req.params.appleId})
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    save: function(req, res) {
      // 
      window.alert(req.body);
      // 
      db.User
        .create(req.body)
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    },
    update: function(req, res) {
      db.User
        .findOne({ appleId: req.params.appleId })
        .then(dbUser => dbUser.save(req.body))
        .then(dbUser => res.json(dbUser))
        .catch(err => res.status(422).json(err));
    }
  };