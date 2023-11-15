const express = require("express");
const router = express.Router();
const { signUp, signIn, signOut } = require("../../controllers/user/auth");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.get("/signout", signOut);

module.exports = router;
