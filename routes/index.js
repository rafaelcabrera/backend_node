const express = require('express');
const productsRouter = require('./products.router'); // traigo todas las rutas que tra productor

const usersRouter = require('./users.router');

const categoriesRouter = require('./categories.router')


function routerApi(app){
    const router = express.Router();
    app.use('/api/v1',router);
  router.use('/products',productsRouter);
  router.use('/users',usersRouter);
  router.use('/categories',categoriesRouter); // cambie a todos por router, en vez de apps

}



module.exports = routerApi;