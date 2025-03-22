const BasePolicy = require("./base_policy");

class FavoritePolicy extends BasePolicy {
  getFavorites() {
    return this.isOwner;
  }
  addFavorite() {
    return this.getFavorites;
  }
  removeFavorite() {
    return this.getFavorites;
  }
  destroy() {
    return this.isOwner();
  }
}

module.exports = FavoritePolicy;
