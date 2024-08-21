//Sugar Syntax

//¿Que es? La utilizacion de operadores avanzados con la idea de simplificar el codigo.

//1) Pantillas literal: las usamos a traves de backticks ``

let nombre = "Adrian Gonzalez"

let trabajo= "profesor super pro"

let mensaje = `${nombre} trabajo de ${trabajo}`

console.log(mensaje)

//2) Operador Ternario: Es una simpleficacion de la estructura if/else.
//Sintaxis: condicion ? codigoSiEsVerdad : codigoSiEsFalso

let llueve= false

console.log( llueve ? "hacer tortas fritas" : "nos vamos a la plaza")

//3) Operador Spread: (...) Operador de propagacion
//Lo usamos con elementos iterables (arrays, objetos), enviando cada uno de sus elementos como parametros a una funcion.

const nombres = ["Juan", "Pedro", "Maria", "Jose"]

console.log(nombres)

console.log(...nombres)

console.log(nombres[0], nombres[1], nombres[2], nombres[3])

let copiaNombres = [...nombres]

console.log(copiaNombres)

//Copiar Objetos:

const alumno = {
    nombre: "Coki",
    apellido: "Argento",
    edad: 37
}

const alumnoDos = alumno

alumnoDos.nombre = "Alesio"
console.log(alumnoDos)
console.log(alumno)

const alumnoTres= {...alumno}

alumnoTres.nombre = "Fatiga"

console.log(alumno)
console.log(alumnoTres)


const a = [1,2,3]
const b = [4,5,6]

const nuevoArray = [...a, ...b]
console.log(nuevoArray)

//4) Desestructuracion de objetos:
//Es una expresion de JS que me permite desempaquetar valores de arrays u objeots en distintas variables

//ejemplo:

const bart= {
    nombre: "Bart",
    apellido: "Simpson",
    edad: 10,
    escuela: "Sprinfield Elementary School"
}



console.log(bart.nombre)

let {nombre:nombrecilio, apellido, edad, escuela} = bart

//let nombrecilio= bart
//let apellido= Simpson
//let edad= 10
//let escuela= 

console.log(nombre)

nombrecilio= "tinki winki"
console.log(nombrecilio)

//Dessutrcuturacion mas profunda:

const producto = {
    nombre : "Celular Samsung",
    precio: 100000,
    disponible: true,
    informacion: {
        peso: "2kg",
        medida: "1mt"
    }
}
//no es necsario poner todas las propiedades
const {nombre: nombreCelular, informacion: {peso, medida}} =producto

console.log(peso)

//Desestructuracion de arrays

let frutas = ["Manzana", "Pera","Naranja", "Quinoto"]

//let [fruta0, fruta1, fruta2, fruta3] = frutas
//console.log(fruta2)

//let [fruta2,fruta3] =frutas
//console.log(fruta2)

let [,,fruta, frutita] = frutas

console.log(frutita)


//FUNCIONES DE ORDEN SUPERIOR

//Una FOS es aquella que recibe por parametro otra funcion o retorna despues de su ejecucion una funcion

class Producto {
    constructor(nombre,precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

}

const fideos = new Producto ("Fideos", 100);
const harina = new Producto ("Harina", 250);
const gaseosa = new Producto ("Coca Cola", 180);
const pan= new Producto ("Pan", 120);

const arrayProductos = [fideos, harina, gaseosa, pan]

console.log(arrayProductos)

//Find: busca un elemento en el array y retorna el primero que cumpla con la condicion

const buscado = arrayProductos.find(item=> item.nombre === "Coca Cola")

console.log (buscado)

//Filter: recibe una funicion comparadora y retorna un nuevo array con los elementos que cumplan con la condicion

const arrayProductosMenos200 = arrayProductos.filter(item=> item.precio < 200)
console.log(arrayProductosMenos200)

//Some: retorna un boleeano si encuenta o no el elemento

let hayFideos= arrayProductos.some(item=> item.nombre === "Fideos")
console.log(hayFideos)

//Map: me permite crear un nuevo array con todos los elementos del original pero transfomados.

//Ejemplo: voy a crear un array de productos pero que ahora tenga el iva incluido

const arrayProductosConIva = arrayProductos.map ( item => {
    return{
        nombre: item.nombre,
        precio: item.precio * 1.21
    }
})

console.log(arrayProductosConIva)
