let nombre = prompt("Ingrese su nombre:");
let apellido = prompt("Ingrese su apellido:");
let edad = parseInt(prompt("Ingrese su edad:"));

let esMayorEdad = edad >= 18;

let persona = {
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    }
};

alert("Nombre completo: " + persona.nombreCompleto());

if (esMayorEdad) {
    console.log("Es mayor de edad.");
} else {
    console.log("No es mayor de edad.");
}