'use strict';
module.exports = (sequelize, DataTypes) => {
  var order = sequelize.define('Order', {
    user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    delivey_date: DataTypes.DATE,
    address: DataTypes.VARCHAR,
    delivery_service: DataTypes.VARCHAR,
    payment: DataTypes.VARCHAR,
    status: DataTypes.VARCHAR,
    total_price: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
      tableName: 'shop_orders'
  });
  return order;
};