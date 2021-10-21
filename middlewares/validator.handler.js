function validatorHandler(schema, property) { //voy a utilizar closures
  return(req,res,next) => {
    const data = req[property];
    const {error} = schema.validate(data);//le mandamos la info que queremos validar, destructiring porque llega error como propiedad
    if(error) {
      res.status(500).send(error); // aca fui lazy con el boom
      next(error);
    }
    next(); //te permito seguir

  } //es algo asi como un creador de middleware, son de forma dinamica, recibe un esquema, le decimos donde encuentra la informacion y por ende va a retornar un middleware de forma dinamica. Usamos closure en javascript
}

module.exports = validatorHandler;