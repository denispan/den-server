'use strict';

const {MOCK_POINTS} = require('../mocks/points');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const points = MOCK_POINTS.map(point => ({
      id: point.id,
      base_price: point.base_price,
      date_from: point.date_from,
      date_to: point.date_to,
      destination: point.destination,
      is_favorite: point.is_favorite,
      offers: JSON.stringify(point.offers),
      type: point.type,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('BtPoints', points, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BtPoints', null, {});
  }
};
