// Creacion de string (Cadenas de texto)(Conjunto de caracteres)
const primeraOpcion = 'Comillas simples'
const segundaOpcion = 'Comillas simples'
const terceraOpcion = 'Comillas simples'

// 1. Concatenación: opción +
const direccion = 'Calle falsa 123'
const ciudad = 'Madrid'
const direccionCompleta = 'Mi dirección es' + direccion + ciudad
console.log(direccionCompleta)

const direccionCompletaConEspacio = 'Mi dirección completa es ' + direccion + ' ' + ciudad
console.log(direccionCompletaConEspacio)

// 2. Concatenación: Template Literals. Cambio de comillas para añadir variables intermente.
const name = 'Carlota'
const location = 'la playa'
const presentacion = `Hola, soy ${name} y estoy en ${location}`
console.log(presentacion)

// 3. Concatenación: join()
const primeraParte = 'Me encanta'
const segundaParte = 'ir a'
const terceraParte = 'la montaña'
const pensamiento = [primeraParte, segundaParte, terceraParte]
console.log(pensamiento.join('🏔️'))

// 4. Concatenación: concat()
const hobbies1 = 'jugar'
const hobbies2 = 'leer'
const hobbies3 = 'estudiar'
const hobbies4 = 'pintar'
const hoddies = 'Mis hobbies son: '.concat(hobbies1, ',', hobbies2, ',', hobbies3, ',', hobbies4)
console.log(hoddies)

//Caracteres de Escape
//const whatDoIDo = 'I'm Graphic DEsigner' (Repetimos comillas, no vale)

// 1. Escape alternativo
const escapeAlternativo = "I'm Graphic Designer"

// 2. Barra invertida
const escapeBarraInvertida = 'I\'m Grapgic Designer'

//3. Template literals
const escapeComillaInvertida = `I'm Software Engineer`

// Escritura de Strings Largos
/*
    Las rosas son rojas
    Las violetas son azules
    Caracter inesperado,
    En la linera 86.
*/

const poema = 'Las rosas son rojas, \n' + 
              'Las violetas son azules \n' +
              'Caracter inesperado, \n' +
              'En la linera 86.'
console.log(poema)