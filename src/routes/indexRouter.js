const express = require("express");
const router = express.Router();

const { login, register, checkAuth } = require("../controllers/auth");
const { getBookmarksUser, addBookmark } = require("../controllers/bookmark");
const { getUser, getJourneysUser } = require("../controllers/user");
const { authToken } = require("../middlewares/auth");
const { uploadFile } = require("../middlewares/uploadFile");
const {
  getJourneys,
  addJourney,
  getDetailJourney,
} = require("../controllers/journey");

// Authentification
router.post("/login", login);
router.post("/register", register);
router.get("/check-auth", authToken, checkAuth);

// Journey
router.get("/journeys", getJourneys);
router.post("/journey", authToken, uploadFile("image"), addJourney);
router.get("/journey/:id", getDetailJourney);

// Profile
router.get("/profile", authToken, getUser);
router.get("/profile/journeys", authToken, getJourneysUser);

// Bookmark
router.get("/bookmarks", authToken, getBookmarksUser);
router.post("/bookmark/:id", authToken, addBookmark);

module.exports = router;
