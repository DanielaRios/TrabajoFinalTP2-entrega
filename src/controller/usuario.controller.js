import { UsuarioRepository } from "../repository/usuario.repository.js";

export const UsuarioController = {

  getAllUsuarios: async (request, response) => {
    try {
      const usuarios = await UsuarioRepository.getAll();

      response.status(200).json({ usuarios });

    } catch (error) {
      console.log("Error al obtener todos los usuarios", error.message);
      response.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
