# Week 05 - Day 03

## Fecha

14/08/2026

## Tema

keyof

## Temas estudiados

- `keyof`
- Generics
- `K extends keyof T`
- Acceso dinámico a propiedades
- Seguridad de tipos

## Ejercicios realizados

Se crearon funciones para obtener propiedades de diferentes objetos como:

- Usuarios
- Productos
- Vehículos
- Estudiantes
- Películas
- Cuentas
- Celulares
- Videojuegos
- Pedidos
- Cursos

## Lo aprendido

Aprendí que `keyof` permite obtener las propiedades válidas de un tipo.

También aprendí que:

`K extends keyof T`

significa que `K` solamente puede ser una propiedad que exista dentro de `T`.

Esto permite crear funciones genéricas que acceden a propiedades mediante `object[key]` de forma segura.


