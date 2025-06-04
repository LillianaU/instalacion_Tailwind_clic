// tipos de identificadores que tiene js
// Variables y contantes
var variable1 = "Hola";//  primera forma mas primitica de crear identificadores
let variable2 = "Hola"; // segunda forma de crear identificadores, mas moderna
const variable3 = "Hola"; // tercera forma de crear identificadores, mas moderna y no se puede cambiar su valor
// Tipos de datos primitivos
let numero = 10; // Number
let texto = "Hola"; // String
let booleano = true; // Boolean
let nulo = null; // Null
let indefinido; // Undefined
let simbolo = Symbol("simbolo"); // Symbol
let objeto = { clave: "valor" }; // Object
// Tipos de datos compuestos
// Arrays
let array = [1, 2, 3, 4, 5]; // Array
// Funciones
let funcion = function (parametro) {
    return parametro * 2; // Function
}
// clases
// estructuras de de datos
// Mapas
// Set
// listas, colas, pilas, diccionarios, etc.
/** ******************************************************************
 *  esta parte camos hacer operaciones sencillas con los tipos de datos
 *  y ver como se comportan los diferentes tipos de datos
 * operaciones con numeros
 * suma, resta, multiplicacion, division, modulo, potencia
 * operaciones con cadenas de texto
 * concatenacion, longitud, mayusculas, minusculas, reemplazo
 * operaciones con booleanos
 * and, or, not
 * operaciones con nulos y indefinidos
 * comparacion, igualdad, desigualdad
 * operaciones con simbolos
 * libreria arimetica que usa js math
 * *******************************************************************
 */
// Operaciones con numeros
let suma,numero1 = 10, numero2 = 5;
suma = numero1 + numero2; // Suma   
console.log("la suma es = ",suma);