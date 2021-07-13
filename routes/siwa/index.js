const router = require("express").Router();
const siwaRoutes = require("./siwa.js");

// Post routes
router.use("/", siwaRoutes);

module.exports = router;
