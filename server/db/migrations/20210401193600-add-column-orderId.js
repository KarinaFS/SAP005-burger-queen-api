'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'ProductsOrders',
      'orderId',
      {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    )

    await queryInterface.addConstraint('ProductsOrders', {
      fields: ['orderId'], 
      type: 'foreign key',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })

    await queryInterface.addConstraint('ProductsOrders', {
      fields: ['productId'], 
      type: 'foreign key',
      references: {
        table: 'Products',
        field: 'id'
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('ProductsOrders', 'orderId')

    await queryInterface.removeConstraint('ProductsOrders', {
      fields: ['orderId'], 
      type: 'foreign key',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })

    await queryInterface.removeConstraint('ProductsOrders', {
      fields: ['productId'], 
      type: 'foreign key',
      references: {
        table: 'Products',
        field: 'id'
      }
    })
  }
};
