const estudiantes = [
    {nombre: "Ana", aprobado: true},
    {nombre: "Luis", aprobado: false},
    {nombre:"carlos", aprobado: true},
    {nombre:"Maria", aprobado: true}
];


const hayReprobados = estudiantes.some(function(estudiante){
    return estudiante.aprobado === false;
});

console.log(hayReprobados);



const edades = [12, 15, 18, 21, 30];

const mayorDeEdad = edades.some(function(edad){
    return edad < 17; 
});

console.log(mayorDeEdad)



const productos = [
    { nombre: "Mouse", stock: 10 },
    { nombre: "Teclado", stock: 0 },
    { nombre: "Monitor", stock: 5 }
];

const haySinStock = productos.some(function(producto){
    return producto.stock === 0;
});


console.log(haySinStock)



const palabras = [
    "Casa",
    "Perro",
    "JavaScript",
    "Sol"
];

const hayPalabraLarga = palabras.some(function(palabra){
    return palabra.length > 8; 
});


console.log(hayPalabraLarga)



const usuarios = [
    { nombre: "José", admin: false },
    { nombre: "María", admin: false },
    { nombre: "Carlos", admin: true },
    { nombre: "Ana", admin: false }
];

const existeAdmin = usuarios.some(function(usuario){
    return usuario.admin === true;

});


console.log(existeAdmin)




const pedidos = [
    { id: 1, total: 15000, pagado: true },
    { id: 2, total: 32000, pagado: false },
    { id: 3, total: 8000, pagado: true }
];

const hayPedidoPendientes = pedidos.some(function(pedido){
    return pedido.pagado === false & pedido.total > 30000;
})

console.log(hayPedidoPendientes)




