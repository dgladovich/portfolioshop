'use strict';
module.exports = (sequelize, DataTypes) => {
  var filter - category = sequelize.define('filter-category', {
    category_id: DataTypes.INTEGER,
    filter_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return filter - category;
};