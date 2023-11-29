const { models }= require('../libs/sequelize');

class productService {

  constructor(){
  }
  async find() {
    const products = await models.Product.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)
    return product;
  }
}
module.exports = productService;