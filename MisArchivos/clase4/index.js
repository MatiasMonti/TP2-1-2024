//importando un modulo
const fs = require("fs");
//necesito     "type": "module" en package.json
//import fs from 'fs'

console.log("Inicio clase 4");

try {    
    const file = fs.createWriteStream("data.txt");
} catch (error) {
    console.log("Salio este error master: ", error)
}
finally{    
    console.log("finally");
}


async function filesystemASync(){
    const data = await fs.readFile("data.txt", "utf-8",  (error, texto) => {
        if(error) {
            console.log("Da error:", error)
        }
        console.log("el texto es:", texto)
    }) 

    await fs.writeFileSync("data.txt", "algo");

    const data2 = fs.readFile("data.txt", "utf-8", (error, texto) => {
         if(error) {
             console.log("Da error:", error)
         }
         console.log("el texto es:", texto)
    })
}
filesystemASync();

console.log("Fin");