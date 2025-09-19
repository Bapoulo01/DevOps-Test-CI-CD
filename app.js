import express from "express";

import ClasseRoutes from "./src/routes/classeRoutes.js";
const app = express();

app.use(express.json());

app.get("/", (req, res)=> {
    res.json({message: "Bienvenue"});
})

app.use('/api/classes', ClasseRoutes)





app.listen(3001,()=> {
    console.log("Serveur lance au port 3001");
})
