//imprime un mensaje por consola -1
console.log("hola");
console.log(2+2);

//declaración de variables con un valor -2
let name="alex";
let age=21;
let year=2024;
console.log(name, year - age);


//declaración de variable con un valor tipo string -3
let string = 'JavaScript'
let firtsLeter = string[1]
console.log(string);

//concatenación de dos strings -4
let string1 = 'hola';
let string2 = ' mundo';
let resultado = string1.concat(string2);
console.log(resultado);

//declaración de variable booleana con un valor -5
let esVerdadero = true;
console.log(esVerdadero);

//captura de un valor desde el prompt con el resultado en la consola -6
let valorCapturado = prompt("Por favor, introduce un valor:");
console.log("El valor introducido es: " + valorCapturado);

//condición if para verificar un valor -7
let par = 0;
let vari = 3;
if(vari == par)
{
    console.log(`${vari} es 0`)
}
else if(vari % 2 == 0){
    console.log(`${vari} es par`)
}
else{
    console.log(`${vari} es impar`)
}

//declaración de array y muestra de sus elementos -8
let miArray = ["manzana", "banana", "cereza", "durazno"];
console.log(miArray[1]); 

//bucle for para iterar sobre un array -9
let array = ["a", "b", "c", "d"];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// bucle while para contar de 1 a 5   -10
let contador = 1;
while (contador <= 5) {
    console.log(contador);
    contador++;
}

// Declaración de la función que suma dos números -11
function sumar(a, b) {
    return a + b;
}
let res = sumar(3, 4);
console.log(res); 

//callback para ejecutar una función después de otr -12
function primeraFuncion(callback) {
    console.log("Primera función ejecutada.");
    callback();
}
function segundaFuncion() {
    console.log("Segunda función ejecutada.");
}
primeraFuncion(segundaFuncion);

//clase con un constructor y un método -13
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    }
}
let persona1 = new Persona("Juan", 30);
persona1.saludar(); 
