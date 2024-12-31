const express = require ("express")
const {registeruser,loginuser} = require("../Controllers/authController")

const router = express.Router()

router.post("/register",registeruser)
router.post("/login",loginuser)

module.exports = router;