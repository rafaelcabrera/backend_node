//ESTO SE HACE DESPUES DE DEFINIR EL ROUTING , ES MUY IMPORTANTE, O SINO NO ANDA.
function logErrors (err,req,res,next) {
  console.log('logErrors') //para ver cual se ejecuta primero en la consola
console.error(err);
next(err); //lo estamos ejecutando como un middleware de tipo error, o sino sería normal.
}

function errorHandler (err,req,res,next) {
  console.log('errorHandler') //para ver cual se ejecuta primero en la consola
  res.status(500).json({
    message:err.message,
    stack: err.stack,
  })
}


module.exports = {logErrors, errorHandler};