interface Movie {
    id: number;
    title: string;
    year: number;
    genre: string;
    rating: number;
    available: boolean;
}

const movie: Movie = {
    id: 22,
    title: "Spiderman",
    year: 2026,
    genre: "Action",
    rating: 9,
    available: true,
};

console.log(movie);


interface Employee {
    id: number;
    name: string;
    salary: number;
    active: boolean;
    skills: string[];
}

const employees: Employee[] = [
    {
        id: 12,
        name: "Juan",
        salary: 1000,
        active: true,
        skills: ["C#"],
    },
];

console.log(employees);


interface Course {
    id: number;
    name: string;
    instructor: string;
    duration: number;
    completed: boolean;
}

const course: Course = {
    id: 33,
    name: "Matemáticas",
    instructor: "José",
    duration: 3,
    completed: true,
};

console.log(course);


interface Order {
    id: number;
    customer: string;
    total: number;
    paid: boolean;
    products: string[];
}

const order: Order = {
    id: 20,
    customer: "Juan",
    total: 20,
    paid: true,
    products: ["Hamburguesa", "Papas"],
};

console.log(order);


interface ApiError {
    status: number;
    message: string;
    timestamp: string;
    path: string;
}

const error: ApiError = {
    status: 404,
    message: "Recurso no encontrado",
    timestamp: "2026-07-31T10:30:00",
    path: "/api/products/20",
};

console.log(error);


