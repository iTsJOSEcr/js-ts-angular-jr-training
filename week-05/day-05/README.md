# Week 05 - Day 05 - API Responses

## Objetivo

Aprender a manejar respuestas de APIs en TypeScript utilizando tipos genéricos, Promise, async y await.

## Temas vistos

- Promise
- async
- await
- ServiceResult
- ApiResponse
- Respuestas de éxito y error
- Objetos y arreglos dentro de Promise
- Funciones fetch simuladas

## ServiceResult

ServiceResult permite representar si una operación fue exitosa o si ocurrió un error.

Cuando la operación es exitosa devuelve los datos y cuando falla devuelve un mensaje de error.

## ApiResponse

ApiResponse permite definir una estructura reutilizable para las respuestas de una API.

Puede contener datos, un mensaje y un código de estado.

## Promise

Promise representa un valor que estará disponible cuando termine una operación asíncrona.

Se practicaron Promise con string, number, boolean, objetos y arreglos.

## Práctica

Se realizaron ejemplos con usuarios, productos, empleados y cursos.

También se crearon funciones asíncronas como fetchCourses, fetchProducts y fetchEmployee.

## Resultado

Se aprendió a tipar respuestas de APIs utilizando generics y Promise, además de manejar operaciones asíncronas con async y await.

