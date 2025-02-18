const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookOfferLocation extends Model {
    static associate(models) {
      BookOfferLocation.hasOne(models.BookOffer, {
        foreignKey: {
          name: 'offer_id'
        }
      });
    }
  }

  BookOfferLocation.init({
    lat: {
      type: DataTypes.INT, //35.66361144864966
      allowNull: false
    },
    lng: {
      type: DataTypes.INT, //139.7908574246626
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BookOfferLocation'
  });

  return BookOfferLocation;
};
