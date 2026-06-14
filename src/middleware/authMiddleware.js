import { auth } from '../config/firebase.js';

export const verificarToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Acceso denegado, token inválido o ausente' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decodedToken = await auth.verifyIdToken(token);
        
        req.usuario = decodedToken; 
        
        next(); 
    } catch (e) {
        console.error('Error al verificar token:', e);
        return res.status(403).json({ error: 'Token inválido o expirado' });
    }
};