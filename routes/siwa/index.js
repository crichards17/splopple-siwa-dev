const router = require("express").Router();
const siwaRoutes = require("./siwa");

// Post routes
router.use("/", siwaRoutes);

module.exports = router;
