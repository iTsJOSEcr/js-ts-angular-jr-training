export const users = [
    { id: 1, nombre: "José", email: "jose@gmail.com", activo: true },
    { id: 2, nombre: "Ana", email: "ana@gmail.com", activo: false },
    { id: 3, nombre: "Carlos", email: "carlos@gmail.com", activo: true }
];

export function getActiveUsers() {
    return users.filter(function (user) {
        return user.activo === true;
    });
}

export function findUserById(id) {
    return users.find(function (user) {
        return user.id === id;
    });
}