let id: string | number;

id = 100;
id = "100";


let value: string | number;

value = "José";
console.log(value);

value = 100;
console.log(value);


let value2: string | boolean;

value2 = "Hola";
console.log(value2);

value2 = true;
console.log(value2);


function showPrice(price: number | string): void {
    console.log(`El precio es: ${price}`);
}

showPrice(100);
showPrice("1500");


function searchUser(user: string | number): void {
    console.log(`Buscando: ${user}`);
}

searchUser(100);
searchUser("José");


function showData(data: number[] | string): void {
    console.log(`Los datos son: ${data}`);
}

showData([10, 20, 30]);
showData("No hay datos");


