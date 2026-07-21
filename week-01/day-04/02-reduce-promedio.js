const notas = [80, 90, 100, 70, 60];

const numeroMenor = notas.reduce(function(acumulador, numero ){
    if (numero< acumulador){
        return numero;
    }
    return acumulador;
        
})

console.log("numero menor:", numeroMenor)



const numeros = [8, 3, 10, 6, 2, 9];

const numerosPares = numeros.reduce(function(acumulador, numero){

    if (numero % 2){

        return acumulador

    }

    return acumulador + 1

}, 0);

console.log("numerospares:", numerosPares)


const notas2 = [80, 90, 100, 70, 60];

const sacarPromedio = notas2.reduce(function(acumulador, numero){
    return acumulador + numero / 5;
},0);


console.log(sacarPromedio)
