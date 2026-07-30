type Customer = {
    id:number;
    nombre:string;
    correo:string;
    activo:boolean;
};


const cliente: Customer = {
    id: 1,
    nombre: "Jose",
     correo: "jose@gmail.com",
    activo: true
};



type Product = {
    id: number;
    nombre: string;
    precio: number;
};

const teclado: Product = {
    id: 1,
    nombre: "Teclado",
    precio: 25000
};

console.log(teclado);


type Student = {
    nombre: string;
    edad: number;
    aprobado: boolean;
};

const estudiante: Student = {
    nombre: "Monse",
    edad: 17,
    aprobado: true
};

console.log(estudiante);



type Movie = {
    id:number;
    title:string;
    year:number;
    genre:string;
    rating:number;
    available:boolean;
};


const movie: Movie = {
    id:22,
    title:"Spiderman",
    year:2026,
    genre:"Action",
    rating:9,
    available:true,
};

console.log(movie);




type VideoGame = {
    id: number;
    name: string;
    developer: string;
    price: number;
    genres: string[];
    online: boolean;
};


const game: VideoGame = {
    id: 2,
    name: "GTA V",
    developer: "Rockstar",
    price: 100,
    genres: ["action", "aventura"],
    online: true,
};



type Employee = {
    id: number;
    name: string;
    position: string;
    salary: number;
    active: boolean;
    skills: string[];
};

const employee: Employee = {
    id: 33,
    name: "Jose",
    position: "Junior",
    salary: 1000,
    active: true,
    skills: ["JavaScript", "TypeScript", "C#", ".NET"],
};

const employee2: Employee = {
    id: 44,
    name: "Ale",
    position: "Junior",
    salary: 1000,
    active: true,
    skills: ["JavaScript", "TypeScript", "C#", ".NET"],
};

const employees: Employee[] = [
    employee,
    employee2,
];

console.log(employees);

