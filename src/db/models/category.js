'use strict';
module.exports = (sequelize, DataTypes) => {
  var category = sequelize.define('shop_category', {
    title: DataTypes.VARCHAR,
    view_title: DataTypes.STRING,
    image: DataTypes.STRING,
    created_at: DataTypes.DATE,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return category;
};