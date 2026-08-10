
type PaymentState =
    | { status: "pending" }
    | { status: "completed" }
    | { status: "failed" };

function exhaustiveCheck(value: never): never {
    throw new Error("Estado no soportado.");
}

function handlePayment(payment: PaymentState): void {
    if (payment.status === "pending") {
        console.log("Pago pendiente.");
    } else if (payment.status === "completed") {
        console.log("Pago completado.");
    } else if (payment.status === "failed") {
        console.log("Pago fallido.");
    } else {
        exhaustiveCheck(payment);
    }
}

handlePayment({ status: "pending" });
handlePayment({ status: "completed" });
handlePayment({ status: "failed" });





type UserState =
    | { status: "active" }
    | { status: "inactive" }
    | { status: "blocked" };

function exhaustiveCheck1(value: never): never {
    throw new Error("Estado no soportado.");
}

function handleUser(user: UserState): void {
    if (user.status === "active") {
        console.log("Usuario activo.");
    } else if (user.status === "inactive") {
        console.log("Usuario inactivo.");
    } else if (user.status === "blocked") {
        console.log("Usuario bloqueado.");
    } else {
        exhaustiveCheck1(user);
    }
}




type OrderState =
    | { status: "preparing" }
    | { status: "shipping" }
    | { status: "delivered" };

function exhaustiveCheck2(value: never): never {
    throw new Error("Estado no soportado.");
}

function handleOrder(order: OrderState): void {
    if (order.status === "preparing") {
        console.log("Preparando pedido.");
    } else if (order.status === "shipping") {
        console.log("Pedido en camino.");
    } else if (order.status === "delivered") {
        console.log("Pedido entregado.");
    } else {
        exhaustiveCheck2(order);
    }
}




type ExamState =
    | { status: "pending" }
    | { status: "passed" }
    | { status: "failed" };

function exhaustiveCheck3(value: never): never {
    throw new Error("Estado no soportado.");
}

function handleExam(exam: ExamState): void {
    if (exam.status === "pending") {
        console.log("Examen pendiente.");
    } else if (exam.status === "passed") {
        console.log("Examen aprobado.");
    } else if (exam.status === "failed") {
        console.log("Examen reprobado.");
    } else {
        exhaustiveCheck3(exam);
    }
}


