const productos = [
    { id: 1, nombre: "Mouse", precio: 15000, stock: 10 },
    { id: 2, nombre: "Teclado", precio: 30000, stock: 5 },
    { id: 3, nombre: "Monitor", precio: 120000, stock: 2 }
];


productos.find(function (producto) {
    return producto.nombre === "Laptop";
}
);


function buscarProducto(productos, nombreBuscado) {
    const productoEncontrado = productos.find(function(producto) {
        return producto.nombre === nombreBuscado;
    });

    return productoEncontrado || "Producto no encontrado";
}

buscarProducto(productos, "Laptop");
console.log(resultado);
