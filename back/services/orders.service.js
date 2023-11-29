const { models }= require('../libs/sequelize');

class orderService {

  constructor(){
  }
  async find() {
    const orders = await models.Order.findAll();
    return orders;
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id)
    return order;
  }
}
module.exports = orderService;