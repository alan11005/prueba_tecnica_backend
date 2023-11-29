const express = require('express');

const orderDetailService = require('./../services/order.details.service');

const router = express.Router();
const service = new orderDetailService();


router.get('/', async (req, res, next) => {
  try {
    const orderDetails = await service.find();
    res.json(orderDetails);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const orderDetail = await service.findOne(id);
      res.json(orderDetail);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
