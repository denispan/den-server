const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BookOffer extends Model {
    static associate(models) {
      BookOffer.belongsTo(models.BookOfferAuthor, {
        foreignKey: {
          name: 'author_id',
          allowNull: false
        }
      });
    }
  }

  BookOffer.init({
    title: {
      type: DataTypes.STRING(100),
      min: DataTypes.STRING(30),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    price: {
      type: DataTypes.INT,
      allowNull: false
    },
    type: {
      type: DataTypes.ENUM,
      values: ['bungalow', 'flat', 'hotel', 'house', 'palace']
    },
    rooms: {
      type: DataTypes.ENUM,
      values: [1, 2, 3, 100]
    },
    guests: {
      type: DataTypes.ENUM,
      values: [0, 1, 2, 3]
    },
    checkin: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    checkout: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    features: {
      type: DataTypes.ARRAY,
      values: ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'],
      defaultValue: []
    },
    description: {
      type: DataTypes.STRING(256),
      allowNull: true,
      defaultValue: null
    },
    photos: {
      type: DataTypes.ARRAY,
      defaultValue: []
    }
  }, {
    sequelize,
    modelName: 'BookOffer'
  });
};
