const express = require("express");
const work = express.Router();
const workCtrl = require("../controllers/work");

work.get("/", workCtrl.getAll);

module.exports = work;
