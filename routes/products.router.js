const express = require('express');
const ProductsService = require ('../services/products.services.js');
// const faker = require('faker'); ya no necesito faker porque lo uso en servicios
const validatorHandler = require('./../middlewares/validator.handler')
const {createProductSchema, updateProductSchema, getProductSchema} = require('../schemas/producs.schema')



const router = express.Router(); //la creo porque no tengo acceso, como app.get
const service = new ProductsService(); //creo una instancia.

router.get('/', async (req, res) =>{ //retorna un array de productos
  //despues instalamos faker y creamos nuevos productos.
  const products = await service.find(); //aca espera los 5 segundos porque está siendo tratado de forma asíncrona
  res.json(products);
  // const {size} = req.query;
  });


router.get('/filter', async (req, res)=>{
  res.send('soy un filter')
});

router.get('/:id',
validatorHandler(getProductSchema, 'params'), //el creador del middleware, pero tenemos que definir
async (req, res, next) =>{ //le agrego el next del middleware, y agrego try catch
  // const id = req.params.id;
  try{
    const {id} = req.params;
    const product = await service.findOne(id);
    res.json(product);
  }
  catch(error){
next(error); //acá lo hacemos de forma explícita.
  }

});

router.post('/', async (req, res)=>{
  const body = req.body;
  const newProduct = await service.create(body); //este es el paso, luego de crear el servicio, le paso al body, lo que alla es data.
  res.status(201).json({
    message: 'created',
    data: body
  })
});


router.patch('/:id', async (req, res)=>{ //funciona igual que put pero de forma parcial
  try{
    const {id} = req.params;
    const body = req.body;
    const product = await service.update(id,body); //lamo al servicio, es el paso siguiente a crear el servicio.
    res.json(product);
  }
  catch(error){
res.status(404).json({
  message: error.message,
});
  }

});


router.delete('/:id', async (req, res)=>{
  const {id} = req.params;
  const body = req.body;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router; //exporto las rutas.
