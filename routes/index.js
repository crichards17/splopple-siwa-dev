const path = require("path");
const router = require("express").Router();
const siwaRoutes = require("./siwa");

// API Routes
router.use("/applelogin", siwaRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;