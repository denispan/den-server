const {Model} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class BtDestinations extends Model {
    static associate(models) {
      // define association here
      BtDestinations.hasMany(models.BtPoints, {
        foreignKey: 'destination',
        sourceKey: 'id'
      });
    }
  }

  BtDestinations.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      unique: true,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    pictures: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'BtDestinations'
  });
  return BtDestinations;
};
