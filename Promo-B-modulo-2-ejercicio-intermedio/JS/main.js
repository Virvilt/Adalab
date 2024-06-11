"use strict";
// ARRAYS   : Con corchetes para poner el valor

const adalabers = ["Alejandra", "Ana", "Eva", "Patri"];

let posicion = 0;

posicion++; //Posición = posición +1. Le suma uno a la posición que queremos
console.log(adalabers[posición]);

console.log(adalabers[0]);

adalabers[4] = "Patricia"; //Cambiar el nombre o el valor del array Patry = Patricia
adalabers[5] = "Victoria"; //Añadir más valores dentro del array

console.log(adalabers);

//ARRAYS LEGNTH

console.log(adalabers.length); //Saber cuantos valores hay en el array.

const miArray = [];

if (miArray.length === 0) {
  //Comprobar en la consola como está tu variable (miArray), esta vacio?
  console.log("Esta vacio");
} else {
  console.log("Tiene Cosas");
}


