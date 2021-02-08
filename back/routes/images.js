const express = require("express");
const images = express.Router();
const imgCtrl = require("../controllers/images");

images.get("/:name", imgCtrl.sendImage);

module.exports = images;
