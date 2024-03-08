const express = require("express");
const ReadWriteFile = require("../Controller/index");
const router = express.Router();
router.get("/",ReadWriteFile.readWriteFile);

module.exports = router;
