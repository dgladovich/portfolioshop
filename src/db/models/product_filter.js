'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_filter = sequelize.define('shop_product_filter', {
    title: DataTypes.STRING,
    name: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_filter;
};