
const usuario = {
    edad: null
};

const edad = usuario.edad ?? 18;

console.log("Edad:", edad);



const producto = {
    descuento: undefined
};

const descuento = producto.descuento ?? 0;

console.log("Descuento:", descuento);


const configuracion = {};

const idioma = configuracion.idioma ?? "Español";

console.log("Idioma:", idioma);

const inventario = {
    stock: 0
};

const stock = inventario.stock ?? 10;

console.log("Stock:", stock);



const permisos = {
    administrador: false
};

const administrador = permisos.administrador ?? true;

console.log("Administrador:", administrador);



const perfil = {
    biografia: ""
};

const biografia = perfil.biografia ?? "Sin biografía";

console.log("Biografía:", biografia);