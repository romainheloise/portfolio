const express = require("express");
const mail = express.Router();
const mailCtrl = require("../controllers/email");

mail.post("/", mailCtrl.contactP);

module.exports = mail;
