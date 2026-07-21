# Week 01 - Day 03

## Tema principal

Trabajo con arrays y arrays de objetos en JavaScript.

## Contenidos estudiados

Durante este día se practicaron los siguientes temas:

- Creación de arrays
- Acceso a elementos por índice
- Propiedad `length`
- Recorrido de arrays con `for`
- Búsqueda de elementos con `find()`
- Filtrado de elementos con `filter()`
- Transformación de arrays con `map()`
- Copia de objetos con el spread operator `...`
- Validaciones con `some()`
- Validaciones con `every()`
- Visualización de arrays de objetos con `console.table()`

## Métodos de arrays

### `find()`

Devuelve el primer elemento que cumple una condición.

Puede devolver:

- Un objeto
- `undefined`

### `filter()`

Devuelve un nuevo array con todos los elementos que cumplen una condición.

### `map()`

Devuelve un nuevo array transformando cada elemento del array original.

### `some()`

Devuelve `true` si al menos un elemento cumple la condición.

### `every()`

Devuelve `true` solamente si todos los elementos cumplen la condición.

## Ejemplo destacado

```javascript
const productosConAumento = productos.map(function(producto) {
    return {
        ...producto,
        precio: producto.precio * 1.05
    };
});