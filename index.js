import "dotenv/config";
import express from "express";
import rmRoute from "./routes/guia.route.js";


const app = express();

app.use("/api/dependencias", rmRoute);

const PORT = process.env.PORT || 4372;

app.listen(PORT, () =>{
    console.log("server atento en puerto" + PORT);
});