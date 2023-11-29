const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('offices', {
    office_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    city: {
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
    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    country: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postal_code: {
      type: DataTypes.STRING(15),
      allowNull: false
    },
    territory: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'offices',
    schema: 'public',
    timestamps: false
  });
};
