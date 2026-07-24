export const products = [
    { id: 1, nombre: "Mouse", precio: 15000, stock: 10 },
    { id: 2, nombre: "Teclado", precio: 35000, stock: 0 },
    { id: 3, nombre: "Monitor", precio: 120000, stock: 5 }
];

export function getAvailableProducts() {
    return products.filter(function (product) {
        return product.stock > 0;
    });
}

export function findProductById(id) {
    return products.find(function (product) {
        return product.id === id;
    });
}

