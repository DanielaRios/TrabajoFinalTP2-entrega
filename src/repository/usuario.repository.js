import { UsuarioModel } from "../model/usuario.model.js";

export const UsuarioRepository = {

  getAll: async () => {
    const usuarios = await UsuarioModel.findAll();
    return usuarios;
  },

};
