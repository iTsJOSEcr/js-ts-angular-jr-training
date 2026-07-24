import { users, getActiveUsers, findUserById } from "./users.js";
import {
    products,
    getAvailableProducts,
    findProductById
} from "./products.js";
import {
    orders,
    getPaidOrders,
    getOrderDetails
} from "./orders.js";
import { getData, getSummary } from "./api.js";

console.log("Todos los usuarios:");
console.log(users);

console.log("Usuarios activos:");
console.log(getActiveUsers());

console.log("Usuario con id 2:");
console.log(findUserById(2));

console.log("Todos los productos:");
console.log(products);

console.log("Productos disponibles:");
console.log(getAvailableProducts());

console.log("Producto con id 3:");
console.log(findProductById(3));

console.log("Todos los pedidos:");
console.log(orders);

console.log("Pedidos pagados:");
console.log(getPaidOrders());

console.log("Detalle del pedido 1:");
console.log(getOrderDetails(1));

console.log("Todos los datos:");
console.log(getData());

console.log("Resumen:");
console.log(getSummary());


