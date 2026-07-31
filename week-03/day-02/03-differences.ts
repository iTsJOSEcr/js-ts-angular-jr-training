type ProductType = {
    id: number;
    name: string;
};

interface ProductInterface {
    id: number;
    name: string;
}


const product1: ProductType = {
    id: 1,
    name: "Mouse",
};

const product2: ProductInterface = {
    id: 2,
    name: "Teclado",
};

console.log(product1);
console.log(product2);




type Status = "pending" | "approved" | "rejected";

const orderStatus: Status = "approved";

console.log(orderStatus);


type Role = "Admin" | "Employee" | "Customer";


const userRole: Role = "Admin";





