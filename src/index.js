import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(cors());
app.use(express.json()); // para leer lo de front 

// ruta de prueba namas
app.get('/', (req, res)=>{
    res.json({ message: 'API GESTIUSUARIOS ARRIBA'});
});

app.listen(PORT, () => {
    console.log(`usuarios corriendo en puerto ${PORT}`);
});