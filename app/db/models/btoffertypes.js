const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BtOfferTypes extends Model {
    static associate(models) {
      BtOfferTypes.hasMany(models.BtPoints, {
        foreignKey: 'type',
        sourceKey: 'type'
      });
      BtOfferTypes.hasMany(models.BtOffers, {
        foreignKey: 'type',
        sourceKey: 'type'
      });
    }
  }

  BtOfferTypes.init({
    type: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BtOfferTypes'
  });
  return BtOfferTypes;
};
