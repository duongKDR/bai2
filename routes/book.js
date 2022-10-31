var express = require("express");
var router = express.Router();

const bookController = require("../controller/book.controller");
router.get("/", bookController.getlist);

router.get("/addnew", bookController.getLoaiCreate);
router.post("/store", bookController.postStore);

router.get("/edit/:id", bookController.getEdit);
router.post("/update/:id", bookController.postUpdate);

router.get("/delete/:id", bookController.getDelete);

module.exports = router;
