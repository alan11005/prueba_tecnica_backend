var DataTypes = require("sequelize").DataTypes;
var _customers = require("./customers");
var _employees = require("./employees");
var _offices = require("./offices");
var _orderdetails = require("./orderdetails");
var _orders = require("./orders");
var _payments = require("./payments");
var _product_lines = require("./product_lines");
var _products = require("./products");

function initModels(sequelize) {
  var customers = _customers(sequelize, DataTypes);
  var employees = _employees(sequelize, DataTypes);
  var offices = _offices(sequelize, DataTypes);
  var orderdetails = _orderdetails(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var payments = _payments(sequelize, DataTypes);
  var product_lines = _product_lines(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);


  return {
    customers,
    employees,
    offices,
    orderdetails,
    orders,
    payments,
    product_lines,
    products,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
