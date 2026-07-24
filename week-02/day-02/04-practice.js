
const cliente = {
    empresa: {
        nombre: "Transbrunca"
    }
};

const nombreEmpresa = cliente.empresa?.nombre ?? "Empresa no registrada";

console.log("Empresa:", nombreEmpresa);


const pedido = {
    pago: {
        metodo: "Tarjeta"
    }
};

const metodoPago = pedido.pago?.metodo ?? "Método de pago no definido";

console.log("Método de pago:", metodoPago);


const producto = {
    informacion: {
        precio: 25000
    }
};

const precio = producto.informacion?.precio ?? 0;

console.log("Precio:", precio);


const estudiante = {
    academico: {
        notaFinal: 0
    }
};

const notaFinal = estudiante.academico?.notaFinal ?? "Sin nota";

console.log("Nota final:", notaFinal);

function getPetName(persona) {
    return persona.mascota?.nombre ?? "Sin mascota registrada";
}

const persona1 = {
    nombre: "Ana",
    mascota: {
        nombre: "Luna"
    }
};

const persona2 = {
    nombre: "Carlos"
};

console.log(getPetName(persona1));
console.log(getPetName(persona2));

function getJobTitle(empleado) {
    return empleado.trabajo?.puesto ?? "Puesto no registrado";
}

const empleado1 = {
    nombre: "María",
    trabajo: {
        puesto: "Desarrolladora"
    }
};

const empleado2 = {
    nombre: "Luis"
};

console.log(getJobTitle(empleado1));
console.log(getJobTitle(empleado2));