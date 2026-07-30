//function sumar(a, b) {
//    return a + b;
//}

function sumar(a:number, b:number){
    return a + b;
}

console.log(sumar(30, 50))



//function esMayor(edad) {
  //  return edad >= 18;
//}

function esMayor(edad:number): boolean {
    return edad >= 18;
}

console.log(esMayor(19))



//function obtenerNombreCompleto(nombre, apellido) {
  //  return nombre + " " + apellido;
//}


function obtenerNombreCompleto(nombre:string, apellido:string): string {
    return nombre + " " + apellido;
}

console.log(obtenerNombreCompleto("Jose", "Daniel"));


//function calcularDescuento(precio, porcentaje) {
  //  return precio - precio * porcentaje / 100;
//}


function calcularDescuento(precio:number, porcentaje:number):number {
    return precio - precio * porcentaje / 100;
}

console.log(calcularDescuento(50000, 10));




//function mostrarMensaje(mensaje) {
  //  console.log(mensaje);
//}


function mostrarMensaje(mensaje:string):void {
    console.log(mensaje);
}

mostrarMensaje("Hola TypeScript");




//function obtenerPrimerNumero(numeros) {
//    return numeros[0];
//}


function obtenerPrimerNumero(numeros: number[]): number | undefined {
  return numeros[0];
}

console.log(obtenerPrimerNumero([10, 20, 30]));




//function contarElementos(elementos) {
 //   return elementos.length;
//}


function contarElementos(elementos:string[]):number{
    return elementos.length;
}

console.log(contarElementos(["JavaScript", "TypeScript", "Angular"]));



//function obtenerEdad(persona) {
//    return persona.edad;
//}


function obtenerEdad(
    persona: { nombre: string; edad: number }
): number {
    return persona.edad;
}

console.log(obtenerEdad({
    nombre: "Jose",
    edad: 22
}));




//function obtenerPrimerProducto(productos) {
//    return productos[0];
//}

function obtenerPrimerProducto(
    productos: { nombre: string; precio: number }[]
): { nombre: string; precio: number } | undefined {
    return productos[0];
}

console.log(
    obtenerPrimerProducto([
        { nombre: "Teclado", precio: 25000 },
        { nombre: "Mouse", precio: 15000 }
    ])
);



//function esProductoCaro(producto) {
//    return producto.precio > 20000;
//}


function esProductoCaro(
    producto: { nombre: string; precio: number }
): boolean {
    return producto.precio > 20000;
}

console.log(
    esProductoCaro({
        nombre: "Monitor",
        precio: 35000
    })
);

console.log(
    esProductoCaro({
        nombre: "Mouse",
        precio: 12000
    })
);



