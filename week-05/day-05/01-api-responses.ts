async function getMessage(): Promise<string> {
    return "Hola desde TypeScript";
}

async function showMessage(): Promise<void> {
    const message = await getMessage();

    console.log(message);
}

showMessage();


async function getPrice(): Promise<number> {
    return 1500;
}

async function showPrice(): Promise<void> {
    const price = await getPrice();

    console.log(price);
}

showPrice();


async function getUsername(): Promise<string> {
    return "Jose123";
}

async function showUsername(): Promise<void> {
    const username = await getUsername();

    console.log(username);
}

showUsername();


async function getActive(): Promise<boolean> {
    return true;
}

async function showActive(): Promise<void> {
    const active = await getActive();

    console.log(active);
}

showActive();


type ServiceResult<T> =
    | { success: true; data: T }
    | { success: false; error: string };


type User = {
    id: number;
    name: string;
};


const userResult: ServiceResult<User> = {
    success: true,
    data: {
        id: 1,
        name: "Jose"
    }
};

console.log(userResult);


const userError: ServiceResult<User> = {
    success: false,
    error: "No se pudo obtener el usuario"
};

console.log(userError);


function showResult<T>(result: ServiceResult<T>): void {
    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}

showResult(userResult);
showResult(userError);


type Course = {
    id: number;
    name: string;
    duration: number;
};


const courseResult: ServiceResult<Course> = {
    success: true,
    data: {
        id: 1,
        name: "TypeScript",
        duration: 40
    }
};


const courseError: ServiceResult<Course> = {
    success: false,
    error: "No se pudo obtener el curso"
};


showResult(courseResult);
showResult(courseError);


async function fetchCourses(): Promise<ServiceResult<Course[]>> {
    return {
        success: true,
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
        ]
    };
}


async function showCourses(): Promise<void> {
    const result = await fetchCourses();

    if (result.success) {
        console.log(result.data);
    } else {
        console.log(result.error);
    }
}

showCourses();


type ApiResponse<T> = {
    data: T;
    message: string;
    status: number;
};


const userResponse: ApiResponse<User> = {
    data: {
        id: 1,
        name: "Jose"
    },
    message: "Usuario obtenido correctamente",
    status: 200
};

console.log(userResponse);


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
        }
    ],
    message: "Cursos obtenidos correctamente",
    status: 200
};

console.log(coursesResponse);


