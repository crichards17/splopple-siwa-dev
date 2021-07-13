const path = require("path");
const router = require("express").Router();

router.post('/applelogin', async (req, res) => {
  console.log("SIWA post route called");
  console.log(req.body);
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;