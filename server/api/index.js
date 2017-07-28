var express = require("express");
var router = express.Router();
var apiController = require("./api.controller");

// router.get("/root", apiController.getRoot);
router.get("/name", apiController.getName);

module.exports = router;