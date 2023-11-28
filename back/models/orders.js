const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('orders', {
    order_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    required_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    shipped_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    status: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'orders',
    schema: 'public',
    timestamps: false
  });
};
