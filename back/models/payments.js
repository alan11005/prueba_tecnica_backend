const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('payments', {
    customer_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    check_number: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    amount: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'payments',
    schema: 'public',
    timestamps: false
  });
};
