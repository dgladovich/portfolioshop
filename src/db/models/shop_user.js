'use strict';
module.exports = (sequelize, DataTypes) => {
  var shop_user = sequelize.define('shop_user', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.VARCHAR,
    active: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return shop_user;
};