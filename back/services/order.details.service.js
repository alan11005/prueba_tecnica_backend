const { models }= require('../libs/sequelize');

class orderDetailService {

  constructor(){
  }
  async find() {
    const orderdetails = await models.OrderDetail.findAll();
    return orderdetails;
  }

  async findOne(id) {
    const orderdetail = await models.OrderDetail.findAll({
      where: {
        order_number: id
      }
    })
    return orderdetail;
  }
}
module.exports = orderDetailService;