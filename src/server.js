import express from "express";
import morgan from "morgan";
import EmpleadoRouter from "./router/empleado.router.js";
import apiExternaRouter from "./router/api.externa.router.js";
import UsuarioRouter from "./router/usuario.router.js";

//instancio express
const server = express();
const morgarnModule = morgan(':method :url :status :res[content-length] - :response-time ms');

//middlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgarnModule); //logging de las peticiones al server

// middleware para api externa
server.use("/api/capacitaciones-externas",apiExternaRouter);

//middleware para CRUD de empleados
server.use("/api/empleado", EmpleadoRouter);

// middleware para usuarios (solo admin)
server.use("/api/usuario", UsuarioRouter);


//catch-all for error 404
server.use((req, res, next) => {
	res.status(404).send("No está disponible este endpoint: " + req.url);
});

export default server;
