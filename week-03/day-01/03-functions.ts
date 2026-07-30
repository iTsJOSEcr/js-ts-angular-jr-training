function sumar(a: number, b: number) {
    return a + b;
}

console.log(sumar(5, 10));


//function saludar(nombre:string){
 //   console.log("Hola" + nombre);
//}

//saludar("Jose");


function multiplicar(a:number, b:number){
    return a * b
}

console.log(multiplicar(10,50))



function restar(a: number, b: number): number {
    return a - b;
}

console.log(restar(20, 5));



function mostrarEdad(edad:number): void {
    console.log("Edad:",edad);
}

mostrarEdad(22)



function saludar(nombre: string, apellido?: string) {
    if (apellido) {
        console.log(`Hola ${nombre} ${apellido}`);
    } else {
        console.log(`Hola ${nombre}`);
    }
}

saludar("José");
saludar("José", "Daniel");



function saludarr(nombre: string, pais: string = "Costa Rica") {
    console.log(`${nombre} es de ${pais}`);
}

saludarr("José");

saludarr("José", "México");


function presentarse(nombre:string, edad:number, pais?:string){
    if (pais){console.log(`${nombre} tiene ${edad} años y es de ${pais}`);
}
else{
    console.log(`${nombre} tiene ${edad} años`);
}
};


presentarse("jose", 22, "Costa Rica");
presentarse("Jose", 24);


