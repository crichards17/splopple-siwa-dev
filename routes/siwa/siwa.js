const router = require("express").Router();


router.post('/', async (req, res) => {
  console.log(req.body);

  res.json(req.body);

});

module.exports = router;