interface Customer {
    id: number;
    name: string;
    phone?: string;
}

const customer1: Customer = {
    id: 1,
    name: "José",
    phone: "8888-8888",
};

const customer2: Customer = {
    id: 2,
    name: "Ana",
};

console.log(customer1);
console.log(customer2);
console.log(customer2.phone);





interface Car {
    brand: string;
    model: string;
    year: number;
    color?: string;
}


const car1: Car = {
    brand: "toyota",
    model: "Corolla",
    year: 2022,
};

const car2: Car = {
     brand: "Honda",
    model: "Civic",
    year: 2024,
    color: "Negro",
};

console.log(car1);
console.log(car2);

function getColor (car: Car): string {
    if (car.color) {
        return car.color;
    }
    return "Color not specified";
}

console.log(getColor(car1));
console.log(getColor(car2));


interface User {
    name: string;
    phone?: string;
}

function getPhone(user: User): string {
    return user.phone ?? "Sin teléfono";
}

const user1: User = {
    name: "José",
    phone: "8888-8888",
};

const user2: User = {
    name: "Ana",
};

console.log(getPhone(user1));
console.log(getPhone(user2));





