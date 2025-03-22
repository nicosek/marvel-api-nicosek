const mongoose = require("mongoose");

const favoriteSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User is required"],
    },
    marvelId: {
      type: String,
      required: [true, "Marvel resource ID is required"],
    },
    type: {
      type: String,
      enum: ["character", "comic"],
      required: [true, "Type is required"],
    },
  },
  { timestamps: true }
);

favoriteSchema.index({ user: 1, marvelId: 1, type: 1 }, { unique: true });

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;
