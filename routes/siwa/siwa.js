const router = require("express").Router();

router.post('/', async (req, res) => {
  console.log(req.body);

  const { provider, response } = req.body;

  res.json({ status: 'ok' });

});

module.exports = router;