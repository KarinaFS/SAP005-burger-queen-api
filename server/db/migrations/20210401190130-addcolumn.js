'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('Orders', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('Orders', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id'
      }
    })
  }
};
