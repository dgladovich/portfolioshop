'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_visit = sequelize.define('shop_product_visit', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_visit;
};