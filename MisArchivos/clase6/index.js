import express from 'express'



const app = express();
const PORT = 8080;

const products = [
    {id : 1,type: "mouse", descripcion : "mouse1"},
    {id : 2,type: "teclado", descripcion : "teclado2"},
    {id : 3,type: "mouse", descripcion : "mouse 5"},
    {id : 4,type: "mouse", descripcion : "mouse 7"}
];

app.use(express.static("public"));

 app.get("/products", (req,res)=>{
     res.send(products)
});

app.get("/products/:id", (req,res)=>{
    const {id} = req.params
    const productoId = products.find(p => p.id == id);
    res.send(productoId || `No existe el elemento ${id}`);
});

app.post("/products/", (req,res)=>{
    const producto = req.body;
    const nuevoId = products.length +1;
    const newProduct = {id : nuevoId,type: producto.type, descripcion : producto.descripcion}
    productos.push(newProduct);
    console.log(newProduct)
    res.send("ok");
});

app.listen(PORT, () => console.log(`server listening on http://localhost:${PORT}`))

app.on("Error", (error) => console.log(`Error: ${error}`))