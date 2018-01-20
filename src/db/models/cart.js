'use strict';
module.exports = (sequelize, DataTypes) => {
  var shop_cart = sequelize.define('shop_cart', {
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
    }
  });
  return shop_cart;
};