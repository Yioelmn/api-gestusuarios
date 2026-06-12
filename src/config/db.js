import pg from 'pg';
import 'dotenv/config';

const { Pool } = pg;

export const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // para la seguridad jj
    }
});

const initDB = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
                id SERIAL PRIMARY KEY,
                nombre VARCHAR(100) NOT NULL,
                apellidos VARCHAR(100) NOT NULL,
                email VARCHAR(255) NOT NULL UNIQUE,
                fecha_nacimiento DATE NOT NULL,
                direccion VARCHAR(255) NOT NULL,
                password VARCHAR(255) NOT NULL,
                rol VARCHAR(50) DEFAULT 'user',
                creado_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
        `);

    } catch (e){
        console.error('Error al inicializar la base de datos', e)
    }
};

initDB();