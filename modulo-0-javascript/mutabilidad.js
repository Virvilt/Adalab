//Tipo de dato primitivo (Numeros, textos y buleano (singular)) - Inmutable
let number = 23
number = number + 10
console.log(number)

let esVerdadero = true
esVerdadero = false
console.log(esVerdadero)

//Tipo de dato completo (para datos complejos utilizamos corchetes. Tienen varias propiedades) - Mutable
let user = { name: 'Andy', age:number }
user.age = 20
console.log(user)

//Array. (Numeros, textos y buleano (Plural)) Tipo de dato que contiene muchas cosas.
let frutas = ['manzana', 'pera']
frutas [0] = 'sandia'
console.log(frutas)


//Funciones. Conjunto de instrucciones encapsuladas. 
function changeName (object) {
    object.name = 'New Name'
}

let person = { name: 'Buzz'}
console.log(person)
changeName(person)

console.log(person)