'use strict';
module.exports = (sequelize, DataTypes) => {
  var product_comment = sequelize.define('shop_product_comment', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    user: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
    likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return product_comment;
};