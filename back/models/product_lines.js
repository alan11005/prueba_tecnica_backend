const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('product_lines', {
    product_line: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    text_description: {
      type: DataTypes.STRING(4000),
      allowNull: true,
      defaultValue: "NULL"
    },
    html_description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    image: {
      type: DataTypes.BLOB,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'product_lines',
    schema: 'public',
    timestamps: false
  });
};
