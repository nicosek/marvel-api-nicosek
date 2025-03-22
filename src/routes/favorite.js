const express = require("express");
const router = express.Router();
const asyncHandler = require("../middlewares/async-handler");
const authMiddleware = require("../middlewares/auth_middleware");
const authorize = require("../middlewares/authorize");

const favoriteController = require("../controllers/favoriteController");
const Favorite = require("../models/Favorite");

// Auth & authorization middlewares
router.use(authMiddleware);

// Routes
router.get(
  "/",
  authorize(Favorite, "getFavorites"),
  asyncHandler(favoriteController.getFavorites)
);
router.post(
  "/",
  authorize(Favorite, "addFavorite"),
  asyncHandler(favoriteController.addFavorite)
);
router.delete(
  "/:id",
  authorize(Favorite, "removeFavorite"),
  asyncHandler(favoriteController.removeFavorite)
);

module.exports = router;
