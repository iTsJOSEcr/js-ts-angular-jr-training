type Course = {
    id: number;
    name: string;
    duration: number;
    active: boolean;
};

const course: Course = {
    id: 1,
    name: "TypeScript",
    duration: 40,
    active: true
};


const courseUpdate: Partial<Course> = {
    duration: 50,
    active: false
};




type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
};

const product: Product = {
    id: 2,
    name: "jugo",
    price: 2000,
    stock: 15
};


const productUpdate: Partial<Product> = {
    price: 1000,
    stock: 10,
};




type User = {
    id: number;
    username: string;
    email: string;
    active: boolean;
};


const user: User = {
    id: 2,
    username: "Jose",
    email: "jose@gmail.com",
    active: true,
};


const updateUser: Partial<User> = {
    email: "jd@gmail.com"
} ;


type CourseInfo = Pick<Course, "name" | "duration">;

const courseInfo: CourseInfo = {
    name: "TypeScript",
    duration: 40
};

console.log(courseInfo);


type ProductInfo = Pick<Product, "name" | "price">;

const productInfo: ProductInfo = {
    name: "papas",
    price: 500
}

console.log(productInfo);




type UserPublic = Pick<User, "username" | "active">;


const userPublic: UserPublic = {
    username: "Belen",
    active: true,
};


console.log(userPublic);



type UserWithoutEmail = Omit<User, "email">;

const userWithoutEmail: UserWithoutEmail = {
    id: 55,
    username: "Itsjose",
    active: true
};

console.log(userWithoutEmail);

type ProductWithoutStock = Omit<Product, "stock">;

const productWitchoutStock: ProductWithoutStock = {
    id: 22,
    name: "maple",
    price: 2000.
};
 console.log(productWitchoutStock);



 type CourseBasic = Omit<Course, "id" |"active">;


 const courseBasic: CourseBasic = {
    name: "Mate",
    duration: 15
 };

 console.log(courseBasic);



 type StudentGrades = Record<string, number>;

const studentGrades: StudentGrades = {
    Jose: 95,
    Ana: 88,
    Carlos: 100
};

console.log(studentGrades);



type ProductStock = Record<string, number>;

const productStock: ProductStock = {
    laptop: 5,
    Mouse: 5,
    Teclado: 5,
};

console.log(productStock);



type PaisPoblacion = Record<string, number>;

const paisPoblacion: PaisPoblacion = {
    CostaRica: 5200000,
    Mexico: 130000000,
    Argentina: 46000000,
};


console.log(paisPoblacion);


type ActiveUsers = Record<string, boolean>;

const activeUsers: ActiveUsers = {
    Jose: true,
    Ana: false,
    Carlos: true,
};

console.log(activeUsers);



type ProductCodes = Record<string, string>;

const productCodes: ProductCodes = {
    Laptop:"LP001",
    Mouse:"MS002",
    Teclado:"TC003",
};

console.log(productCodes);





type CourseSettings = {
    name?: string;
    duration?: number;
    active?: boolean;
};

type CompleteCourse = Required<CourseSettings>;

const completeCourse: CompleteCourse = {
    name: "Mate",
    duration: 3,
active: true,    
};

console.log(completeCourse);




type ProductSettings = {
    name?: string;
    price?: number;
    stock?: number;
};

type CompleteProduct = Required <ProductSettings>; 

const completeProduct: CompleteProduct = {
    name: "bolsa",
    price: 200,
    stock: 20,
};

console.log(completeProduct);




type UserProfile = {
    username?: string;
    email?: string;
    age?: number;
    active?: boolean;
};


type CompleteUserProfile = Required<UserProfile>;


const completeUserProfile: CompleteUserProfile = {
    username: "Jose",
    email: "Jose@gmail.com",
    age: 22,
    active: true,
};

console.log(completeUserProfile);

