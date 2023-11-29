const {Model, DataTypes, Sequelize} = require('sequelize');

const ORDERS_TABLE = 'orders';

const OrderSchema = {
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
    allowNull: false,
    foreignKey: true,
    references: {
      model: 'customers',
      key: 'customer_number'
    }
  }
}

class Order extends Model{
  static associate(models){
    this.belongsTo(models.Customer, {
      as: 'customer',
      foreignKey: 'customer_number'
    });
    this.hasMany(models['OrderDetail'], {
      as: 'orderdetail',
      foreignKey: 'order_number'
    });
  }

  static config(sequelize){
    return {
      sequelize,
      tableName: ORDERS_TABLE,
      modelName: 'Order',
      timestamps: false
    }
  }
}

module.exports = {ORDERS_TABLE, OrderSchema, Order};