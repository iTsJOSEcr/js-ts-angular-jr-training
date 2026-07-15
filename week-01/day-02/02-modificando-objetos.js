const producto = {
    id: 1,
    nombre: "Monitor",
    precio: 120000,
    categoria: "Tecnología",
    stock: 15,
    activo: false
};

const cliente = {
    id: 1,
    nombre: "José",
    correo: "jose@gmail.com",
    activo: false
};

function actualizarPrecio(producto, nuevoPrecio) {
    producto.precio = nuevoPrecio;
    return producto;
}

function activarProducto(producto) {
    producto.activo = true;
    return producto;
}

function activarCliente(cliente) {
    cliente.activo = true;
    return cliente;
}

function cambiarCorreo(cliente, nuevoCorreo) {
    cliente.correo = nuevoCorreo;
    return cliente;
}

function venderProducto(producto, cantidad) {
    if (producto.stock >= cantidad) {
        producto.stock -= cantidad;
        return producto;
    }

    return "No hay suficiente stock";
}

function reabastecerProducto(producto, cantidad) {
    producto.stock += cantidad;
    return producto;
}

console.log("Estado inicial:");
console.log(producto);

venderProducto(producto, 5);

console.log("Después de vender 5:");
console.log(producto);

reabastecerProducto(producto, 20);

console.log("Después de reabastecer 20:");
console.log(producto);

actualizarPrecio(producto, 150000);

console.log("Después de actualizar el precio:");
console.log(producto);

activarProducto(producto);

console.log("Estado final del producto:");
console.log(producto);

activarCliente(cliente);
cambiarCorreo(cliente, "nuevo@gmail.com");

console.log("Estado final del cliente:");
console.log(cliente);