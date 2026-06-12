import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import fs from 'fs';
import { URL } from 'url';

// se le dice donde esta la key de manera especifica, sin esto no me dejaba inicializar
const jsonPath = new URL('./firebase-keys.json', import.meta.url);
const serviceAccount = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// se inicializa firebase usando la función directa 'cert' que exporta la v14 de Firebase
initializeApp({
  credential: cert(serviceAccount)
});

console.log('Firebase Admin inicializado correctamente en el Backend ✓');

// se exportamos el módulo auth llamando directamente a getAuth()
export const auth = getAuth();