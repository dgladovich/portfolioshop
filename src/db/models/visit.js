'use strict';
module.exports = (sequelize, DataTypes) => {
  var visit = sequelize.define('shop_visit', {
    user_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return visit;
};