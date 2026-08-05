function showUsername(username: string | number): void {
    if (typeof username === "string") {
        console.log(`Usuario: ${username.toUpperCase()}`);
    } else {
        console.log(`ID: ${username}`);
    }
}

showUsername("jose");
showUsername(15);



function formatPrice(price: string | number): string {
    if (typeof price === "string") {
        return price;
    }

    return price.toFixed(2);
}

console.log(formatPrice("1500"));
console.log(formatPrice(1500));



function getCodeLength(code: string | number): number {
    if (typeof code === "string") {
        return code.length;
    }

    return code.toString().length;
}

console.log(getCodeLength("ABC123"));
console.log(getCodeLength(987654));



function showResult(result: string | number): void {
    if (typeof result === "string") {
        console.log(result.toLowerCase());
    } else {
        console.log(result.toFixed(1));
    }
}

showResult("APROBADO");
showResult(95);



function createMessage(message: string | number): string {
    if (typeof message === "string") {
        return `Mensaje: ${message}`;
    }

    return `Número: ${message}`;
}

console.log(createMessage("Bienvenido"));
console.log(createMessage(404));



function duplicateCode(code: string | number): string {
    if (typeof code === "string") {
        return code + code;
    }

    return (code * 2).toString();
}

console.log(duplicateCode("TS"));
console.log(duplicateCode(250));

