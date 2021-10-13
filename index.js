const express = require('express');
const routerApi = require('./routes')
//Aqui no debería haber rutas, para seguir el SOLID single responsability principle.

const app = express();
const port = 3000;


routerApi(app);

app.get('/', (req, res) => { //reques y response, esto es una ruta inicial
  res.send('Hello World! mi server en express');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola soy una nueva ruta');
});



/* Que cumpla una funcionalidad especifica */



/* Query params */



app.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
});

/* Instalamos faker en -D  nos permite generar data fake*/
/* Escucha en el puerto */
app.listen(port,()=>{
  console.log(`Mi port es: ' + ${port}`)
});

