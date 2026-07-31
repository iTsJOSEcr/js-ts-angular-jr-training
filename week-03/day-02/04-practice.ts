type Customer = {
    id: number;
    name: string;
    email: string;
    active: boolean;
};

function showCustomer(customer: Customer): void {
    console.log("Cliente:", customer);
}

const customer: Customer = {
    id: 1,
    name: "José",
    email: "jose@gmail.com",
    active: true,
};

showCustomer(customer);



interface Course {
    id: number;
    name: string;
    duration: number;
}

const courses: Course[] = [
    {
        id: 1,
        name: "TypeScript",
        duration: 20,
    },
    {
        id: 2,
        name: ".NET",
        duration: 40,
    },
];

for (const course of courses) {
    console.log("Curso:", course.name);
}


type Status = "pending" | "approved" | "rejected";

const orderStatus: Status = "approved";

console.log("Estado:", orderStatus);


interface Product {
    id: number;
    name: string;
    price: number;
}

function isExpensive(product: Product): boolean {
    return product.price > 50000;
}

const monitor: Product = {
    id: 1,
    name: "Monitor",
    price: 120000,
};

const mouse: Product = {
    id: 2,
    name: "Mouse",
    price: 15000,
};

console.log("¿El monitor es caro?", isExpensive(monitor));
console.log("¿El mouse es caro?", isExpensive(mouse));

type Employee = {
    id: number;
    name: string;
    position: string;
};

const employees: Employee[] = [
    {
        id: 1,
        name: "José",
        position: "Junior Developer",
    },
    {
        id: 2,
        name: "Ana",
        position: "Senior Developer",
    },
];

for (const employee of employees) {
    console.log("Empleado:", employee.name);
}


interface Order {
    id: number;
    customer: string;
    total: number;
    paid: boolean;
    products: string[];
}

function showOrder(order: Order): void {
    console.log(`Pedido ${order.id}`);
    console.log(`Cliente: ${order.customer}`);
    console.log(`Total: ${order.total}`);
    console.log(`Pagado: ${order.paid}`);
    console.log(`Productos: ${order.products.join(", ")}`);
}

const order: Order = {
    id: 10,
    customer: "Carlos",
    total: 35000,
    paid: true,
    products: ["Hamburguesa", "Papas", "Refresco"],
};

showOrder(order);


type ApiError = {
    status: number;
    message: string;
    path: string;
};

function showApiError(error: ApiError): string {
    return `Error ${error.status}: ${error.message} en ${error.path}`;
}

const apiError: ApiError = {
    status: 404,
    message: "Recurso no encontrado",
    path: "/api/products/20",
};

console.log(showApiError(apiError));


interface UserProfile {
    id: number;
    name: string;
    phone?: string;
}

function showProfile(profile: UserProfile): void {
    console.log(`Nombre: ${profile.name}`);

    if (profile.phone) {
        console.log(`Teléfono: ${profile.phone}`);
    } else {
        console.log("Teléfono no registrado");
    }
}

const profile1: UserProfile = {
    id: 1,
    name: "José",
    phone: "8888-8888",
};

const profile2: UserProfile = {
    id: 2,
    name: "María",
};

showProfile(profile1);
showProfile(profile2);