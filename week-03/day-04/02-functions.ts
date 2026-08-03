type Status = "pending" | "approved" | "rejected";

function changeStatus(status: Status): void {
    console.log(`Nuevo estado: ${status}`);
}

changeStatus("approved");
changeStatus("pending");




type PaymentStatus = "pending" | "completed" | "failed";

function showPaymentStatus(status: PaymentStatus): void {
    console.log(`Estado del pago ${status}`);
}


showPaymentStatus("completed");
showPaymentStatus("failed");




type Theme = "light" | "dark";

function applyTheme(theme: Theme): string {
    if (theme === "light") {
        return "Aplicando tema claro";

    } else {
        return "Aplicando tema oscuro";
    }
        
}

applyTheme("light");
applyTheme("dark");




type Role = "admin" | "user" | "guest";

function getAccessMessage(role: Role): string {
    if (role === "admin") {
        return "Accesos completo a todo el sistema"
    } else if (role === "user") {
        return "Acceso limitado a ciertas funciones"
    } else {
        return "Acceso restringido a funciones básicas"
    }
}


console.log(getAccessMessage("admin"));
console.log(getAccessMessage("user"));
console.log(getAccessMessage("guest"));