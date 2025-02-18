const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../../config/database');
const bookModels = require('../models/book.models');

const sequelize = new Sequelize({
  ...dbConfig,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const db = {};

// Initialize book models
const { Author, Location, Offer } = bookModels(sequelize);
db.BookAuthor = Author;
db.BookLocation = Location;
db.BookOffer = Offer;

// Add other models
fs
  .readdirSync(modelPath)
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(modelPath, file))(sequelize, Sequelize.DataTypes, db);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  // logger.debug(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.init = async (sync = process.env.DB_SYNC === 'true') => {
  try {
    await sequelize.authenticate();
    // logger.debug('Connection to DB has been established successfully.');
    if (sync) {
      await sequelize.sync({alter: true, force: false});
      // logger.info('OK! Database sync successful.');
    }
    return true;
  } catch (e) {
    // logger.error('DB Error: ', e);
    return false;
  }
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
