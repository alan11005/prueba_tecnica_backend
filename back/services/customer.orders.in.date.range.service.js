const sequelize = require('sequelize');
const Op = sequelize.Op;

const { models } = require('../libs/sequelize');

class customersOrdersInDateRangeService {
  constructor() {
  }

  async find() {
    const orderDetails = await models.OrderDetail.findAll({
      attributes: ['order_line_number', 'quantity_ordered', 'price_each'],
      include: [{
        model: models.Product,
        as: 'product',
        attributes: ['product_name']
      }, {
        model: models.Order,
        as: 'order',
        attributes: ['order_number', 'order_date'],
        include: [{
          model: models.Customer,
          as: 'customer',
          attributes: ['customer_name'],
        }],
      }],
      order: [
        ['order', 'order_number', 'ASC'],
        ['order_line_number', 'ASC']
      ]
    });
    return orderDetails;
  }

  async findOrdersInDateRange(startDate, endDate, customerId, customerName) {
    const idWhere = customerId ? { customer_number: customerId } : {};
    const nameWhere = customerName ? { customer_name: customerName } : {};
    const dateWhere = startDate && endDate ? { order_date: { [Op.between]: [startDate, endDate] } } : {};

    const orderDetails = await models.OrderDetail.findAll({
      attributes: ['order_line_number', 'quantity_ordered', 'price_each'],
      include: [{
        model: models.Product,
        as: 'product',
        attributes: ['product_name']
      }, {
        model: models.Order,
        as: 'order',
        attributes: ['order_number', 'order_date'],
        include: [{
          model: models.Customer,
          as: 'customer',
          attributes: ['customer_name', 'customer_number'],
          where: { ...idWhere, ...nameWhere }
        }],
        where: dateWhere
      }],
      order: [
        ['order', 'order_date', 'DESC'],
        ['order_line_number', 'ASC']
      ]
    });
    return orderDetails;
  }
}

module.exports = customersOrdersInDateRangeService;