const express = require("express");
const router = express.Router();

const {
  login,
  register,
  checkAuth,
  forgetPassword,
  resetPassword,
} = require("../controllers/auth");
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
  deleteJourneyUser,
  updateJourneyUser,
} = require("../controllers/journey");

// Authentification
router.post("/login", login);
router.post("/register", register);
router.get("/check-auth", authToken, checkAuth);
router.post("/forget-password", forgetPassword);
router.put("/reset-password/:id", resetPassword);

// Journey
router.get("/journeys", getJourneys);
router.post("/journey", authToken, uploadFile("image"), addJourney);
router.get("/journey/:id", getDetailJourney);
router.delete("/journey/:id", authToken, deleteJourneyUser);
router.put("/journey/:id", authToken, uploadFile("image"), updateJourneyUser);

// User
router.get("/users", getDataUsers);

// Profile
router.get("/profile", authToken, getUser);
router.get("/profile/journeys", authToken, getJourneysUser);
router.put("/profile", authToken, uploadFile("image"), updateUserProfile);

// Bookmark
router.get("/bookmarks", authToken, getBookmarksUser);
router.post("/bookmark/:id", authToken, addBookmark);
router.delete("/bookmark/:id", authToken, deleteBookmark);

module.exports = router;
