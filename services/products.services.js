const faker = require('faker');

class ProductsService {
  constructor(){
    this.products = [];
    this.generate(); // cada vez que genere una isntancia va a empezar y generar los 100 productos iniciales.

  }
  generate(){

    const limit = 100

  for (let index = 0; index < limit; index++) {
    this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(),10), // viene como string y lo quiero como número.
        image: faker.image.imageUrl(),
      })
    }
  };
  create(){

  }
  find(){
return this.products;
  }

  findOne(id){
    return this.products.find(item => item.id === id);
  }
  update(){

  }
  delete(){

  }
}

module.exports = ProductsService;