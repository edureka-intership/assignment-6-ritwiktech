const express = require("express");
const controller = require("../controllers/res_search")

const router = express.Router();

router.get("/cost", controller.sortByHightolow);

router.get("/cost1", controller.getLowtoHigh);

router.post("/", controller.addRestaurant);

router.get("/", controller.getAllRestaurants);

router.get("/:loc", controller.getRestaurantByLocation);

router.get("/Cuisine/:Cuisine", controller.filterCuisine);


module.exports = router;

