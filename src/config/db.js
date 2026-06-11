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

    } catch (e){
        console.error('Error al inicializar la base de datos', e)
    }
};

initDB();