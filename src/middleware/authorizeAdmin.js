import { UsuarioModel } from "../model/usuario.model.js";

export const authorizeAdmin = async (request, response, next) => {
  try {
    const email = request.user?.email; // obtenemos el email del user de Supabase guardado en el request

    if (!email) {
      return response
        .status(403)
        .json({ message: "No se pudo obtener el usuario desde el token" });
    }

    const usuario = await UsuarioModel.findOne({ where: { email } });

    if (!usuario) {
      return response
        .status(403)
        .json({ message: "Usuario no registrado en el sistema RRHH" });
    }

    if (usuario.rol !== "admin") {
      return response
        .status(403)
        .json({ message: "Acceso restringido a usuarios administradores" });
    }

    // por si queremos usarlo despues en controllers
    request.usuario = usuario;

    next();
  } catch (error) {
    console.error("AuthorizeAdmin error:", error.message);
    return response.status(500).json({ message: "Internal server error" });
  }
};
