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


const hayStock = productos.some(function(producto) {
    return producto.stock > 5;
});


console.log(hayStock);


const costodeProducto = productos.some(function(producto) {
    return producto.precio === 30000;
});

console.log(costodeProducto);



const nombreDeProducto = productos.some(function(producto) {
    return producto.nombre === "Laptop";
});

console.log(nombreDeProducto);


