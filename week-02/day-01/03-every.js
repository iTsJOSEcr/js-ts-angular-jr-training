

const edades = [18, 25, 32, 20];

const todosMayores = edades.every(function (edad) {
    return edad >= 18;
});

console.log("Todos son mayores de edad:", todosMayores);



const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 70 },
    { nombre: "Carlos", nota: 90 },
    { nombre: "María", nota: 75 }
];

const todosAprobaron = estudiantes.every(function (estudiante) {
    return estudiante.nota >= 70;
});

console.log("Todos aprobaron:", todosAprobaron);


// Ejercicio 3: verificar si todos los productos tienen stock

const productos = [
    { nombre: "Mouse", stock: 10 },
    { nombre: "Teclado", stock: 5 },
    { nombre: "Monitor", stock: 3 }
];

const todosTienenStock = productos.every(function (producto) {
    return producto.stock > 0;
});

console.log("Todos tienen stock:", todosTienenStock);



const usuarios = [
    { nombre: "José", activo: true },
    { nombre: "Ana", activo: true },
    { nombre: "Luis", activo: false }
];

const todosActivos = usuarios.every(function (usuario) {
    return usuario.activo === true;
});

console.log("Todos están activos:", todosActivos);