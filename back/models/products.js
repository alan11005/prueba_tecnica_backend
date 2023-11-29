const {Model, DataTypes, Sequelize} = require('sequelize');

const PRODUCTS_TABLE = 'products';

const ProductSchema = {
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
};

class Product extends Model{
  static associate(models){
    this.hasMany(models['OrderDetail'], {
      as: 'details',
      foreignKey: 'product_code'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: PRODUCTS_TABLE,
      modelName: 'Product',
      timestamps: false
    }
  }
}

module.exports = { Product, ProductSchema, PRODUCTS_TABLE};
