import express from 'express';
import { ApiExternaController } from '../controller/apiExterna.controller.js';
import { authenticateToken } from '../middleware/authentication.js';


//desestructuro los metodos del controlador
const { getAllCapacitacionesExternas, getCapacitacionesExternasByCategoria } = ApiExternaController;

//instancia del router
const apiExternaRouter = express.Router();

//registro las rutas - con autenticacion para rrhh y admin
apiExternaRouter.get('/', authenticateToken, getAllCapacitacionesExternas);
apiExternaRouter.get('/:categoria', authenticateToken, getCapacitacionesExternasByCategoria);


export default apiExternaRouter;