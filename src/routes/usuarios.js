import express from 'express';
import { verificarToken } from '../middleware/authMiddleware.js';

const router = express.Router();

//ruta de prueba
router.get('/perfil', verificarToken, (req, res) => {
    res.json({
        message: 'Acceso autorizado desde backend',
        uid: req.usuario.uid,
        email: req.usuario.email
    });
});

export default router;