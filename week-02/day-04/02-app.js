import { fetchUsers, saveUser } from "./01-users.js";

async function main() {

    try {

        console.log("Obteniendo usuarios...\n");

        const usuarios = await fetchUsers();

        console.log(usuarios);

        console.log("\nGuardando usuario...\n");

        const mensaje = await saveUser({
            nombre: "Carlos"
        });

        console.log(mensaje);

        console.log("\nLista actualizada:\n");

        const listaActualizada = await fetchUsers();

        console.log(listaActualizada);

    } catch (error) {

        console.log("Error:", error);

    }

}

main();