const express = require('express');

const router = express.Router();

router.get('/users', (req, res)=>{
  const {limit, offset} = req.query; //averiguar que es limit y offset
  if (limit&&offset){
    res.json({
      limit: limit,
      offset: offset
    });
  } else {
    res.send('No hay parametros')
  }
});


module.exports = router;