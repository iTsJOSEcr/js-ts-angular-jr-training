const carrito = [
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Teclado", precio: 25000 },
    { nombre: "Monitor", precio: 120000 },
    { nombre: "Audífonos", precio: 30000 }
];

const totalCarrito = carrito.reduce(function(acumulador, producto){
    return acumulador + producto.precio;
},0);

console.log("totalcarrito:", totalCarrito)




const productoMasCaro = carrito.reduce(function(acumulador, producto){
    if (producto.precio > acumulador.precio)
        return producto
    {

        return acumulador;
        }  
},);

console.log("producto mas caro:",productoMasCaro)



const productoMasBarato = carrito.reduce(function(acumulador, producto){
    if (producto.precio < acumulador.precio)
        return producto
    {

        return acumulador;
        }  
},);


console.log("producto mas barato:", productoMasBarato)


const productosMasCaros = carrito.reduce(function(acumulador, producto){
    if (producto.precio > 20000){
        return acumulador + 1;
    }
    return acumulador;
},0);

console.log("los Productos mas caros:",productosMasCaros)



const productos = carrito.reduce(function(acumulador, producto){
    return acumulador.nombre
});

console.log(productos)




const productos = [
    { nombre: "Mouse", categoria: "Tecnología", precio: 15000 },
    { nombre: "Teclado", categoria: "Tecnología", precio: 25000 },
    { nombre: "Silla", categoria: "Hogar", precio: 60000 },
    { nombre: "Mesa", categoria: "Hogar", precio: 80000 },
    { nombre: "Audífonos", categoria: "Tecnología", precio: 30000 }
];


const categorias = productos.reduce(function (acumulador, producto) {

    if (!acumulador[producto.categoria]) {
        acumulador[producto.categoria] = 0;
    }

    acumulador[producto.categoria]++;

    return acumulador;

}, {});

console.log(categorias);