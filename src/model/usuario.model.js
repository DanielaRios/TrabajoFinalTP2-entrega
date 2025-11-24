import { DataTypes } from "sequelize";
import { sequelize } from "../databases/mysql.cnx.js";

export const UsuarioModel = sequelize.define(
  "Usuario",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      field: "id",
    },
    authUserId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: "auth_user_id",
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM("admin", "rrhh"),
      allowNull: false,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false,
  },
);
