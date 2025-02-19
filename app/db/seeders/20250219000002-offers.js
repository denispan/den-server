'use strict';

const { MOCK_OFFERS } = require('../mocks/offers');

module.exports = {
  async up(queryInterface, Sequelize) {
    // Создаем записи предложений
    const offers = MOCK_OFFERS.flatMap(typeOffer => 
      typeOffer.offers.map(offer => ({
        id: offer.id,
        type: typeOffer.type,
        title: offer.title,
        price: offer.price,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
    );

    await queryInterface.bulkInsert('BtOffers', offers, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('BtOffers', null, {});
  }
};
