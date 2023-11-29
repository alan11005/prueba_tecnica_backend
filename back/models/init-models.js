const {Customer, CustomerSchema} = require('./customers');
const {Order, OrderSchema} = require('./orders');
const {OrderDetail, OrderDetailSchema} = require('./orderdetails');
const {Product, ProductSchema} = require('./products');

function initModels(sequelize) {
  Product.init(ProductSchema, Product.config(sequelize));
  OrderDetail.init(OrderDetailSchema, OrderDetail.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));

  OrderDetail.associate(sequelize.models);
  Order.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Product.associate(sequelize.models);
}

module.exports = initModels;
