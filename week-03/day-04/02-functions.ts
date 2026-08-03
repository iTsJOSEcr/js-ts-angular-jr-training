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