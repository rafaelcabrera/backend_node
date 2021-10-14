const express = require('express');
const ProductsService = require ('../services/products.services.js');
// const faker = require('faker'); ya no necesito faker porque lo uso en servicios

const router = express.Router(); //la creo porque no tengo acceso, como app.get
const service = new ProductsService(); //creo una instancia.

router.get('/', (req, res) =>{ //retorna un array de productos
  //despues instalamos faker y creamos nuevos productos.
  const products = service.find();
  res.json(products);
  // const {size} = req.query;
  });


router.get('/filter', (req, res)=>{
  res.send('soy un filter')
});

router.get('/:id', (req, res) =>{
  // const id = req.params.id;
  const {id} = req.params;
  const product = service.findOne(id);
  res.json(product);
});

router.post('/', (req, res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
});


router.patch('/id', (req, res)=>{ //funciona igual que put pero de forma parcial
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'update',
    data : body,
    id,
  });
});


router.delete('/:id', (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  res.json({
    message: 'deleted',
   id,
  });
});

module.exports = router; //exporto las rutas.
