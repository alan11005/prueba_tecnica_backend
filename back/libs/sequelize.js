const { Sequelize } = require('sequelize');

const { config } = require('./../config/config');
const initModels = require('./../models/init-models');

const options = {
  dialect: 'postgres'
}

const sequelize = new Sequelize(config.dbUrl, options);

initModels(sequelize);

module.exports = sequelize;
