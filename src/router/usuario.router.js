import express from "express";
import { UsuarioController } from "../controller/usuario.controller.js";

const UsuarioRouter = express.Router();

UsuarioRouter.get("/all", UsuarioController.getAllUsuarios);

export default UsuarioRouter;
