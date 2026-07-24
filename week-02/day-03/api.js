import { users } from "./users.js";
import { products } from "./products.js";
import { orders } from "./orders.js";

export function getData() {
    return {
        users,
        products,
        orders
    };
}

export function getSummary() {
    return {
        totalUsers: users.length,
        totalProducts: products.length,
        totalOrders: orders.length
    };
}