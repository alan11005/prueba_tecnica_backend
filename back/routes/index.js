const express = require('express');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');
const orderDetailsRouter = require('./order.details.router');
const customersRouter = require('./customers.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/orders', ordersRouter);
    router.use('/order-details', orderDetailsRouter);
    router.use('/customers', customersRouter);
}

module.exports = routerApi;