const { models }= require('../libs/sequelize');

class productService {

  constructor(){
  }
  async find() {
    const products = await models.products.findAll();
    return products;
  }

  async findOne(id) {
    const product = await models.products.findByPk(id)
    return product;
  }
}
module.exports = productService;