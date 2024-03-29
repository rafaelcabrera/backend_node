const faker = require('faker');

class ProductsService {
  constructor(){
    this.products = [];
    this.generate(); // cada vez que genere una isntancia va a empezar y generar los 100 productos iniciales.

  }
  async generate(){

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
  async create(data){
    const newProduct = {
      id : faker.datatype.uuid(),
      ...data //spread operation para unir lo que le paso en data
    }
    this.products.push(newProduct);
    return this.products;
  }

  async find(){ //acá simulamos una asincronía con una promesa
// return this.products;
return new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(this.products);
  },5000); //se ve en el insomnia como claramente espera 5 segundos para devolver los 100 productos
})
}

  async findOne(id){
    const name = this.getTotal(); // getTotal no existe pero forzamos el error para probar los middleware,
    //de acá tengo que ir al routing para modificar el asincronismo también
    return this.products.find(item => item.id === id);
  }
  async update(id, changes){ //necesito saber la posición donde está
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1){
      throw new Error("Product not found")
    }
      const product = this.products[index]
      this.products[index] = {
        ...product,
        ...changes //con spread opeator concateno
      }
      return this.products[index];
    }

    async delete(id){
    const index = this.products.findIndex(item => item.id === id);

    if (index === -1){
      throw new Error("Product not found");
    }else{

      this.products.splice(index, 1); //esto elimina
      return {id};
    }

  }
}

module.exports = ProductsService;