const express = require('express');
const productsRouter = require('./products.router');
const ordersRouter = require('./orders.router');
const orderDetailsRouter = require('./order.details.router');
const customersRouter = require('./customers.router');
const customersOrdersInDateRangeRouter = require('./customers.orders.in.date.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/orders', ordersRouter);
    router.use('/order-details', orderDetailsRouter);
    router.use('/customers', customersRouter);
    router.use('/customers-orders-in-date-range', customersOrdersInDateRangeRouter);
}

module.exports = routerApi;