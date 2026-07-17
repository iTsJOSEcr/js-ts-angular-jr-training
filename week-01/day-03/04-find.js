const productos = [
    {
        id: 1,
        nombre: "Mouse",
        categoria: "Accesorios",
        precio: 15000,
        stock: 10
    },
    {
        id: 2,
        nombre: "Teclado",
        categoria: "Accesorios",
        precio: 30000,
        stock: 5
    },
    {
        id: 3,
        nombre: "Monitor",
        categoria: "Pantallas",
        precio: 120000,
        stock: 2
    },
    {
        id: 4,
        nombre: "Webcam",
        categoria: "Accesorios",
        precio: 45000,
        stock: 8
    }
];

// ==============================
// FIND
// ==============================

function buscarProducto(productos, nombreBuscado) {
    const productoEncontrado = productos.find(function (producto) {
        return producto.nombre === nombreBuscado;
    });

    return productoEncontrado || "Producto no encontrado";
}

console.log(buscarProducto(productos, "Monitor"));
console.log(buscarProducto(productos, "Laptop"));

// ==============================
// FILTER
// ==============================

// Todos los accesorios
const accesorios = productos.filter(function (producto) {
    return producto.categoria === "Accesorios";
});

console.log("Accesorios:");
console.log(accesorios);

// Productos con precio mayor a 20000
const productosCaros = productos.filter(function (producto) {
    return producto.precio > 20000;
});

console.log("Productos mayores a 20000:");
console.log(productosCaros);

// Función reutilizable
function obtenerProductosCaros(productos) {
    return productos.filter(function (producto) {
        return producto.precio > 30000;
    });
}

console.log("Productos mayores a 30000:");
console.log(obtenerProductosCaros(productos));