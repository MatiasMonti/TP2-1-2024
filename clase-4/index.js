//Importación de módulos
//const fs = require('fs')
//"type": "module" -> package.json
import fs from "fs";

try {
  fs.createWriteStream("doc.txt");
} catch (error) {
  console.log("Ha ocurrido un error. ", error);
} finally {
  console.log("----Finally----");
}

//CALLBACKS
function operacionCallback(a, b, cd) {
  return cd(a, b);
}

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;

console.log(operacionCallback(50, 10, suma));

//Manejo de archivos sincrónico
console.log("----INICIO 1----");

function filesystemSync() {
  const data = fs.readFileSync("doc.txt", "utf-8");
  console.log("DATA: ", data);

  fs.writeFileSync("doc.txt", "Hola Mundo!");

  const dataNuevo = fs.readFileSync("doc.txt", "utf-8");
  console.log("dataNuevo: ", dataNuevo);
}

filesystemSync();
console.log("----FIN 1----");

//Manejo de archivos asincrónico
console.log("----INICIO 2----");
//Callbackhell
function filesystemAsync() {
  // let text = "hola"
  // const x = (text) =>
  fs.readFile("doc.txt", "utf8", (texto, error) => {
    if (error) console.log("Error en la operación: filesystemAsync");
    console.log("Texto: ", texto);

    fs.writeFile("doc.txt", "Welcome!", (error) => {
      if (error) console.log("Error en la operación: filesystemAsync");
      console.log("Ok 1.");

      fs.writeFile("doc.txt", "Welcome!", (error) => {
        if (error) console.log("Error en la operación: filesystemAsync");
        console.log("Ok 2.");

        fs.writeFile("doc.txt", "Welcome!", (error) => {
          if (error) console.log("Error en la operación: filesystemAsync");
          console.log("Ok 3.");
        });
      });
    });
  });
}
filesystemAsync();
console.log("----FIN 2----");

//Promesas
console.log("----INICIO 3----");
function readFilePromises() {
  return new Promise((resolve, reject) => {
    fs.readFile("doc.txt", "utf-8", (error, data) => {
      if (error) reject(error);
      else resolve("PROMESA! ", data);
    });
  });
}
//console.log(readFilePromises())
readFilePromises()
  .then((x) => {
    console.log("THEN! ", x);
  })
  .catch((err) => console.log(console.log(err)));

console.log(readFilePromises());
console.log("----FIN 3----");

//ASYNC/AWAIT
console.log("----INICIO 4----");
async function readFileAsyncAwait() {
  // const file1 = await fs.readFile("doc.txt", "utf8")
  // console.log("FILE 1: ", file1)

  const file2 = await fs.promises.readFile("doc.txt", "utf-8");
  console.log("FILE 2: ", file2);
}
readFileAsyncAwait();
console.log("----FIN 4----");
console.log("Fin de las operaciones!");