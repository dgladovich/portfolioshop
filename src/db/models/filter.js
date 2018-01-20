'use strict';
module.exports = (sequelize, DataTypes) => {
  var filter = sequelize.define('filter', {
    name: DataTypes.VARCHAR,
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return filter;
};