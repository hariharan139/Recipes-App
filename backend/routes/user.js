const express = require("express");
const { userLogin, userSignup, getUser } = require("../controller/user");
const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);
router.get("/user/:id", getUser);
module.exports = router;
