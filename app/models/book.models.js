const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const Author = sequelize.define('BookAuthor', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    avatar: {
      type: DataTypes.STRING
    }
  });

  const Location = sequelize.define('BookLocation', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    lat: {
      type: DataTypes.FLOAT
    },
    lng: {
      type: DataTypes.FLOAT
    }
  });

  const Offer = sequelize.define('BookOffer', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    type: {
      type: DataTypes.STRING
    },
    rooms: {
      type: DataTypes.INTEGER
    },
    guests: {
      type: DataTypes.INTEGER
    },
    checkin: {
      type: DataTypes.STRING
    },
    checkout: {
      type: DataTypes.STRING
    },
    features: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    },
    description: {
      type: DataTypes.TEXT
    },
    photos: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
    }
  });

  // Define relationships
  Author.hasMany(Offer);
  Offer.belongsTo(Author);

  Location.hasMany(Offer);
  Offer.belongsTo(Location);

  return {
    Author,
    Location,
    Offer
  };
};
