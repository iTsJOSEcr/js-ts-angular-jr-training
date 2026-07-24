
function getEmail(usuario) {
    return usuario.contacto?.email ?? "Correo no disponible";
}

const usuario1 = {
    nombre: "José",
    contacto: {
        email: "jose@gmail.com"
    }
};

const usuario2 = {
    nombre: "Ana"
};

console.log(getEmail(usuario1));
console.log(getEmail(usuario2));



function getPhone(usuario) {
    return usuario.contacto?.telefono ?? "Teléfono no disponible";
}

const usuario3 = {
    nombre: "Carlos",
    contacto: {
        telefono: "7000-1234"
    }
};

const usuario4 = {
    nombre: "María",
    contacto: {}
};

console.log(getPhone(usuario3));
console.log(getPhone(usuario4));

function getProfileName(cuenta) {
    return cuenta.perfil?.informacion?.nombre ?? "Usuario desconocido";
}

const cuenta1 = {
    perfil: {
        informacion: {
            nombre: "Monse"
        }
    }
};

const cuenta2 = {};

console.log(getProfileName(cuenta1));
console.log(getProfileName(cuenta2));


function getCity(cliente) {
    return cliente.direccion?.ciudad ?? "Ciudad no registrada";
}

const cliente1 = {
    nombre: "Luis",
    direccion: {
        ciudad: "Cartago"
    }
};

const cliente2 = {
    nombre: "Sofía"
};

console.log(getCity(cliente1));
console.log(getCity(cliente2));