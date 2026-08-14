# Week 05 - Day 03 - keyof

## Objetivo

Aprender a utilizar `keyof` en TypeScript para obtener las propiedades válidas de un tipo y combinarlo con generics para acceder de forma segura a propiedades de diferentes objetos.

## Temas vistos

- `keyof`
- Generics
- `K extends keyof T`
- Acceso a propiedades con `object[key]`
- Validación de propiedades existentes
- Funciones genéricas reutilizables

## Ejercicios realizados

- `getProperty`
- `readProperty`
- `getCarProperty`
- `getEmpleadoProperty`
- `getStudentProperty`
- `getMovieProperty`
- `readAccountProperty`
- `getPhoneProperty`
- `getGameProperty`
- `getOrderProperty`
- `getCourseProperty`
- `getVehicleProperty`

## Resultado

Se desarrollaron funciones genéricas capaces de leer propiedades de diferentes objetos utilizando `K extends keyof T`.

TypeScript permite únicamente propiedades existentes en el objeto, evitando errores al intentar acceder a propiedades inválidas.


