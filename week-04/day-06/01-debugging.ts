function add(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 20));



function greet(name: string): void {
    console.log(`Hola ${name}`);
}

greet("José");



let age: number = 25;

console.log(age);



function printValue(value: unknown): void {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
}

printValue("José");


function identity<T>(value: T): T {
    return value;
}

console.log(identity(10));


type Status = "active" | "inactive";

let status: Status = "active";

console.log(status);


interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "José",
    age: 25,
};

console.log(user);



type Result =
    | { status: "success"; data: string }
    | { status: "error"; message: string };

function showResult(result: Result): void {
    if (result.status === "success") {
        console.log(result.data);
    } else {
        console.log(result.message);
    }
}



function getFirst(numbers: number[]): number | undefined {
    return numbers[0];
}

console.log(getFirst([]));



type Payment =
    | { status: "pending" }
    | { status: "completed" }
    | { status: "failed" };

function exhaustiveCheck(value: never): never {
    throw new Error("Estado no soportado.");
}

function handlePayment(payment: Payment): void {
    if (payment.status === "pending") {
        console.log("Pendiente");
    } else if (payment.status === "completed") {
        console.log("Completado");
    } else if (payment.status === "failed") {
        console.log("Fallido");
    } else {
        exhaustiveCheck(payment);
    }
}