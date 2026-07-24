
const numeros = [5, 8, 2, 10, 3, 6];

const resultadoNumeros = numeros
    .filter(function (numero) {
        return numero % 2 === 0;
    })
    .map(function (numero) {
        return numero * 2;
    })
    .sort(function (a, b) {
        return b - a;
    });

console.log("Resultado números:", resultadoNumeros);


const productos = [
    { nombre: "Mouse", stock: 10 },
    { nombre: "Teclado", stock: 0 },
    { nombre: "Monitor", stock: 5 },
    { nombre: "Audífonos", stock: 3 }
];

const productosDisponibles = productos
    .filter(function (producto) {
        return producto.stock > 0;
    })
    .map(function (producto) {
        return producto.nombre;
    })
    .sort(function (a, b) {
        return a.localeCompare(b);
    });

console.log("Productos disponibles:", productosDisponibles);



const estudiantes = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 60 },
    { nombre: "Carlos", nota: 95 },
    { nombre: "María", nota: 75 }
];

const estudiantesAprobados = estudiantes
    .filter(function (estudiante) {
        return estudiante.nota >= 70;
    })
    .sort(function (a, b) {
        return b.nota - a.nota;
    })
    .map(function (estudiante) {
        return estudiante.nombre;
    });

console.log("Estudiantes aprobados:", estudiantesAprobados);



const empleados = [
    { nombre: "Ana", salario: 650000 },
    { nombre: "Luis", salario: 800000 },
    { nombre: "Carlos", salario: 1200000 },
    { nombre: "María", salario: 750000 }
];

const empleadosActualizados = empleados
    .filter(function (empleado) {
        return empleado.salario > 700000;
    })
    .map(function (empleado) {
        return {
            nombre: empleado.nombre,
            salario: empleado.salario * 1.10
        };
    })
    .sort(function (a, b) {
        return a.salario - b.salario;
    });

console.log("Empleados actualizados:", empleadosActualizados);