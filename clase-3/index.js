//ES6 (2015)
let x = 10
x = 15

const y = 5
// y = 25
let z = 10

console.log(x + y + z)

//Objetos en JS

let persona = {x: "1"}
let persona1 = {nombre: "Pablo", edad: 26, email: "pablopablo@gmail.com", mascota: "Gato"}
let persona2 = {nombre: "Pablo", edad: undefined, email: NaN, mascota: "Gato"}

console.log(persona1.nombre)
console.log(persona1.edad)

persona1.nombre = "Pablo Jose"
console.log(persona1.nombre)

persona1.rutina = "Salir a correr"
console.log(persona1)

//Arrays en JS
const array1 = [1, 2, 3]
const array2 = [1, 2, NaN, "Hola a todos", {1: "celeste", 2: "rojo", 3: "amarillo"}, undefined, true, false, ["conejo", "perro", "pato"]]

console.log(array2)
console.log(array2.length)

//Funciones en JS
//Llamado a la funcion
saludar()

function saludar () {
    console.log("¡aloo!")
}

let saludo = () => {
    //return(console.log("Cómo están?!"))
    console.log("Cómo están?!")
}
//Llamar a la funcion!!!
saludo()
console.log("Saludo: ", saludo())

//Bucles
for(let i = 0; i<array2.length; i++){
    console.log(i)
}

let h = 0

do{
    h += 1
    console.log("H: ", h)
}while(h<100)

//Condicionales en JS
const pi = 3.14

if(pi >= 3.14){
    console.log("Es mayor!")
}else if(pi <= 3.14){
    console.log("Es menor!")
}

const colores = "orange"

switch (colores) {
    case "orange":
        console.log("Es naranja!")
        break;
    case "purple":
        console.log("Es violeta!")
        break;
    case "blue":
        console.log("Es azul!")
        break;
    default:
        console.log("Es otro color!")
        break;
}

//Try, catch
try {
    let sum = x + a
    console.log("SUM: ", sum)
} catch (error) {
    console.log("Ha ocurrido un error. ", error)
}

console.log("Fin")
console.log("Hola de nuevo")
console.log("Hola de nuevo")