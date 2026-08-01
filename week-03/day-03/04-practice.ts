
interface Laptop {
    brand: string;
    model: string;
    ram: number;
    color?: string;
}

function getLaptopColor(laptop: Laptop): string {
    return laptop.color ?? "Color no especificado";
}

const laptop1: Laptop = {
    brand: "Lenovo",
    model: "IdeaPad",
    ram: 16,
    color: "Negro",
};

const laptop2: Laptop = {
    brand: "HP",
    model: "Pavilion",
    ram: 8,
};

console.log(getLaptopColor(laptop1));
console.log(getLaptopColor(laptop2));


function showGreeting(name: string, nickname?: string): void {
    console.log(`Hola ${nickname ?? name}`);
}

showGreeting("José", "Josecito");
showGreeting("Ana");


interface Pet {
    id: number;
    name: string;
    animal: string;
    age?: number;
}

function createPet(
    id: number,
    name: string,
    animal: string,
    age?: number
): Pet {
    return {
        id,
        name,
        animal,
        age,
    };
}

const pet1 = createPet(1, "Max", "Perro", 4);
const pet2 = createPet(2, "Luna", "Gato");

console.log(pet1);
console.log(pet2);



interface Student {
    id: number;
    name: string;
    grade?: number;
}

function getStudentGrade(student: Student): string {
    return student.grade !== undefined
        ? `Nota: ${student.grade}`
        : "Sin nota registrada";
}

const student1: Student = {
    id: 1,
    name: "Carlos",
    grade: 90,
};

const student2: Student = {
    id: 2,
    name: "María",
};

console.log(getStudentGrade(student1));
console.log(getStudentGrade(student2));



interface Product {
    id: number;
    name: string;
    price: number;
    discount?: number;
}

function calculateFinalPrice(product: Product): number {
    const discount = product.discount ?? 0;
    const discountAmount = product.price * discount / 100;

    return product.price - discountAmount;
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


interface Profile {
    firstName: string;
    lastName?: string;
}

function getFullName(profile: Profile): string {
    return profile.lastName
        ? `${profile.firstName} ${profile.lastName}`
        : profile.firstName;
}

const profile1: Profile = {
    firstName: "José",
    lastName: "Daniel",
};

const profile2: Profile = {
    firstName: "Ana",
};

console.log(getFullName(profile1));
console.log(getFullName(profile2));



interface Contact {
    name: string;
    phone?: string;
    email?: string;
}

function getContactInfo(contact: Contact): string {
    return contact.phone
        ?? contact.email
        ?? "Sin información de contacto";
}

const contact1: Contact = {
    name: "Pedro",
    phone: "8888-8888",
    email: "pedro@gmail.com",
};

const contact2: Contact = {
    name: "Sofía",
    email: "sofia@gmail.com",
};

const contact3: Contact = {
    name: "Luis",
};

console.log(getContactInfo(contact1));
console.log(getContactInfo(contact2));
console.log(getContactInfo(contact3));



type DeliveryStatus = "pending" | "sent" | "delivered";

type Delivery = {
    id: number;
    customer: string;
    status?: DeliveryStatus;
};

function getDeliveryStatus(delivery: Delivery): DeliveryStatus {
    return delivery.status ?? "pending";
}

const delivery1: Delivery = {
    id: 1,
    customer: "Juan",
    status: "sent",
};

const delivery2: Delivery = {
    id: 2,
    customer: "Andrea",
};

console.log(getDeliveryStatus(delivery1));
console.log(getDeliveryStatus(delivery2));


interface Course {
    id: number;
    name: string;
    description?: string;
}

function showCourse(course: Course): void {
    console.log(`Curso: ${course.name}`);
    console.log(
        `Descripción: ${course.description ?? "Sin descripción"}`
    );
}

const course1: Course = {
    id: 1,
    name: "TypeScript",
    description: "Fundamentos de TypeScript",
};

const course2: Course = {
    id: 2,
    name: "Angular",
};

showCourse(course1);
showCourse(course2);


function createMessage(
    name: string,
    city?: string,
    profession?: string
): string {
    const userCity = city ?? "una ciudad desconocida";
    const userProfession = profession ?? "profesión no registrada";

    return `${name} vive en ${userCity} y tiene ${userProfession}`;
}

console.log(
    createMessage("José", "San José", "Desarrollador")
);

console.log(
    createMessage("Ana")
);

