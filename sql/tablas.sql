CREATE TABLE IF NOT EXISTS usuarios (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    auth_user_id VARCHAR(255) NOT NULL,      -- id del usuario en Supabase Auth
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    rol ENUM('admin', 'rrhh') NOT NULL       -- rol dentro del sistema
);

-- cuando hagamos el signup con Supabase, vamos a guardar acá el auth_user_id, email, nombre y rol.

-- USUARIOS DE EJEMPLO- Los auth_user_id son strings cualquiera por ahora (luego seran los reales de Supabase).
INSERT INTO usuarios (auth_user_id, nombre, apellido, email, rol)
VALUES
  ('supabase_uid_001', 'Daniela', 'Ríos', 'daniela.rios@empresa.com', 'admin'),

  ('supabase_uid_002', 'Lucía', 'Martínez', 'lucia.martinez@empresa.com', 'rrhh'),
  ('supabase_uid_003', 'Mariano', 'Pérez', 'mariano.perez@empresa.com', 'rrhh'),
  ('supabase_uid_004', 'Carla', 'Gómez',  'carla.gomez@empresa.com', 'rrhh'),
  ('supabase_uid_005', 'Sofía', 'Fernández', 'sofia.fernandez@empresa.com', 'rrhh');
  
  -- 1 admin y 4 rrhh
