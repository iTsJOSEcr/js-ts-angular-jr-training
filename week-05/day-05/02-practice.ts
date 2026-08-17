type ServiceResult<T> =
    | { success: true; data: T }
    | { success: false; error: string };


type Product = {
    id: number;
    name: string;
    price: number;
};


async function fetchProduct(): Promise<Product> {
    return {
        id: 1,
        name: "Laptop",
        price: 450000
    };
}


async function showProduct(): Promise<void> {
    const product = await fetchProduct();

    console.log(product);
}


showProduct();


type UserProfile = {
    id: number;
    username: string;
    active: boolean;
};


async function fetchUser(): Promise<UserProfile> {
    return {
        id: 5,
        username: "Jose123",
        active: true
    };
}


async function showUser(): Promise<void> {
    const user = await fetchUser();

    console.log(user);
}


showUser();


async function fetchUserResult(): Promise<ServiceResult<UserProfile>> {
    return {
        success: true,
        data: {
            id: 10,
            username: "Ana123",
            active: true
        }
    };
}


async function showUserResult(): Promise<void> {
    const result = await fetchUserResult();

    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}


showUserResult();



type ApiResponse<T> = {
    data: T;
    message: string;
    status: number;
};


type Course = {
    id: number;
    name: string;
    duration: number;
};


const courseResponse: ApiResponse<Course> = {
    data: {
        id: 1,
        name: "TypeScript",
        duration: 40
    },
    message: "Curso obtenido correctamente",
    status: 200
};

console.log(courseResponse);


const coursesResponse: ApiResponse<Course[]> = {
    data: [
        {
            id: 1,
            name: "TypeScript",
            duration: 40
        },
        {
            id: 2,
            name: "Angular",
            duration: 60
        },
        {
            id: 3,
            name: "JavaScript",
            duration: 35
        }
    ],
    message: "Cursos obtenidos correctamente",
    status: 200
};

console.log(coursesResponse);


async function fetchCourses(): Promise<ApiResponse<Course[]>> {
    return {
        data: [
            {
                id: 1,
                name: "TypeScript",
                duration: 40
            },
            {
                id: 2,
                name: "Angular",
                duration: 60
            }
        ],
        message: "Cursos cargados correctamente",
        status: 200
    };
}


async function showCourses(): Promise<void> {
    const response = await fetchCourses();

    console.log(response.data);
    console.log(response.message);
    console.log(response.status);
}


showCourses();


type Employee = {
    id: number;
    name: string;
    active: boolean;
};


async function fetchEmployee(): Promise<ServiceResult<Employee>> {
    return {
        success: true,
        data: {
            id: 10,
            name: "Carlos",
            active: true
        }
    };
}


async function showEmployee(): Promise<void> {
    const result = await fetchEmployee();

    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}


showEmployee();


type ProductResponse = ApiResponse<Product>;


const productResponse: ProductResponse = {
    data: {
        id: 5,
        name: "Monitor",
        price: 150000
    },
    message: "Producto obtenido correctamente",
    status: 200
};


console.log(productResponse);


async function fetchProducts(): Promise<ApiResponse<Product[]>> {
    return {
        data: [
            {
                id: 1,
                name: "Laptop",
                price: 450000
            },
            {
                id: 2,
                name: "Mouse",
                price: 15000
            },
            {
                id: 3,
                name: "Teclado",
                price: 30000
            }
        ],
        message: "Productos obtenidos correctamente",
        status: 200
    };
}


async function showProducts(): Promise<void> {
    const response = await fetchProducts();

    console.log(response.data);
}


showProducts();


async function fetchUserError(): Promise<ServiceResult<UserProfile>> {
    return {
        success: false,
        error: "No se pudo obtener el usuario"
    };
}


async function showUserError(): Promise<void> {
    const result = await fetchUserError();

    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}


showUserError();

