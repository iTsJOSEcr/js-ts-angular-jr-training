interface Book {
    id: number;
    title: string;
    author: string;
    pages: number;
}


function createBook(
    id: number,
    title: string,
    author: string,
    pages: number,
): Book {
    return {
        id,
        title,
        author,
        pages
    }
}

const book1 = createBook(
    1,
    "Clean Code",
    "Robert C. Martin",
    464
);

const book2 = createBook(
    2,
    "The Pragmatic Programmer",
    "Andrew Hunt",
    352
);

console.log(book1);
console.log(book2);



interface Customer {
    id: number;
    name: string;
    email: string;
    phone?: string;
}

function getPhone(customer: Customer): string {
    return customer.phone ?? "Sin teléfono";
}

const customer1: Customer = {
    id: 1,
    name: "José",
    email: "jose@gmail.com",
    phone: "8888-8888",
};

const customer2: Customer = {
    id: 2,
    name: "Ana",
    email: "ana@gmail.com",
};

console.log(getPhone(customer1));
console.log(getPhone(customer2));


interface Student {
    id: number;
    name: string;
    grade?: number;
}

function getGrade(student: Student): string {
    return `Nota: ${student.grade ?? "Sin calificación"}`;
}

const student1: Student = {
    id: 1,
    name: "José",
    grade: 95,
};

const student2: Student = {
    id: 2,
    name: "Ana",
};

console.log(getGrade(student1));
console.log(getGrade(student2));



interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
}

function calculateFinalPrice(product: Product): number {
    const discount = product.discount ?? 0;

    return product.price - (product.price * discount / 100);
}


const product1: Product = {
    id: 1,
    name: "Monitor",
    price: 100000,
    discount: 20,
};

const product2: Product = {
    id: 2,
    name: "Mouse",
    price: 15000,
};

console.log(calculateFinalPrice(product1));
console.log(calculateFinalPrice(product2));




interface User {
    firstName: string;
    lastName?: string;
}

function getDisplayName(name: User): string {
    return `${name.firstName} ${name.lastName ?? ""}`;
}


const user1: User = {
    firstName: "José",
    lastName: "Mora",
};

const user2: User = {
    firstName: "Ana",
};

console.log(getDisplayName(user1));
console.log(getDisplayName(user2));