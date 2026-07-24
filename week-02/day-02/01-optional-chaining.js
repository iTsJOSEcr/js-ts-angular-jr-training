
const usuario1 = {
    nombre: "José",
    contacto: {
        email: "jose@gmail.com"
    }
};

const emailUsuario1 = usuario1.contacto?.email;

console.log("Email usuario 1:", emailUsuario1);



const usuario2 = {
    nombre: "Ana"
};

const emailUsuario2 = usuario2.contacto?.email;

console.log("Email usuario 2:", emailUsuario2);



const empresa = {
    gerente: {
        contacto: {
            telefono: "8888-9999"
        }
    }
};

const telefonoGerente = empresa.gerente?.contacto?.telefono;

console.log("Teléfono gerente:", telefonoGerente);



const empresa2 = {};

const telefonoGerente2 = empresa2.gerente?.contacto?.telefono;

console.log("Teléfono gerente 2:", telefonoGerente2);



const cuenta = {
    perfil: {
        informacion: {
            nombre: "Monse"
        }
    }
};

const nombrePerfil = cuenta.perfil?.informacion?.nombre;

console.log("Nombre del perfil:", nombrePerfil);


