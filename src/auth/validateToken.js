import SupaBaseConnection from "../databases/supabase.cnx.js";

const supabase = SupaBaseConnection.connect();

export const validateToken = async (token) => {
  try {
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(token);

    if (error || !user) {
      return { isValid: false, user: null };
    }

    return { isValid: true, user }; //devolviendo también el user para poder buscar el rol en la tabla usuarios

  } catch (error) {
    console.error("Error al validar token:", error.message);
    return { isValid: false, user: null }; 
  }
};
