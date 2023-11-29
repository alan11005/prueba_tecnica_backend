const { models }= require('../libs/sequelize');

class customerService {

  constructor(){
  }
  async find() {
    const customers = await models.Customer.findAll();
    return customers;
  }

  async findOne(id) {
    const customer = await models.Customer.findByPk(id)
    return customer;
  }
}
module.exports = customerService;