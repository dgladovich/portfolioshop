'use strict';
module.exports = (sequelize, DataTypes) => {
    var product_filter = sequelize.define('ProductFilter', {
        title: DataTypes.STRING,
        name: DataTypes.VARCHAR
    }, {
        classMethods: {
            associate: function (models) {
                // associations can be defined here
            }
        },
        tableName: 'shop_product_filters'
    });
    return product_filter;
};