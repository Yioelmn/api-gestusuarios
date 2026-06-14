import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import path from 'path';
import fs from 'fs';

const configPath = process.env.FIREBASE_CONFIG_PATH 
  ? process.env.FIREBASE_CONFIG_PATH 
  : path.join(process.cwd(), 'src', 'config', 'firebase-keys.json');

let firebaseAuth;
let firestoreDb;

try {
  const jsonRaw = fs.readFileSync(configPath, 'utf8');
  const serviceAccount = JSON.parse(jsonRaw);

  initializeApp({
    credential: cert(serviceAccount)
  });

  firebaseAuth = getAuth();
  firestoreDb = getFirestore();
  
  console.log(`FIREBASE INICIALIZADO CON EXITO`);

} catch (error) {
  console.error("ERROR AL INICIALIZAR FIREBASE:", error.message);
}

export const auth = firebaseAuth;
export const db = firestoreDb;