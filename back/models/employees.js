const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('employees', {
    employee_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    extension: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    office_code: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    reports_to: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_Title: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'employees',
    schema: 'public',
    timestamps: false
  });
};
