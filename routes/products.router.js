const express = require('express');
const faker = require('faker');

const router = express.Router(); //la creo porque no tengo acceso, como app.get


router.get('/', (req, res) =>{ //retorna un array de productos
  //despues instalamos faker y creamos nuevos productos.
  const products =[];
  const {size} = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10), // viene como string y lo quiero como número.
        image: faker.image.imageUrl(),
      })
    }
    res.json(products);
  });


router.get('/filter', (req, res)=>{
  res.send('soy un filter')
});

router.get('/:id', (req, res) =>{
  // const id = req.params.id;
  const {id} = req.params;
  res.json({
    id,
    name: 'Product2',
    price: 2000

})
});


module.exports = router; //exporto las rutas.
