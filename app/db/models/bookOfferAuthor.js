const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookOfferAuthor extends Model {
    static associate(models) {
      BookOfferAuthor.hasMany(models.BookOffer, {
        foreignKey: {
          name: 'author_id'
        }
      });
    }
  }

  BookOfferAuthor.init({
    avatar: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'BookOfferAuthor'
  });

  return BookOfferAuthor;
};
