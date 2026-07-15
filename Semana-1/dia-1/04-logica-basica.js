function esPositivo(numero){
    return numero > 0;
}



function calcularAreaRectangulo(base, altura){
    return base * altura;
}


function esMultiplo(numero, multiplo){
    return numero % multiplo === 0;
}


function obtenerEstado(nota){
    if(nota >= 90) {
        return "Aprobado con excelencia";
    }
    if(nota >= 70){
        return "Aprobado";
    }
    return "Reprobado";
}    







console.log("El número 10 es positivo? " + esPositivo(10));
console.log("El número -5 es positivo? " + esPositivo(-5));
console.log("El área de un rectángulo con base 5 y altura 10 es: " + calcularAreaRectangulo(5, 10));
console.log("El número 10 es múltiplo de 2? " + esMultiplo(10, 2));
console.log("El número 10 es múltiplo de 3? " + esMultiplo(10, 3));
console.log("El estado de la nota 95 es: " + obtenerEstado(95));
console.log("El estado de la nota 75 es: " + obtenerEstado(75));
console.log("El estado de la nota 65 es: " + obtenerEstado(65));
