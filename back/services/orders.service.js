const { models }= require('../libs/sequelize');

class orderService {

  constructor(){
  }
  async find() {
    const orders = await models.orders.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.orders.findByPk(id)
    return order;
  }
}
module.exports = orderService;