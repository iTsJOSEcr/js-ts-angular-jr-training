const productos = [
    {
        id: 1,
        nombre: "Mouse",
        precio: 15000,
        stock: 10,
        categoria: "Accesorios"
    },
    {
        id: 2,
        nombre: "Teclado",
        precio: 30000,
        stock: 5,
        categoria: "Accesorios"
    },
    {
        id: 3,
        nombre: "Monitor",
        precio: 120000,
        stock: 2,
        categoria: "Pantallas"
    }
];

const productosConStock = productos.every(function(producto) {
    return producto.stock > 0;
});

console.log("¿Todos tienen stock mayor a 0?", productosConStock);


const costoDeProductos = productos.every(function(producto) {
    return producto.precio > 10000;
});

console.log("¿Todos cuestan más de ₡10 000?", costoDeProductos);


const categoriaDeProductos = productos.every(function(producto) {
    return producto.categoria === "Accesorios";
});

console.log(
    "¿Todos pertenecen a la categoría Accesorios?",
    categoriaDeProductos
);


const letrasDeProductos = productos.every(function(producto) {
    return producto.nombre.length > 3;
});

console.log(
    "¿Todos los nombres tienen más de 3 letras?",
    letrasDeProductos
);

