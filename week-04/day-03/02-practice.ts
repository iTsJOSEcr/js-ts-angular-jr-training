function showEmail (value: unknown): void {
    if (typeof value === "string") {
        console.log(`El correo es ${value}`);
    } else {
        console.log("El valor no es un correo válido");
    }
}

showEmail("jose@example.com");
showEmail(123);





function showAge(value: unknown): void {
    if (typeof value === "number") {
        console.log(`La edad es ${value}`);
    } else {
        console.log("El valor no es una edad válida");
    }
}

showAge(25);
showAge("25");


function showStatus(value: unknown): void {
    if (typeof value === "boolean") {
        if (value) {
            console.log("Estado: Activo");
        } else {
            console.log("Estado: Inactivo");
        }
    } else {
        console.log("Estado no válido");
    }
}

showStatus(true);
showStatus(false);
showStatus("activo");




function showScore(value: unknown): void {
    if (typeof value === "number") {
        console.log(`Su puntaje es de ${value}`);
    } else {
        console.log("El valor no es un puntaje válido");
    }
}

showScore(95);
showScore("95");


function showCountry(value: unknown): void {
    if (typeof value === "string") {
        console.log(`El país es ${value}`);
    } else {
        console.log("El valor no es un país válido");
    }
}


showCountry("Costa Rica");
showCountry(false);


