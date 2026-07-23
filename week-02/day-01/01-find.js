const usuarios = [
    { id: 1, nombre: "Ana", edad: 20 },
    { id: 2, nombre: "Luis", edad: 18 },
    { id: 3, nombre: "Carlos", edad: 25 },
    { id: 4, nombre: "María", edad: 22 }
];


const usuario = usuarios.find(function (usuario){
    return usuario.nombre === "María";
});

console.log(usuario);


const usuarioId = usuarios.find(function(usuario){
    return usuario.id === 2;
});

console.log(usuarioId.nombre)




const productos = [
    { id: 1, nombre: "Mouse", precio: 15000 },
    { id: 2, nombre: "Teclado", precio: 28000 },
    { id: 3, nombre: "Monitor", precio: 180000 },
    { id: 4, nombre: "Audífonos", precio: 35000 }
];


const productoId = productos.find(function(producto){
    return producto.id === 3;
});

console.log(productoId.precio)



const numeros = [5, 10, 15, 20];

const numero = numeros.find(function (n) {
    return n > 12;
});

console.log(numero);



const empleados = [
    { id: 1, nombre: "José", activo: false },
    { id: 2, nombre: "María", activo: false },
    { id: 3, nombre: "Carlos", activo: true },
    { id: 4, nombre: "Ana", activo: true }
];


