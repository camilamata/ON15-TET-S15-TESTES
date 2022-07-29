const express = require("express");

const controller = require("../controllers/userController");

const router = express.Router();

router.post("/registerUser", controller.register);
router.get("/accessUser", controller.getByName);


module.exports = router;