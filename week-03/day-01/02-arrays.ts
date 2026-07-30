const numeros: number[] = [1,2,3,4,5];
numeros.push(6);

const frutas: string[] = ["Manzana", "Banano", "Uva"];
frutas.push("Piña");


const datos: (string | number | boolean)[] = [
    "José",
    22,
    "Costa Rica",
    2026
];
datos.push(true);
datos.push("José");
datos.push(22);

//datos.push("Ingeniería")

//datos.push(97);




//console.log(datos);

//console.log(frutas);

//console.log(numeros);






const persona: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "José",
    edad: 22,
    activo: true
};

//console.log(persona);





const carro: {
    marca: string;
    modelo: string;
    año: number;
} = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2022
};

carro.marca = "Honda";
carro.año = 2025;

//console.log(carro);




const empleado: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "Jose",
    edad: 22,
    activo: true
};

console.log(empleado)


const empleado2: {
    nombre: string;
    edad: number;
    activo: boolean;
} = {
    nombre: "Maria",
    edad: 30,
    activo: false
};

//console.log(empleado2)


type Empleado = {
    nombre: string;
    edad: number;
    activo: boolean;
};

const empleado3: Empleado = {
    nombre: "José",
    edad: 22,
    activo: true
};

const empleado4: Empleado = {
    nombre: "María",
    edad: 30,
    activo: false
};





const empleados: Empleado[] = [
    {
        nombre: "José",
        edad: 22,
        activo: true
    },
    {
        nombre: "María",
        edad: 30,
        activo: false
    }
];

console.log(empleados);

