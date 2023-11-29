const express = require('express');

const customersOrdersInDateRangeService = require('./../services/customer.orders.in.date.range.service');
const schema = require('./../schemas/customers.orders.in.date.schema');
const validatorHandler = require('./../middlewares/validator.handler');

const router = express.Router();
const service = new customersOrdersInDateRangeService();

router.get('/', async (req, res, next) => {
  try {
    const customersOrders = await service.find();
    res.json(customersOrders);
  } catch (error) {
    next(error);
  }
});

router.get('/start/:start/end/:end',
  validatorHandler(schema, 'params'),
  async (req, res, next) => {
    try {
      const { start, end } = req.params;
      const customer = await service.findOrdersInDateRange(start, end);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  });


router.get('/start/:start/end/:end/id/:id?',
  validatorHandler(schema, 'params'),
  async (req, res, next) => {
    try {
      const { start, end, id } = req.params;
      const customer = await service.findOrdersInDateRange(start, end, id);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  });

router.get('/start/:start/end/:end/name/:name?',
  validatorHandler(schema, 'params'),
  async (req, res, next) => {
    try {
      const { start, end, name } = req.params;
      const customer = await service.findOrdersInDateRange(start, end, null, name);
      res.json(customer);
    } catch (error) {
      next(error);
    }
  }
)

module.exports = router;
