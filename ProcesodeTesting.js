// Archivo fs
const fs = require('fs')

// creamos la Clase
class PrdouctManager{
    //metodo constructor
    #id = 0;
    constructor(){
        //escribo el archivo si no existe, lo crea
        if (!fs.existsSync('./productosArray.json')){
            fs.writeFileSync('./productosArray.json', JSON.stringify([]))
        }
        
//        this.products = [];
        // this.title= title;
        // this.description= description;
        // this.price= price;
        // this.thumbnail= thumbnail;
        // this.code= code;
        // this.stock= stock;

//        console.log(this.products);

    }
    // static id = 0 ;

    // creacion de metodos
    async getProducts(){
        try {
            const actualProducts =await fs.promises.readFile(
                './productosArray.json',
                'utf-8'
            );
            return JSON.parse(actualProducts);
            } catch (error){
                console.log('no se pueden mostrar los productos');
            }
        //return this.products;
    }

    async addProduct (title, description, price, thumbnail, code, stock){
        // let filtro = this.products.filter((producto) => producto.title === title )
        // if (filtro.length > 0){
        //     console.log("el title ya esta registrado")
        //     return
        // };
        try {
            const product = {
                title,
                description,
                price,
                thumbnail,
                code,
                stock,
                }
                const actualProducts = await this.getProducts();
                actualProducts.push(product)
                //se escribe nuevamente el archivo
                await fs.promises.writeFile(
                    './productosArray.json',
                    JSON.stringify(actualProducts)
                );
        } catch (error){
            console.log('no se puede agregar producto');
        }
        // let i = 0
        // id= i++,
        
    console.log('nuevo producto agregado');
    product.id = this.#getID();    
//se agrega el producto
//    this.products.push(product)

    
    }

    //incremental del ID
    #getID () {
        const oldID = this.#id;
        this.#id += 1;
        return oldID 
    }
// busquedad del producto por ID 
    async getProductByID (idProduct, idCode){
        const productIndex = this.products.findIndex(
            (product) => product.id === idProduct
        );
        try {
            const actualProducts = await this.getProducts();
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
} catch (error) {
    console.log ('no existe el id producto')
}

    }  
// metodo de actualizar el producto (no se debe borrar el id)
    async updateProduct (product, edit) {
        let edited = false;
        let productoE;
        try {
            productoE = await this.getProducts();
            productoE.map((product) => {
                if (product.id === id){
                    product ={ ...product, ...edit};
                    edited = true;
                }
            });
            if (edited){
                console.log ('producto editado')
            } else {
                console.log ('no se encontro el producto')
            }
        } catch (error){
            console.log ('no se puede editar el producto')
        }

    }

// metodo eliminar producto
    async deleteProduct (product, deleteProduct ){
        let deleted = false;
        let productoD;
        try {
            productoD = await this.getProducts();
            productoD.map((product) => {
                if (product.id === id){
                    product ={ ...product, ...deleteProduct};
                    deleted = true;
                }
            });
            if (deleted){
                console.log ('producto eliminado')
            } else {
                console.log ('no se encontro el producto a borrar')
            }

        } catch (error){
            console.log ('no se encontró el producto a borrar')
        }
    } 


    }



    //instancia
const pm = new PrdouctManager ()
//test
const test = async () => {
    try {
        await pm.addProduct(
            'producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25);
        await pm.addProduct('producto 2', 'este es un segundo producto', 500, 'sin imagen', 'aaa001', 50);
        console.log (await pm.getProducts());
        await pm.getProductByID(2, 'aaa002');
        console.log (await pm.getProductByID);
        // se cambia el stock
        await pm.updateProduct('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 50);
        console.log (await pm.updateProduct);
        //borrado de producto
        await pm.addProduct('producto 3borrar', 'este es un segundo producto', 500, 'sin imagen', 'aaa001', 50);
        console.log (await pm.getProducts());
        await pm.deleteProduct('producto 3borrar');
    }catch (error) {console.log ('salio mal el test')}
}
// console.log(pm.getProducts());
// pm.addProduct ('producto prueba', 'este es un producto prueba', 200, 'sin imagen', 'abc123', 25)
// console.log(pm.getProducts());
// pm.addProduct ('producto 2', 'este es un segundo producto', 500, 'sin imagen', 'aaa001', 50)
// console.log(pm.getProducts());
// pm.addProduct ('producto 3', 'este es otro producto mismo codigo', 500, 'sin imagen', 'aaa002', 50)
// console.log(pm.getProducts());
// pm.getProductByID(2, 'aaa002')

