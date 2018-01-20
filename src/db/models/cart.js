'use strict';
module.exports = (sequelize, DataTypes) => {
  var shop_cart = sequelize.define('Cart', {
    id: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    status: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    },
    tableName: 'shop_cart'
  });
  return shop_cart;
};