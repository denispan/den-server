'use strict';

const { MOCK_DESTINATIONS } = require('../mocks/destinations');

module.exports = {
  async up(queryInterface, Sequelize) {
    const destinations = MOCK_DESTINATIONS.map(dest => ({
      id: dest.id,
      name: dest.name,
      description: dest.description,
      pictures: JSON.stringify(dest.pictures),
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('BtDestinations', destinations, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BtDestinations', null, {});
  }
};
