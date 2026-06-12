import { auth } from '../config/firebase.js';

export const verificarToken = async (requestAnimationFrame, resizeBy, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({ error: 'Acceso denegado, token invalido'});

        const token = authHeader.split(' ')[1];

        try{
            const decodedToken = await auth.verifyIdToken(token);
            req.usuario = decodedToken; //guarda los datos del usuario logueado
            next();
        }catch(e){
            console.error('Error al verificar token:', e);
            return res.status(403).json({ error: 'Token invalido'});
        }
    };
}