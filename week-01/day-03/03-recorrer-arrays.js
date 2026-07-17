const productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 15000,
        stock: 10
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 30000,
        stock: 5
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 120000,
        stock: 2
    }
];



function mostrarProductos(productos) {
    for (let i = 0; i < productos.length; i++) {
        console.log("producto", productos[i].nombre, 
            "precio", productos[i].precio,
             "stock", productos[i].stock
            
        )  
    }
}

//mostrarProductos(productos);


function mostrarPrecios(productos){
    for (let i = 0; i < productos.length; i++){
        console.log("precio", productos[i].precio);
    }
}


//mostrarPrecios(productos);


function buscarProducto(productos, nombreBuscado) {
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].nombre === nombreBuscado) {
            return productos[i];
        }
    }
    return "Producto no encontrado";

}

const resultado = buscarProducto(productos, "Laptop");

console.log(resultado);

