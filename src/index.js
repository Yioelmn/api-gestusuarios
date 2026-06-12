import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import './config/firebase.js'; // para echar a andar firebase
import usuariosRoutes from './routes/usuarios.js';

const app = express();
const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json()); // para leer lo de front 

// ruta de prueba namas
app.get('/', (req, res)=>{
    res.json({ message: 'API GESTIUSUARIOS ARRIBA'});
});

// enlazamos rutas con:
app.use('/api/usuarios', usuariosRoutes);

app.listen(PORT, () => {
    console.log(`usuarios corriendo en puerto ${PORT}`);
});