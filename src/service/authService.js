import bcrypt from 'bcryptjs';

export const authService = {
    registrar: async(userData) => {
        const { nombre, apellido, email, fecha_nacimiento, direccion, password} = userData;

        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const query = `
            INSERT INTO usuarios (nombre, apellidos, email, fecha_nacimiento, direccion, password)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, nombre, apellidos, email, rol, creado_at;
        `;

        const values = [nombre, apellido, email, fecha_nacimiento, direccion, hashedPassword];
        const { rows } = await pool.query(query, values);

        return rows[0];
    }
};