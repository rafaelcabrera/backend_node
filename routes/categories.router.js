const express = require('express'); //paso 1 importo express

const router = express.Router(); //paso 2 creo el router

router.get('/categories/:categoryId/products/:productId', (req, res)=>{
  const {categoryId, productId} = req.params;
  res.json({
    categoryId,
    productId,
  })
});

module.exports = router;