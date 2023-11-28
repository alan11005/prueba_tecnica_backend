const { models }= require('../libs/sequelize');

class customerService {

  constructor(){
  }
  async find() {
    const customers = await models.customers.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.customers.findByPk(id)
    return customer;
  }
}
module.exports = customerService;