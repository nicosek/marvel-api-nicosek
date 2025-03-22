const Favorite = require("../models/Favorite");
const { BadRequestError, NotFoundError } = require("../utils/errors");

exports.getFavorites = async (req, res) => {
  const favorites = await Favorite.find({ user: req.user._id });
  res.status(200).json(favorites);
};

exports.addFavorite = async (req, res) => {
  const { marvelId, type } = req.body;

  if (!marvelId || !type) {
    throw new BadRequestError("Both marvelId and type are required");
  }

  const favorite = await Favorite.create({
    user: req.user._id,
    marvelId,
    type,
  });

  res.status(201).json(favorite);
};

exports.removeFavorite = async (req, res) => {
  const { marvelId, type } = req.body;

  if (!marvelId || !type) {
    throw new BadRequestError("Both marvelId and type are required");
  }

  const deleted = await Favorite.findOneAndDelete({
    user: req.user._id,
    marvelId,
    type,
  });

  if (!deleted) {
    throw new NotFoundError("Favorite not found");
  }

  res.status(200).json({ message: "Favorite removed successfully" });
};
