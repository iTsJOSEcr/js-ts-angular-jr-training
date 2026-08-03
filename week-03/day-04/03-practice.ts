type Status = "pending" | "approved" | "rejected";

function showStatus(status: Status): void {
    console.log(`Estado: ${status}`);
}

showStatus("approved");
showStatus("pending");




type PaymentStatus = "pending" | "completed" | "failed";

function getPaymentMessage(status: PaymentStatus): string {
    if (status === "completed") {
        return "Pago realizado correctamente";
    }

    if (status === "pending") {
        return "Pago pendiente";
    }

    return "Pago rechazado";
}

console.log(getPaymentMessage("completed"));
console.log(getPaymentMessage("failed"));



type Role = "admin" | "user" | "guest";

function getAccess(role: Role): string {
    if (role === "admin") {
        return "Acceso total";
    }

    if (role === "user") {
        return "Acceso limitado";
    }

    return "Solo lectura";
}

console.log(getAccess("admin"));
console.log(getAccess("guest"));





type Theme = "light" | "dark";

function applyTheme(theme: Theme): string {
    return theme === "light"
        ? "Tema claro aplicado"
        : "Tema oscuro aplicado";
}

console.log(applyTheme("light"));
console.log(applyTheme("dark"));




type Difficulty = "easy" | "medium" | "hard";

function startGame(level: Difficulty): void {
    console.log(`Nivel seleccionado: ${level}`);
}

startGame("easy");
startGame("hard");




type Language = "JavaScript" | "TypeScript" | "C#";

function showLanguage(language: Language): string {
    return `Lenguaje seleccionado: ${language}`;
}

console.log(showLanguage("TypeScript"));



type Environment = "development" | "testing" | "production";

function connect(environment: Environment): void {
    console.log(`Conectando a ${environment}`);
}

connect("development");
connect("production");



type UserStatus = "online" | "offline" | "busy";

function showUserStatus(status: UserStatus): string {
    return `Usuario: ${status}`;
}

console.log(showUserStatus("online"));
console.log(showUserStatus("busy"));



type Notification = "success" | "warning" | "error";

function sendNotification(type: Notification): string {
    if (type === "success") {
        return "Operación exitosa";
    }

    if (type === "warning") {
        return "Advertencia";
    }

    return "Ha ocurrido un error";
}

console.log(sendNotification("success"));
console.log(sendNotification("error"));


type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

function request(method: HttpMethod): void {
    console.log(`Método HTTP: ${method}`);
}

request("GET");
request("POST");
request("PUT");
request("DELETE");