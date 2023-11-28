const express = require('express');

const ProductService = require('./../services/products.service');

const router = express.Router();
const service = new ProductService();


router.get('/', async (req, res, next) => {
  try {
    const product = await service.find();
    res.json(product);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
