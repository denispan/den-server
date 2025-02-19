'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('BtPoints', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      base_price: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_from: {
        type: Sequelize.DATE,
        allowNull: false
      },
      date_to: {
        type: Sequelize.DATE,
        allowNull: false
      },
      destination: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'BtDestinations',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      is_favorite: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },
      offers: {
        type: Sequelize.JSON,
        allowNull: false,
        defaultValue: []
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
        references: {
          model: 'BtOfferTypes',
          key: 'type'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('BtPoints');
  }
};
