const router = require("express").Router();
const placeRoutes = require("./places");
const callRoutes = require("./call");

router.use("/places", placeRoutes);
router.use("/call", callRoutes);

module.exports = router;
