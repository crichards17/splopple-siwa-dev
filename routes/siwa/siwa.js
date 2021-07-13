const router = require("express").Router();
const usersController = require("../../controllers/usersController");

router.post('/', async (req, res) => {
  console.log("SIWA post route called");
  console.log(req.body);
});

module.exports = router;