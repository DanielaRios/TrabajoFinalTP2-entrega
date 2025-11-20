import express from "express";
import morgan from "morgan";
import EmpleadoRouter from "./router/empleado.router.js";
import apiExternaRouter from "./router/api.externa.router.js";

//inicializamos express
const server = express();
const morgarnModule = morgan(':method :url :status :res[content-length] - :response-time ms');


//servidor permite recibir e interpretar express a cualquier peticion que se le haga por JSON
server.use(express.json());
server.use(morgarnModule); //logging de las peticiones al server

// middleware para api externa
server.use("/api/capacitaciones-externas",apiExternaRouter);

//especifico una ruta y que implemente un router
server.use("/api/empleado", EmpleadoRouter);

//catch-all for error 404
server.use((req, res, next) => {
	res.status(404).send("No está disponible este endpoint: " + req.url);
});

export default server;
