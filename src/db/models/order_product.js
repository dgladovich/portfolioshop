'use strict';
module.exports = (sequelize, DataTypes) => {
  var order_products = sequelize.define('shop_order_products', {
    product_id: DataTypes.INTEGER,
    order_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return order_products;
};