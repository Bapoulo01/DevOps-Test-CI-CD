import fs from "fs";
import path from "path";

//recreer le dirname
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

 const dataPath = path.join(__dirname, "../data/db.json")

 function getAll(){
    const rawData = fs.readFileSync(dataPath);
    return JSON.parse(rawData);
 }


 const getAllClasse = (req,res)=>{
    const classes = getAll();
    res.status(200).json(classes);
 }

 export default{
    getAllClasse
 }