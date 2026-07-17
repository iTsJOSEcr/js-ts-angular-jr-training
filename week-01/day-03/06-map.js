
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


const soloCategorias = productos.map(function(producto) {
    return producto.categoria;
});

//console.log(soloCategorias);



const nombresyStock = productos.map(function(producto) {
    return producto.nombre + " - " + producto.stock;
});

//console.log(nombresyStock);



const nuevosPrecios = productos.map(function(productos) {
    return {
        ...productos,
        precio: productos.precio * 1.05
    };
});

//console.table(nuevosPrecios);

const productosDescontinuados = productos.map(function(productos) {
    return {
        ...productos,
        nombre: productos.nombre === "Webcam" ? "Descontinuado" : productos.nombre
    };
});

//console.log(productosDescontinuados);


const ocultarStock = productos.map(function(productos) {
    return {
        ...productos,
        stock: undefined
    };
});

console.table(ocultarStock);