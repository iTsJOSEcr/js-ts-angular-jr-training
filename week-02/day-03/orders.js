import { findUserById } from "./users.js";
import { findProductById } from "./products.js";

export const orders = [
    { id: 1, userId: 1, productId: 3, cantidad: 1, pagado: true },
    { id: 2, userId: 2, productId: 1, cantidad: 2, pagado: false },
    { id: 3, userId: 3, productId: 2, cantidad: 1, pagado: true }
];

export function getPaidOrders() {
    return orders.filter(function (order) {
        return order.pagado === true;
    });
}

export function getOrderDetails(orderId) {
    const order = orders.find(function (order) {
        return order.id === orderId;
    });

    if (!order) {
        return "Pedido no encontrado";
    }

    const user = findUserById(order.userId);
    const product = findProductById(order.productId);

    return {
        pedido: order.id,
        usuario: user?.nombre ?? "Usuario no encontrado",
        producto: product?.nombre ?? "Producto no encontrado",
        cantidad: order.cantidad,
        total: (product?.precio ?? 0) * order.cantidad,
        pagado: order.pagado
    };
}

