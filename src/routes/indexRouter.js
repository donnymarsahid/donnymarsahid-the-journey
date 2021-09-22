const express = require("express");
const router = express.Router();

const { login, register, checkAuth } = require("../controllers/auth");
const {
  getBookmarksUser,
  addBookmark,
  deleteBookmark,
} = require("../controllers/bookmark");
const {
  getUser,
  getJourneysUser,
  updateUserProfile,
  getDataUsers,
} = require("../controllers/user");
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

// User
router.get("/users", getDataUsers);

// Profile
router.get("/profile", authToken, getUser);
router.get("/profile/journeys", authToken, getJourneysUser);
router.put("/profile", authToken, uploadFile("image"), updateUserProfile);

// Bookmark
router.get("/bookmarks", authToken, getBookmarksUser);
router.post("/bookmark", authToken, addBookmark);
router.delete("/bookmark/:id", authToken, deleteBookmark);

module.exports = router;
