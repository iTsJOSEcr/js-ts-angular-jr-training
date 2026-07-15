function calcularTotal(precio, cantidad) {
    return precio * cantidad;
}

function calcularDescuento(total, porcentajeDescuento) {
    return total - (total * (porcentajeDescuento / 100));
}

function esMayorDeEdad(edad){
    return edad >=18;
}            


console.log("Total: " + calcularTotal(10, 5));
console.log("Descuento: " + calcularDescuento(100, 10));
console.log("Es mayor de edad: " + esMayorDeEdad(20));


