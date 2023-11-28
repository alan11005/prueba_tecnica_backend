const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('products', {
    product_code: {
      type: DataTypes.STRING(15),
      allowNull: false,
      primaryKey: true
    },
    product_name: {
      type: DataTypes.STRING(70),
      allowNull: false
    },
    product_line: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    product_scale: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    product_vendor: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quantity_in_stock: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    buy_price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    msrp: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'products',
    schema: 'public',
    timestamps: false,
    id: false
  });
};
