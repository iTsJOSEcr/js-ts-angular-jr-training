type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

let productKey: keyof Product;

productKey = "id";
console.log(productKey);

productKey = "name";
console.log(productKey);

productKey = "price";
console.log(productKey);


// ===============================
// getProperty
// ===============================

function getProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const user = {
    name: "Jose",
    age: 25,
    active: true,
};

console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
console.log(getProperty(user, "active"));


// ===============================
// readProperty
// ===============================

function readProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const product = {
    name: "Laptop",
    price: 1200,
    stock: 15,
};

console.log(readProperty(product, "name"));
console.log(readProperty(product, "price"));
console.log(readProperty(product, "stock"));


// ===============================
// getCarProperty
// ===============================

function getCarProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const car = {
    brand: "Toyota",
    year: 2024,
    electric: false,
};

console.log(getCarProperty(car, "brand"));
console.log(getCarProperty(car, "year"));
console.log(getCarProperty(car, "electric"));


// ===============================
// getEmpleadoProperty
// ===============================

function getEmpleadoProperty<T, K extends keyof T>(object: T, key: K) {
    return object[key];
}

const employee = {
    id: 10,
    name: "José",
    salary: 5000,
    active: true,
};

console.log(getEmpleadoProperty(employee, "name"));
console.log(getEmpleadoProperty(employee, "salary"));
console.log(getEmpleadoProperty(employee, "active"));


