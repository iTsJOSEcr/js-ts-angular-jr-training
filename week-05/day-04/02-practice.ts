type Employee = {
    id: number;
    name: string;
    email: string;
    salary: number;
    active: boolean;
};

const employee: Employee = {
    id: 1,
    name: "Carlos",
    email: "carlos@gmail.com",
    salary: 850000,
    active: true
};



const employeeUpdate: Partial<Employee> = {
    salary:900000,
    active:false,
};

console.log(employeeUpdate);



type PublicEmployee = Omit<Employee, "salary" | "email">;

const publicEmployee: PublicEmployee = {
    id: 2,
    name:"Jose",
    active: true,
};

console.log(publicEmployee);




type EmployeeCard = Pick<Employee, "name" | "email">;

const employeeCard: EmployeeCard = {
    name: "Jose",
    email: "Jose@gmail.com",
};


console.log(employeeCard);



type DepartmentStatus = Record<string, boolean>;


const departmentStatus: DepartmentStatus = {
    IT: true,
    Ventas: false,
    Soporte: true,
    RRHH: true,
}

console.log(departmentStatus);





type AccountConfig = {
    username?: string;
    email?: string;
    notifications?: boolean;
    darkMode?: boolean;
};

type CompleteAccountConfig = Required<AccountConfig>;




const completeAccountConfig: CompleteAccountConfig ={
    username: "Jose",
    email: "Jose@gmail.com",
    notifications: true,
    darkMode: true
};


console.log(completeAccountConfig);




type Vehicle = {
    brand: string;
    model: string;
    year: number;
    available: boolean;
};

const vehicleUpdate: Partial<Vehicle> = {
    year: 2026,
    available: false
};

console.log(vehicleUpdate);



type Student = {
    id: number;
    name: string;
    email: string;
    grade: number;
    approved: boolean;
};

type StudentCard = Pick<Student, "name" | "grade" | "approved">;

const studentCard: StudentCard = {
    name: "Carlos",
    grade: 92,
    approved: true
};

console.log(studentCard);




type BankAccount = {
    id: number;
    owner: string;
    balance: number;
    password: string;
    active: boolean;
};

type PublicBankAccount = Omit<BankAccount, "password" | "balance">;

const publicBankAccount: PublicBankAccount = {
    id: 10,
    owner: "José",
    active: true
};

console.log(publicBankAccount);



type ProductPrices = Record<string, number>;

const productPrices: ProductPrices = {
    Laptop: 450000,
    Mouse: 15000,
    Teclado: 30000,
    Monitor: 120000
};

console.log(productPrices);



type GameSettings = {
    volume?: number;
    difficulty?: string;
    subtitles?: boolean;
    multiplayer?: boolean;
};

type CompleteGameSettings = Required<GameSettings>;

const completeGameSettings: CompleteGameSettings = {
    volume: 80,
    difficulty: "Normal",
    subtitles: true,
    multiplayer: false
};

console.log(completeGameSettings);


