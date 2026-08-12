function getPrice<T extends {price: number}> (item: T): number {
    return item.price;
}

console.log(getPrice({
    name: "Laptop",
    price: 1200
}));

console.log(getPrice({
    product: "Mouse",
    price: 25,
    stock: 10
}));



function getActive<T extends {active: boolean}> (item: T): boolean {
    return item.active;
}

console.log(getActive({
    name: "José",
    active: true
}));

console.log(getActive({
    id: 10,
    product: "Laptop",
    active: false
}));



function getProductName<T extends { name: string; price: number }>(item: T): string {
    return item.name;
}

console.log(getProductName({
    name: "Laptop",
    price: 1200
}));

console.log(getProductName({
    name: "Mouse",
    price: 25,
    stock: 30,
    active: true
}));



function getUserEmail<T extends {id: number; name: string; email: string}>(item: T): string {
    return item.email
}

console.log(getUserEmail({
    id: 1,
    name: "José",
    email: "jose@gmail.com"
}));

console.log(getUserEmail({
    id: 2,
    name: "Ana",
    email: "ana@gmail.com",
    active: true,
    age: 25
}));




function getStock<T extends {product: string; stock: number}> (item: T): number {
    return item.stock
}

console.log(getStock({
    product: "Laptop",
    stock: 15
}));

console.log(getStock({
    product: "Mouse",
    stock: 50,
    price: 25,
    active: true
}));


function getUserId<T extends { id: number }>(item: T): number {
    return item.id;
}

console.log(getUserId({
    id: 10,
    username: "jose123",
    email: "jose@gmail.com"
}));

console.log(getUserId({
    id: 25,
    username: "ana25",
    active: true
}));


function getEmployeeName<T extends {name: string}> (item: T): string {
    return item.name
}

console.log(getEmployeeName({
    id: 1,
    name: "José",
    salary: 5000
}));

console.log(getEmployeeName({
    id: 2,
    name: "Ana",
    department: "IT",
    active: true
}));