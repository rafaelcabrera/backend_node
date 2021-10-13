const productsRouter = require('./products.router'); // traigo todas las rutas que tra productor

const usersRouter = require('./users.router');

function routerApi(app){
  app.use('/products',productsRouter);
  app.use('/users',usersRouter);
  // app.use('categories',categoriesRouter);

}



module.exports = routerApi;