const fs = require("fs");


class ProductManager {
    constructor() {
        this.products = [];
        this.path = "products.json"
        this.createFile();
    }

    createFile() {
        if (!fs.existsSync(this.path)) {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
        }
    }  

    addProduct(product) {
        if (this.validateCode(product.code)) {
            throw new Error('Product code already exists');
        } else {
            const producto = {id:this.generateId(), code:product.code, name:product.name, price:product.price, 
            description:product.description, stock:product.stock};
            this.products = this.getProducts();
            this.products.push(producto);
            this.saveProducts();
            console.log("Product added successfully");
        }
    }

    updateProduct(id, product) {
        this.products = this.getProducts();
        let pos = this.products.findIndex(item => item.id === id);

        if (pos > -1) {
            this.products[pos].title = product.title;
            this.products[pos].description = product.description;
            this.products[pos].price = product.price;
            this.products[pos].thumbnail = product.thumbnail;
            this.products[pos].code = product.code;
            this.products[pos].stock = product.stock;
            this.saveProducts();
            console.log("Product #" + id + " updated successfully")
        } else {
            console.log("Product #" + id + " not found");
        }
    }

    deleteProduct(id) {
        this.products = this.getProducts();
        let pos = this.products.findIndex(item => item.id === id);

        if (pos > -1) {
            this.products.splice(pos, 1); (0, 1)
            this.saveProducts();
            console.log("Product #" + id + " deleted successfully");
        } else {
            console.log("Product #" + id + " not found");
        }
    }
    

    getProducts() {
        let products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        
        return products;
    }

    getProductById(id) {
        this.products = JSON.parse(fs.readFileSync(this.path, "utf-8"));
        return this.products.find(item => item.id === id) || null;
    }

    validateCode(code) {
        return this.products.some(item => item.code === code);    
    }

    generateId() {
        let max = 0;

        this.products.forEach(item => {
            if (item.id > max) {
                max = item.id;
            }
        });

        return (max+1);
        return this.products.length + 1;
    }

    saveProducts() {
        fs.writeFileSync(this.path, JSON.stringify(this.products));
    }
}

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

