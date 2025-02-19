const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BtPoints extends Model {
  }

  BtPoints.init({
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    base_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date_from: {
      type: DataTypes.DATE,
      allowNull: false
    },
    date_to: {
      type: DataTypes.DATE,
      allowNull: false
    },
    destination: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'BtDestinations',
        key: 'id'
      }
    },
    is_favorite: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'BtOfferTypes',
        key: 'type'
      }
    },
    offers: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: []
    }
  }, {
    sequelize,
    modelName: 'BtPoints'
  });
  
  return BtPoints;
};
