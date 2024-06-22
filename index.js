import "dotenv/config";
import express from "express";

const app = express();

app.get("/",(req,res)=>{
    res.json({message:  "hola mundo"});
});

const PORT = process.env.PORT || 4372;

app.listen(PORT, () =>{
    console.log("server conectado en" + PORT);
});