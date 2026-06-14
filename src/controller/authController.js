import { authService } from '../service/authService.js';

export const authController = {
    registrar: async (req, res) => {
        try {
            const { nombre, apellidos, email, fecha_nacimiento, direccion, password } = req.body;
            if (!nombre || !apellidos || !email || !fecha_nacimiento || !direccion || !password) {
                return res.status(400).json({ error: 'Faltan campos obligatorios en el formulario' }); //
            }

            const nuevoUsuario = await authService.registrar(req.body);

            return res.status(201).json({
                message: 'Usuario registrado exitosamente ✓',
                usuario: nuevoUsuario
            });

        } catch (error) {
            // Manejar si el correo ya existe
            if (error.code === '23505') {
                return res.status(409).json({ error: 'El correo electrónico ya está registrado' }); //
            }
            
            console.error('Error en authController.registrar:', error);
            return res.status(500).json({ error: 'Error al registrar usuarios' });
        }
    },

    login: async (req, res) => {
        try {
            const { correo } = req.body;
            
            if (!correo) {
                return res.status(400).json({ error: 'El correo es requerido' });
            }

            // simulacion de que el perfil se cargó con éxito usando el correo que viene de Firebase
            return res.status(200).json({
                message: 'Sesión sincronizada correctamente',
                usuario: {
                    nombre: "Usuario",
                    apellidos: "Sanos y Salvos",
                    email: correo,
                    direccion: "Santiago, Chile"
                }
            });

        } catch (error) {
            console.error('Error en authController.login:', error);
            return res.status(500).json({ error: 'Error interno en el login del servidor' });
        }
    }

};