'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_images = sequelize.define('shop_product_images', {
    title: DataTypes.STRING,
    product_id: DataTypes.INTEGER,
    src: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_images;
};