const numeros = [10, 20, 30, 40, 50];

const total = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
}, 0);

console.log("Suma:", total);



const numeros2 = [2, 3, 4];

const multiplicacion = numeros2.reduce(function(acumulador, numero) {
    return acumulador * numero;
}, 1);

console.log("Multiplicación:", multiplicacion);



const numeros3 = [15, 90, 22, 11, 45];

const numeroMayor = numeros3.reduce(function(acumulador, numero) {

    if (numero > acumulador) {
        return numero;
    }

    return acumulador;

}, numeros3[0]);

console.log("Número mayor:", numeroMayor);



