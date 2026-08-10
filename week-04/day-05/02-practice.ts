function exhaustiveCheck(value: never): never {
    throw new Error("Estado no soportado.");
}

type EstadoServidor =
    | { estado: "iniciando" }
    | { estado: "activo" }
    | { estado: "apagado" };

function manejarServidor(servidor: EstadoServidor): void {
    if (servidor.estado === "iniciando") {
        console.log("Servidor iniciando.");
    } else if (servidor.estado === "activo") {
        console.log("Servidor activo.");
    } else if (servidor.estado === "apagado") {
        console.log("Servidor apagado.");
    } else {
        exhaustiveCheck(servidor);
    }
}

manejarServidor({ estado: "iniciando" });
manejarServidor({ estado: "activo" });
manejarServidor({ estado: "apagado" });



type EstadoDescarga =
    | { estado: "descargando" }
    | { estado: "pausada" }
    | { estado: "completada" };

function manejarDescarga(descarga: EstadoDescarga): void {
    if (descarga.estado === "descargando") {
        console.log("La descarga está en progreso.");
    } else if (descarga.estado === "pausada") {
        console.log("La descarga está pausada.");
    } else if (descarga.estado === "completada") {
        console.log("La descarga finalizó.");
    } else {
        exhaustiveCheck(descarga);
    }
}

manejarDescarga({ estado: "descargando" });
manejarDescarga({ estado: "pausada" });
manejarDescarga({ estado: "completada" });

// | { estado: "cancelado" }


type EstadoExamen =
    | { estado: "pendiente" }
    | { estado: "aprobado" }
    | { estado: "reprobado" };

function manejarExamen(examen: EstadoExamen): void {
    if (examen.estado === "pendiente") {
        console.log("El examen está pendiente.");
    } else if (examen.estado === "aprobado") {
        console.log("El examen fue aprobado.");
    } else if (examen.estado === "reprobado") {
        console.log("El examen fue reprobado.");
    } else {
        exhaustiveCheck(examen);
        
// else if (examen.estado === "cancelado") {
//     console.log("El examen fue cancelado.");
// }

    }
}

manejarExamen({ estado: "pendiente" });
manejarExamen({ estado: "aprobado" });
manejarExamen({ estado: "reprobado" });
// manejarExamen({ estado: "cancelado" });


// else if (examen.estado === "cancelado") {
//     console.log("El examen fue cancelado.");
// }
