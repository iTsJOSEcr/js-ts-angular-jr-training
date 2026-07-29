const users = [
    {
        id: 1,
        nombre: "José"
    },
    {
        id: 2,
        nombre: "Ana"
    }
];

export function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 2000);
    });
}

export function saveUser(user) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (!user.nombre) {
                reject("El usuario debe tener un nombre.");
                return;
            }

            users.push({
                id: users.length + 1,
                ...user
            });

            resolve("Usuario guardado correctamente.");

        }, 1500);
    });
}

