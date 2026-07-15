function esPar(numero){
    return numero % 2 === 0;
}

function obtenerMayor(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }
    return numero2;
}


function puedeVotar(edad){
    if(edad >= 18){
        return true;
    }    return false;
}


function calcularEnvio(valorCompra){
    if(valorCompra >= 50000){
        return "Envío gratis";
    }
    return "Costo de envío: 3500";
}



console.log("El número 10 es par? " + esPar(10));
console.log("El número 11 es par? " + esPar(11));
console.log("El mayor entre 10 y 20 es: " + obtenerMayor(10, 20));
console.log("¿Puede votar? " + puedeVotar(20));
console.log("Costo de envío: " + calcularEnvio(60000));

