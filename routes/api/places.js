const router = require("express").Router();
const placesController = require("../../controllers/placesController");

router.route("/")
  .get(placesController.findAll)
  .post(placesController.create);

router.route("/:id")
  .get(placesController.findById)
  .delete(placesController.remove);

module.exports = router;
