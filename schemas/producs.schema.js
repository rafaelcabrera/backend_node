const Joi = require('Joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15); //esquema para cada campo
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  name: name.required,
  price: price.required,
})

const updateProductSchema = Joi.object({
  name: name,
  price: price,
})

const getProductSchema = Joi.object({
  id: id.required,
  price: price.required,

})

module.exports = {createProductSchema, updateProductSchema, getProductSchema} // despues de acá me voy a carpeta middleware y creo el archivo validator.handler