# Week 05 - Day 02

## Fecha

12/08/2026

## Tema

Generic Constraints

## Temas estudiados

- Generics
- Generic Constraints
- `extends`
- Restricciones de propiedades
- Constraints mínimos

## Ejercicios realizados

Se crearon diferentes funciones genéricas que reciben objetos con propiedades obligatorias.

Se practicaron constraints con propiedades como:

- `id`
- `code`
- `name`
- `email`
- `price`
- `active`
- `stock`

## Lo aprendido

Aprendí que un Generic Constraint permite utilizar un tipo genérico pero estableciendo requisitos mínimos.

Por ejemplo:

`T extends { id: number }`

significa que `T` puede representar diferentes objetos, pero todos deben tener una propiedad `id` de tipo `number`.

También aprendí que no es necesario colocar todas las propiedades del objeto dentro del constraint, sino solamente las propiedades que la función necesita utilizar.

