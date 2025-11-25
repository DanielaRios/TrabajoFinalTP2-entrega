import { getToken } from "../auth/getToken.js";
import { validateToken } from "../auth/validateToken.js";

export const authenticateToken = async (request, response, next) => {
  try {
    const token = getToken(request);

    if (!token) {
      return response.status(401).json({ message: "Token missing" });
    }

    const { isValid, user } = await validateToken(token);

    if (!isValid) {
      return response
        .status(403)
        .json({ message: "Invalid or expired token" });
    }

    // guardamos el user de Supabase en el request para usarlo luego
    request.user = user;

    next();
  } catch (err) {
    console.error("Auth-Middleware error:", err);
    return response.status(500).json({ message: "Internal server error" });
  }
};
