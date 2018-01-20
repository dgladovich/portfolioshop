'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_rating = sequelize.define('shop_product_rating', {
    user_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    mark: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_rating;
};