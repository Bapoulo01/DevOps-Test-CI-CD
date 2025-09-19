import express from "express";
import ClasseController from "../controllers/ClasseController.js";

const router = express.Router();
router.get("/", ClasseController.getAllClasse);

export default router;