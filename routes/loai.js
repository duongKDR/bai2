var express = require("express");
var router = express.Router();

const loaiController = require("../controller/loai.controller");
router.get("/", loaiController.getlist);

router.get("/addnew", loaiController.getLoaiCreate);
router.post("/store", loaiController.postStore);

router.get("/edit/:id", loaiController.getEdit);
router.post("/update/:id", loaiController.postUpdate);

router.get("/delete/:id", loaiController.getDelete);

module.exports = router;
