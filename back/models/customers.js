const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('customers', {
    customer_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    customer_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contact_last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contact_first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address_line1: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    address_line2: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    postal_code: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: "NULL"
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    sales_rep_employee_number: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    credit_limit: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 'NULL'
    }
  }, {
    sequelize,
    tableName: 'customers',
    schema: 'public',
    timestamps: false
  });
};
