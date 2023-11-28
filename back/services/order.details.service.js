const { models }= require('../libs/sequelize');

class orderDetailService {

  constructor(){
  }
  async find() {
    const orderdetails = await models.orderdetails.findAll();
    return orderdetails;
  }

  async findOne(id) {
    const orderdetail = await models.orderdetails.findByPk(id)
    return orderdetail;
  }
}
module.exports = orderDetailService;