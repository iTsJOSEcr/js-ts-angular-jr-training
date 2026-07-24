
const numeros = [40, 10, 100, 25, 5];

const numerosAscendentes = [...numeros].sort(function (a, b) {
    return a - b;
});

console.log("Números ascendentes:", numerosAscendentes);



const numerosDescendentes = [...numeros].sort(function (a, b) {
    return b - a;
});

console.log("Números descendentes:", numerosDescendentes);


const nombres = ["Carlos", "Ana", "José", "María"];

const nombresOrdenados = [...nombres].sort(function (a, b) {
    return a.localeCompare(b);
});

console.log("Nombres ordenados:", nombresOrdenados);


const productos = [
    { nombre: "Mouse", precio: 15000 },
    { nombre: "Monitor", precio: 120000 },
    { nombre: "Teclado", precio: 35000 },
    { nombre: "Audífonos", precio: 25000 }
];

const productosPorPrecio = [...productos].sort(function (a, b) {
    return a.precio - b.precio;
});

console.log("Productos por precio:", productosPorPrecio);



const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 70 },
    { nombre: "Carlos", nota: 95 },
    { nombre: "María", nota: 80 }
];

const estudiantesPorNota = [...estudiantes].sort(function (a, b) {
    return b.nota - a.nota;
});

console.log("Estudiantes por nota:", estudiantesPorNota);