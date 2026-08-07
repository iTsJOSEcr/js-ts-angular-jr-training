type PaymentState =
| { status: "pending" }
| { status: "completed" }
| { status: "failed" }; 


function handlePayment(payment: PaymentState): void {
    if (payment.status === "pending") {
        console.log("Payment is pending.");
    } else if (payment.status === "completed") {
        console.log("Payment is completed.");
    } else {
        console.log("Payment has failed."); 
    }
}


handlePayment({ status: "pending" });
handlePayment({ status: "completed" });
handlePayment({ status: "failed" });


type TrafficLight =
    | { color: "red" }
    | { color: "yellow" }
    | { color: "green" };

    function handleTrafficLight(light: TrafficLight): void {
        if (light.color === "red") {
            console.log("Stop! The light is red.");
        } else if (light.color === "yellow") {
            console.log("Caution! The light is yellow.");
        } else {
            console.log("Go! The light is green.");
        }
    }



    type estadoPedido = 
    | { estado: "Preparando"}
    | { estado: "Enviado"}
    | { estado: "Entregado"};


    function manejarEstadoPedido(pedido: estadoPedido): void {
        if (pedido.estado === "Preparando"){
            console.log("El pedido está siendo preparado.");
        } else if (pedido.estado === "Enviado"){
            console.log("El pedido ha sido enviado.");
        } else {
            console.log("El pedido ha sido entregado.");    
        }
    }

    
    type EstadoUsuario =
    | { estado: "activo" }
    | { estado: "inactivo" }
    | { estado: "bloqueado" };

function manejarUsuario(usuario: EstadoUsuario): void {
    if (usuario.estado === "activo") {
        console.log("El usuario está activo.");
    } else if (usuario.estado === "inactivo") {
        console.log("El usuario está inactivo.");
    } else {
        console.log("El usuario está bloqueado.");
    }
}

manejarUsuario({ estado: "activo" });
manejarUsuario({ estado: "inactivo" });
manejarUsuario({ estado: "bloqueado" });



type EstadoExamen =
    | { estado: "pendiente" }
    | { estado: "aprobado" }
    | { estado: "reprobado" };

function manejarExamen(examen: EstadoExamen): void {
    if (examen.estado === "pendiente") {
        console.log("El examen está pendiente.");
    } else if (examen.estado === "aprobado") {
        console.log("El examen fue aprobado.");
    } else {
        console.log("El examen fue reprobado.");
    }
}

manejarExamen({ estado: "pendiente" });
manejarExamen({ estado: "aprobado" });
manejarExamen({ estado: "reprobado" });



type EstadoComputadora =
    | { estado: "encendida" }
    | { estado: "apagada" }
    | { estado: "suspendida" };

function manejarComputadora(computadora: EstadoComputadora): void {
    if (computadora.estado === "encendida") {
        console.log("La computadora está encendida.");
    } else if (computadora.estado === "apagada") {
        console.log("La computadora está apagada.");
    } else {
        console.log("La computadora está suspendida.");
    }
}

manejarComputadora({ estado: "encendida" });
manejarComputadora({ estado: "apagada" });
manejarComputadora({ estado: "suspendida" });

