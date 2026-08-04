function identity<T>(value: T): T {
    return value;
}

console.log(identity("Hola"));
console.log(identity(50));
console.log(identity(true));




function duplicate<T>(value: T): T {
    return value;
} 


console.log(duplicate("José"));
console.log(duplicate(100));
console.log(duplicate(false));




function first<T>(a: T, b: T): T {
    return a;
}


console.log(first("Hola", "Mundo"));
console.log(first(10, 20));
console.log(first(true, false));


function second<T>(a: T, b: T): T {
    return b;
}

console.log(second("Hola", "Mundo"));
console.log(second(10, 20));
console.log(second(true, false));




function createArray<T>(value: T): T[] {
    return [value];
}

console.log(createArray("TypeScript"));
console.log(createArray(100));
console.log(createArray(true));



function createPair<T>(firstValue: T, secondValue: T): T[] {
    return [firstValue, secondValue];
}

console.log(createPair("JS", "TS"));
console.log(createPair(10, 20));
console.log(createPair(true, false));




function getLast<T>(items: T[]): T | undefined {
    return items[items.length - 1];
}


console.log(getLast(["JS", "TS", "Angular"]));
console.log(getLast([10, 20, 30]));
console.log(getLast([true, false]));
console.log(getLast([]));



function swap<T>(first: T, second: T): T[] {
    return [second, first];
}

console.log(swap("JS", "TS"));
console.log(swap(10, 20));
console.log(swap(true, false));



function repeat<T>(value: T, times: number): T[] {
    return Array(times).fill(value);
}

console.log(repeat("Hello", 3));




function wrap<T>(value: T): { value: T } {
    return { value };
}

console.log(wrap("Wrapped Value"));