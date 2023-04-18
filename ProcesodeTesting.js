// creamos la Clase
class PrdouctManager{
    //metodo constructor
    #id = 0;
    constructor(){
        this.products = [];
        // this.title= title;
        // this.description= description;
        // this.price= price;
        // this.thumbnail= thumbnail;
        // this.code= code;
        // this.stock= stock;

        console.log(this.products);

    }
    // static id = 0 ;

    // creacion de metodos
    getProducts(){
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock)=>{
        // let i = 0
        // id= i++,
        const product = {
        title,
        description,
        price,
        thumbnail,
        code,
        stock,
        }
    console.log('nuevo producto agregado');
    product.id = this.#getID();    
//se agrega el producto
    this.products.push(product)

    
    }

    //incremental del ID
    #getID () {
        const oldID = this.#id;
        this.#id += 1;
        return oldID 
    }
// busquedad del producto por ID 
    getProductByID =(idProduct, idCode)=>{
        const productIndex = this.products.findIndex(
            (product) => product.id === idProduct
        );
        if ( productIndex === -1){
            console.log('no existe el producto');
            return;
        }
        const product = this.products[productIndex];
        if (product.code.includes(idCode)) {
            console.log ('el codigo ya existe');
            return;
        }
        product.code.push(idCode)


    }  

    }


const pm = new PrdouctManager ()
console.log(pm.getProducts());
pm.addProduct ('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
console.log(pm.getProducts());
pm.addProduct ('producto 2', 'este es un segundo producto', 500, 'sin imagen', 'aaa001', 50)
console.log(pm.getProducts());
pm.addProduct ('producto 3', 'este es otro producto mismo codigo', 500, 'sin imagen', 'aaa002', 50)
console.log(pm.getProducts());
pm.getProductByID(2, 'aaa002')

