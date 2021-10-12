const express = require('express');
const faker = require('faker');
const app = express();
const port = 3000;

app.get('/', (req, res) => { //reques y response, esto es una ruta inicial
  res.send('Hello World! mi server en express');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) =>{ //retorna un array de productos
  //despues instalamos faker y creamos nuevos productos.
  const products =[];
  for (let index = 0; index < 100; index++) {
    products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10), // viene como string y lo quiero como número.
        image: faker.image.imageUrl(),
      })
    }
    res.json(products);
  });





app.get('/products/:id', (req, res) =>{
  // const id = req.params.id;
  const {id} = req.params;
  res.json({
    id,
    name: 'Product2',
    price: 2000

})
});

app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
});

/* Query params */

app.get('/users', (req, res)=>{
  const {limit, offset} = req.query;
  if (limit&&offset){
    res.json({
      limit: limit,
      offset: offset
    });
  } else {
    res.send('No hay parametros')
  }
});
/* Instalamos faker en -D  nos permite generar data fake*/
/* Escucha en el puerto */
app.listen(port,()=>{
  console.log(`Mi port es: ' + ${port}`)
});
