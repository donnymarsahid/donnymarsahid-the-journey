const express = require("express");
const { login, register, checkAuth } = require("../controllers/auth");
const { authToken } = require("../middlewares/auth");
const router = express.Router();

// Authentification
router.post("/login", login);
router.post("/register", register);
router.get("/check-auth", authToken, checkAuth);

module.exports = router;
