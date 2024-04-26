import express from 'express'
import fs from 'fs'

//setTimeout(() => console.log(new Date().toLocaleString()),5000);
//setInterval(() => console.log(new Date().toLocaleString()),5000);

const app = express()

app.get("/", (req, res)=>{
    //res.send("tuki");
    

})

const PORT =  8080;
app.listen(PORT, ()=> console.log("server listening to:", PORT));
app.on("error", (error) => console.log("error:", error))
