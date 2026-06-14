import express from 'express';
import { verificarToken } from '../middleware/authMiddleware.js';
import { authController } from '../controller/authController.js';

const router = express.Router();

router.post('/login', authController.login);
//ruta de prueba
router.get('/perfil', verificarToken, (req, res) => {
    res.json({
        message: 'Acceso autorizado desde backend',
        uid: req.usuario.uid,
        email: req.usuario.email
    });
});

export default router;