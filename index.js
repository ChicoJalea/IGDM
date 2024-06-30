import "dotenv/config";
import express from "express";
import apiRoute from "./routes/api.route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", apiRoute);

const PORT = process.env.PORT || 4372;

app.listen(PORT, () => {
  console.log(`server corriendo en puerto http://localhost:${PORT}`);
});
