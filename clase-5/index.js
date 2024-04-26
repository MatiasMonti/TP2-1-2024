const fs = require("fs"); //Type: common JS
const express = require("express"); //Type: common JS
import fs from "fs"; //Type: module
import http from "http";
import express from "express";

const date = new Date();
console.log(date);
console.log(date.getHours(), date.getMinutes(), date.getSeconds());
console.log(date.toLocaleString());

console.log("----Inicio----");
//Se repite en cada x segundos/tiempo
setInterval(() => console.log(new Date().toLocaleString()), 3000);

//Aplica un delay y se ejecuta una sola vez
setTimeout(() => console.log(new Date().toLocaleString()), 6000);

const server = http.createServer(async (req, res) => {
  //REQ: es el objeto de requerimiento
  //RES: es el objeto de respuesta
  //GET, PUT/PATCH, POST, DELETE

  const url = req.url;
  const method = req.method;
  console.log(req);

  // desestructuración de objetos
  const { url: url, method: method } = req;
  const { url: url2, method: metodo } = req;
  console.log(url2, metodo);

  if (metodo === "GET") {
    //Promesas
    fs.promises
      .readFile("./public/index.html")
      .then((data) => {
        res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
        res.end(data);
      })
      .catch((error) => {
        res.writeHead(404, { "content-type": "text/html;charset=utf-8" });
        res.end("ERROR 404!!! ", error);
      });

    //Async-await
    try {
      const data = await fs.promises.readFile("./public/index.html");
      res.writeHead(200, { "content-type": "text/html;charset=utf-8" });
      res.end(data);
    } catch (error) {
      res.writeHead(404, { "content-type": "text/html;charset=utf-8" });
      res.end("ERROR 404!!! ", error);
    }
  }
});

server.listen(8080, () =>
  console.log("Server listening on http://localhost:8080")
);
server.on("error", (error) => console.log(`Error: ${error}`));

//npm install -> para descargar las depencias externas
const app = express();
app.use(express.static("public"));

app.get("/sarasa", (req, res) => {
  res.send("<h1>Tuki<h1/>");
});

app.get("/", (req, res) => {
  const page = fs.promises.readFile("./public/index.html");
  res.send(page);
});

const PORT = 8080;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
app.on("error", (error) => console.log(`Error: ${error}`));
