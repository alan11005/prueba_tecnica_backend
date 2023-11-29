const {Model, DataTypes, Sequelize} = require('sequelize');

const ORDER_DETAILS_TABLE = 'orderdetails';

const OrderDetailSchema ={
  order_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    references: {
      model: 'orders',
      key: 'order_number'
    }
  },
  product_code: {
    type: DataTypes.STRING(15),
    allowNull: false,
    references: {
      model: 'products',
      key: 'product_code'
    }
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
};

class OrderDetail extends Model{
  static associate(models){
    this.belongsTo(models.Order, {
      as: 'order',
      foreignKey: 'order_number'
    });
    this.belongsTo(models.Product, {
      as: 'product',
      foreignKey: 'product_code'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDER_DETAILS_TABLE,
      modelName: 'OrderDetail',
      timestamps: false
    }
  }
}

module.exports = {OrderDetail, OrderDetailSchema, ORDER_DETAILS_TABLE};