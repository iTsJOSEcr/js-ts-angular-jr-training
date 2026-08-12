function getId<T extends { id: number }>(item: T): number {
    return item.id;
}

console.log(getId({ id: 1, name: "José" }));
console.log(getId({ id: 50, product: "Laptop", price: 500 }));




function getCode<T extends {code: string}>(item: T): string {
    return item.code;
}

console.log(getCode({ code: "ABC123", product: "Laptop" }));

console.log(getCode({ code: "CR01", country: "Costa Rica", active: true }));



function getName <T extends { name: string}> (item: T): string {
    return item.name;
}

console.log(getName({ name: "José", age: 25 }));

console.log(getName({ name: "Laptop", price: 1200 }));

console.log(getName({ name: "Costa Rica", population: 5000000 }));





function getEmail<T extends { name: string; email: string }>(item: T): string {
    return item.email;
}

console.log(getEmail({
    name: "José",
    email: "jose@gmail.com",
    age: 25
}));

console.log(getEmail({
    name: "Ana",
    email: "ana@gmail.com",
    active: true
}));