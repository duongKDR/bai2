var express = require('express');
var router = express.Router();
const loginController = require("../controller/login.controller.js");
/* GET users listing. */
router.get('/th', function(req, res, next) {
  res.send("index", { title: "SÁCH" });
});

router.get("/thing/:id([0-9]{5})", loginController.getID);
router.get('/:name/:id',loginController.getNameId );

// router.get('*', loginController.err);



// router.use("/things",loginController.timeLogg);


// Route handler that sends the response
router.get('/things', loginController.thing);

module.exports = router;
