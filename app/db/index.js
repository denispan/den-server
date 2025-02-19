const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const logger = require('../utils/logger');
const dbConfig = require('../../config/database');

const modelPath = path.resolve(__dirname, '../db/models/');

const config = dbConfig;

const sequelize = new Sequelize({
  ...config,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: logger.debug.bind(logger)
});

const db = {};

// Add models
fs
  .readdirSync(modelPath)
  .filter((file) => (file.indexOf('.') !== 0) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const model = require(path.join(modelPath, file))(sequelize, Sequelize.DataTypes, db);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  logger.debug(modelName);
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.init = async () => {
  try {
    await sequelize.authenticate();
    logger.debug('Connection to DB has been established successfully.');
    return true;
  } catch (e) {
    logger.error('DB Error: ', e);
    return false;
  }
};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
