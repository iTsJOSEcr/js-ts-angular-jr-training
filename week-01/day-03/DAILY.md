
## `DAILY.md`

```markdown
# Daily Report - Week 01 Day 03

## ¿Qué hice hoy?

Hoy trabajé con arrays y arrays de objetos en JavaScript.

Practiqué cómo recorrer, buscar, filtrar y transformar información utilizando diferentes métodos de arrays.

Los métodos utilizados fueron:

- `find()`
- `filter()`
- `map()`
- `some()`
- `every()`

También utilicé:

- Ciclos `for`
- La propiedad `length`
- El spread operator `...`
- `console.table()`

## ¿Qué aprendí?

Aprendí que cada método tiene un propósito diferente.

- `find()` busca un solo elemento.
- `filter()` devuelve todos los elementos que cumplen una condición.
- `map()` transforma cada elemento y devuelve un nuevo array.
- `some()` verifica si al menos un elemento cumple una condición.
- `every()` verifica si todos los elementos cumplen una condición.

También aprendí que el spread operator permite copiar un objeto y modificar solamente algunas de sus propiedades.

Ejemplo:

```javascript
return {
    ...producto,
    precio: producto.precio * 1.05
};