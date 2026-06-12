import admin from 'firebase-admin';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const serviceAccount = require('./firebase-keys.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

console.log('firebase inicializado correctamente');

export const auth = admin.auth();