const express = require('express');
const routerApi = require('./routes')
//Aqui no debería haber rutas, para seguir el SOLID single responsability principle.
const {logErrors, errorHandler} = require('./middlewares/error.handler') //esto se trae desues del routing
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => { //request y response, esto es una ruta inicial
  res.send('Hello World!');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola soy una nueva ruta');
});

routerApi(app); // OJOOOOOOOOO es lo importante, no funciona sin esto.
/* Instalamos faker en -D  nos permite generar data fake*/
/* Escucha en el puerto */

app.use(logErrors);
app.use(errorHandler); //ojo con el orden en el que se ejecutan.

app.listen(port,()=>{
  console.log(`Mi port es: ' + ${port}`)
});

