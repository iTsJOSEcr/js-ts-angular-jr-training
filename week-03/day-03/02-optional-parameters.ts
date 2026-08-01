function greet(name?: string): void {
    console.log(`Hola ${name ?? "invitado"}`);
}

greet("José");
greet();



function createCharacter(
    name: string,
    weapon?: string
): void {
    console.log(
        `${name} usa ${weapon ?? "sus puños"}`
    );
}

createCharacter("Arthur", "Revolver");
createCharacter("John");



function calculateArea(
    width: number,
    height?: number
): number {
    return width * (height ?? width);
}

console.log(calculateArea(5));
console.log(calculateArea(5, 10));


function createPlayer(
    name: string,
    team?: string
): void {
   console.log(`${name} juega para ${team ?? "un equipo no asignado"}`);
}

createPlayer("Messi", "Inter Miami");
createPlayer("Cristiano");
