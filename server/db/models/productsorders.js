'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductsOrders extends Model {
    static associate(models) {
      ProductsOrders.belongsTo(models.Orders, {
        foreignKey: 'orderId',
      });
      ProductsOrders.belongsTo(models.Products, {
        foreignKey: 'productId',
      }); 
    }
  };
  ProductsOrders.init({
    productId: DataTypes.INTEGER,
    qtd: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'ProductsOrders',
  });
  return ProductsOrders;
};