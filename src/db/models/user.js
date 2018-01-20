'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('shop_user', {
    id: DataTypes.NUMBER,
    name: DataTypes.STRING,
    age: DataTypes.NUMBER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};