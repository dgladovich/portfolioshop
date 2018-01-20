'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_wishes = sequelize.define('shop_product_wishes', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    status: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_wishes;
};