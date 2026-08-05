const city = "Pérez Zeledón";

console.log(city.toUpperCase());
console.log(city.toLowerCase());

const price = 1250.5;

console.log(price.toFixed(2));





function printValue(value: string | number): void {
if (typeof value === "string") {
    console.log(value.toUpperCase());
} else {
    console.log(value.toFixed(2));
}
}


printValue("José");
printValue(15);




function getValueLength(value: string | number): number {
if (typeof value === "string") {
    return value.length;
} else {
    return value.toString().length;
}
}

getValueLength("José");



function parseId(id: string | number): number {
if (typeof id === "string") {
    return parseInt(id);
} else {
    return id;
}
}

console.log(parseId("150"));
console.log(parseId(150));



function formatAmount(amount: string | number): string {
    if (typeof amount === "number") {
        return amount.toFixed(2);
    } else {
        return Number(amount).toFixed(2);
    }
}

console.log(formatAmount(1500));
console.log(formatAmount("89.5"));
console.log(formatAmount("100"));




