'use strict';

const { MOCK_OFFERS } = require('../mocks/offers');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Создаем записи типов
    const offerTypes = MOCK_OFFERS.map(offer => ({
      type: offer.type,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('BtOfferTypes', offerTypes, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BtOfferTypes', null, {});
  }
};
