const producto = {
    id: 1,
    nombre: "Camiseta",
    precio: 20.99,
    categoria: "Ropa",
    stock: 100,
}


const cliente = {
    id: 1,
    nombre: "Jose Daniel",
    correo: "jose.daniel@example.com",
    telefono: "555-1234"
}


const empleado = {
    id: 1,
    nombre: "Maria Garcia",
    puesto: "Vendedora"
}


const orden = {
    id: 1,
    cliente: cliente,
    total: 100.99,
    estado: "Pendiente"
}


const cliente2 = {
    id: 2,
    nombre: "María",
    correo: "maria@gmail.com",
};



function obtenerTelefono(cliente) {
    if (cliente.telefono) {
        return cliente.telefono;
    } else {
        return "No registrado";
    }
}



function obtenerNombreProducto(producto) {
    if (producto.nombre) {
        return producto.nombre;
    } else {
        return "No existe";
    }
}


function obtenerPrecioProducto(producto) {
    return producto.precio;
}


function obtenerNombreCliente(cliente) {
    if (cliente.nombre) {
        return cliente.nombre;
    } else {
        return "No registrado";
}
}



function obtenerPuestoEmpleado(empleado) {
    if (empleado.puesto) {
        return empleado.puesto;
    } else {
        return "No registrado";
    }
}



function obtenerEstadoOrden(orden) {
    return orden.estado;
}






