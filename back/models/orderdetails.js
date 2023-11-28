const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orderdetails', {
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    product_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    quantity_ordered: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price_each: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    order_line_number: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orderdetails',
    schema: 'public',
    timestamps: false
  });
};
