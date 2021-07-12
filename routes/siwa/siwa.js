const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Matches with "/applelogin"
router.route("/")
  .post(usersController.save);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(usersController.findOne)

module.exports = router;