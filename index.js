const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => { //reques y response, esto es una ruta inicial
  res.send('Hello World! mi server en express');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola soy una nueva ruta');
});

app.get('/products', (req, res) =>{
  res.json({
    name: 'Product',
    price: 1000
  });
});

app.listen(port,()=>{
  console.log(`Mi port es: ' + ${port}`)
});
