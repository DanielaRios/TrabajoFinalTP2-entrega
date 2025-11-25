import express from "express";
import { UsuarioController } from "../controller/usuario.controller.js";
import { authorizeAdmin } from "../middleware/authorizeAdmin.js";
import { authenticateToken } from "../middleware/authentication.js";

const UsuarioRouter = express.Router();

UsuarioRouter.get("/all",authenticateToken, authorizeAdmin, UsuarioController.getAllUsuarios);

export default UsuarioRouter;
