//Mostrar Info en consola.

console.log("Hola Mundo de perras")

/****Variables****/

//Enteros

var numero = 5;
console.log(numero)

//Floats

var miVariable = 5.25;
console.log(miVariable)

//Texto

var texto = "Hola Mundo";
console.log(texto)

//booleano

var verdadero = true;
var falso = false;
console.log(verdadero)
console.log(falso)

//null

var nulo = null;
console.log(nulo)

//Concatenaciones

var cadena = "Hola";
var cadena2 = "Mundo";
console.log(cadena + " " + cadena2)

//Formas modernas

let miVariable2;
const miVariable3 = 3;

var edad =24;
console.log("Mi edad es " + edad)

edad = 12;
console.log("Mi edad es " + edad)

//Forma correcta de usar un const

const miVariable1 = 3;
console.log("El valor de mi constante es " + miVariable1)

//Forma incorrecta

miVariable1 = 2;
console.log("El valor de mi constante es " + miVariable1) 

//Operaciones

var resultado = 2 + 2;
console.log("El resultado es " + resultado)

var op1 = 2
var op2 = 3

var resultado = op1 + op2
console.log("El resultado es " + resultado)

/* Condicionales */

let miNumero =  6
let miNombre = "Williams"

let resultadoPregunta = miNumero == 7
console.log(resultadoPregunta)

if (miNombre === "Williams")
{
    console.log("Si es williams")
}
else
{
    console.log("No, es igual a otro nombre")
}

let miNumero2 = 0
if (miNumero2 > 0){
    console.log("mi numero es positivo")
} else if (miNumero2 === 0){
    console.log("mi numero es cero")
}else {
    console.log("mi numero es negativo")
}

/* Bucles */

let contador = 1
while(contador <= 10){
    console.log(contador)
    contador = contador + 1
}

for (let i = 0; i < 10; i++){
    console.log(i)
}

/* Funciones */

function saludar(nombre, edad){
    console.log("Hola, mi nombre es " + nombre)
    console.log("y mi edad es " + edad)
}

saludar("Jose", 20);

function multiplicar(num1, num2){
    let resultado = num1 * num2;
    return resultado;
}

let recibidor = multiplicar(2, 5);
console.log(recibidor)

/* Arreglos */

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < 4; i++) {
    console.log("Accediendo al indice: " + i)
    let Mostrar = arreglo[i];
    console.log(Mostrar)
}

/* Objetos */

let persona = {
    nombre : "Karen",
    edad : 30,
    masculino : true
};

console.log(persona.nombre)
