const router = require("express").Router();


router.post('/', async (req, res) => {
  console.log(req.body);

  const code = req.query.code;

  res.json(code);

});

module.exports = router;