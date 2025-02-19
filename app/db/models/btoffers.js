const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BtOffers extends Model {
    static associate(models) {
      BtOffers.belongsTo(models.BtOfferTypes, {
        foreignKey: 'type',
        targetKey: 'type'
      });
      BtOffers.belongsToMany(models.BtPoints, {
        through: 'BtPointOffers',
        foreignKey: 'offerId',
        otherKey: 'pointId'
      });
    }
  }

  BtOffers.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'BtOfferTypes',
        key: 'type'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BtOffers'
  });
  return BtOffers;
};
