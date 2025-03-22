const express = require("express");
const router = express.Router();
const marvelController = require("../controllers/marvelController");
const asyncHandler = require("../middlewares/async-handler");

// Comics
router.get("/comics", asyncHandler(marvelController.getComics));
router.get(
  "/comics/:characterId",
  asyncHandler(marvelController.getComicsByCharacterId)
);
router.get("/comic/:comicId", asyncHandler(marvelController.getComicById));

// Characters
router.get("/characters", asyncHandler(marvelController.getCharacters));
router.get(
  "/character/:characterId",
  asyncHandler(marvelController.getCharacterById)
);

module.exports = router;
