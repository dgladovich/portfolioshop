'use strict';
module.exports = (sequelize, DataTypes) => {
  var delivery = sequelize.define('shop_delivery', {
    name: DataTypes.STRING,
    title: DataTypes.VARCHAR
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return delivery;
};