const personas = [
    { nombre: "Ana", edad: 20 },
    { nombre: "Luis", edad: 18 },
    { nombre: "Pedro", edad: 20 },
    { nombre: "María", edad: 25 },
    { nombre: "Carlos", edad: 18 },
    { nombre: "Sofía", edad: 25 }
];


const edades = personas.reduce(function (acumulador, persona) {

    if (!acumulador[persona.edad]) {
        acumulador[persona.edad] = 0;
    }

    acumulador[persona.edad]++;

    return acumulador;

}, {});

console.log(edades);


const palabras = [
    "hola",
    "chat",
    "hola",
    "javascript",
    "chat",
    "hola"
];

const cuantasPalabras = palabras.reduce(function(acumulador, palabra){
    if (!acumulador[palabra]){
        acumulador [palabra] = 0;
    }
    acumulador [palabra]++;
    return acumulador;
}, {})


console.log(cuantasPalabras)



const ventas = [
    { vendedor: "José", monto: 5000 },
    { vendedor: "Ana", monto: 3000 },
    { vendedor: "José", monto: 7000 },
    { vendedor: "Luis", monto: 2000 },
    { vendedor: "Ana", monto: 4000 }
];


const totalPorPersona = ventas.reduce(function(acumulador, venta){
    if(!acumulador [venta.vendedor]){
        acumulador [venta.vendedor] = 0;
    }
    acumulador [venta.vendedor] += venta.monto;
    return acumulador 
},{})

console.log(totalPorPersona)