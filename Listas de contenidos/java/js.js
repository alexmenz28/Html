//imprime un mensaje por consola -1
console.log("hola mundo");
console.log(2+2);

const styles= `
background:linear-gradient(#099e16,#fff,#099e16);
color:#000;
padding: 5px 10px;`;

console.log("%cViva Santa Cruz", styles);

const user =[
    {nombre: "felixicaza", role: "mod", status: "happy"},
    {nombre: "pheralb", role: "mod", status: "porosad"}
];

console.table(user);
console.assert(5<10, "5 no es menor que 10");
console.log(document.body);

//declaración de variables con un valor -2
let name="alex";
let age=21;
let year=2024;

console.log(name, year - age);

//declaración de variable con un valor tipo string -3
let string = 'JavaScript'
let firtsLeter = string[1]
console.log(firtsLeter);

console.log((name.concat(" es mi nombre")));

//concatenación de dos strings -4
let string1 = 'hola';
let string2 = ' mundo';
let resultado = string1.concat(string2);
console.log(resultado);

//declaración de variable booleana con un valor -5
let esVerdadero = true;
console.log(esVerdadero);

let frase = "Hoy casi hubo un golpe de estado";
console.log(frase.includes('golpe'))
console.log(frase.indexOf('e'))

//captura de un valor desde el prompt con el resultado en la consola -6
let valorCapturado = prompt("Por favor, introduce un valor:");
console.log("El valor introducido es: " + valorCapturado);


let aleatorio = Math.floor(Math.random()*11)
console.log(aleatorio)

console.log(Math.max(2 , 4 , 6, 7, 8))

let num1 = 2
let num2 = 2
console.log(num1 == num2);

let cadena1 = null;
let cadena2 = 'Romero';
console.log(`Mi nombre es ${cadena1} y mi apellido es ${cadena2}`)
console.log(2 % 3);

const Pi = 3.14
let radio = 100
const area = Pi * radio * radio
console.log(area)

let n1 = 2
let n2 = 2
let prueba = !(num1 > num2)
console.log(prueba)
console.log(n1++)
console.log(++n1)

let number = 5
number > 0 ? console.log(`${number} es positivo`) : console.log(`${number} es negativo`)

// alert("Hola")
//prompt('Introduce tu nombre', 'tu nombre')
//prompt('Introduce tu edad', 'tu edad')

const now = new Date();
console.log(now);
console.log(now.getDate())

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

let day = 'miercoles'
switch(day){
    case 'lunes':
        console.log(`Es lunes`)
        break
        case 'martes':
            console.log(`Es martes`)
            break
            case 'miercoles':
                console.log(`Es miercoles`)
                break
                case 'jueves':
                    console.log(`Es jueves`)
                    break
                    case 'viernes':
                        console.log(`Es viernes`)
                        break
}

let frio = false
frio 
? console.log('abrigo')
: console.log('polera')

let js = 'JavaScript es increible'
let separado = js.split(' ')
console.log(separado)

//declaración de array y muestra de sus elementos
let pais = ['Bolivia', 'Argentina', 'colombia']
let paises = []
for (let i = 0; i < pais.length; i++) {
    paises.push(pais[i].toUpperCase())
}
console.log(paises);

let i=1;
while(i < 6){
    console.log(i);
    i++;
}

const numeros=[1,2,3,4,5]
for (const num of numeros){
    console.log(num)
}

function multiplicacion(va1, va2){
    let v1 = va1;
    let v2 = va2;
    let resultado = v1 * v2;
    console.log('resultado: ',resultado);
    return res = resultado
}

multiplicacion(2, 2)
