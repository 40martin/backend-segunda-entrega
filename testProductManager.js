import ProductManager from "./ProductManager.js";


const PM = new ProductManager();
console.log(PM.getProducts());


PM.addProduct({title:"Air Jordan XXXVII", description:"Zapatillas Jordan para Hombre", price:109999,
thumbnail:"https://nikearprod.vtexassets.com/arquivos/ids/546907-800-800?v=638162241456500000&width=800&height=800&aspect=true",
code:"Calzado", stock:10});
console.log(PM.getProducts());

PM.addProduct({title:"Air Jordan XXXVII 1", description:"Zapatillas Jordan para Hombre", price:110999,
thumbnail:"https://nikearprod.vtexassets.com/arquivos/ids/546907-800-800?v=638162241456500000&width=800&height=800&aspect=true",
code:"Calzado", stock:5});

PM.addProduct({title:"Air Jordan XXXVII 2", description:"Zapatillas Jordan para Hombre", price:50000,
thumbnail:"https://nikearprod.vtexassets.com/arquivos/ids/546907-800-800?v=638162241456500000&width=800&height=800&aspect=true",
code:"Calzado 9", stock:3});
console.log(PM.getProducts());
console.log(PM.getProductById(2));
console.log(PM.getProductById(3)); 