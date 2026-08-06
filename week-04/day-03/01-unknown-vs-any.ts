let valueAny: any;

valueAny = "José";
valueAny = 100;
valueAny = true;
valueAny = [];
valueAny = {};

console.log(valueAny);



let valueUnknown: unknown;

valueUnknown = "José";
valueUnknown = 100;
valueUnknown = true;
valueUnknown = [];
valueUnknown = {};

console.log(valueUnknown);



let nameAny: any = "José";

console.log(nameAny.toUpperCase());





let nameUnknown: unknown = "José";

if (typeof nameUnknown === "string") {
    console.log(nameUnknown.toUpperCase());
}



function printText(value: unknown): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

printText("Hola");
printText(100);



function printNumber(value: unknown): void {
    if (typeof value === "number") {
        console.log(value.toFixed(2));
    }
}

printNumber(150);
printNumber("150");


function showLength(value: unknown): void {
    if (typeof value === "string") {
        console.log(value.length);
    }
}

showLength("TypeScript");
showLength(true);


