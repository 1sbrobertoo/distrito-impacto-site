// ============================================
// DISTRITO DE IMPACTO - Firebase Configuration
// ============================================
// INSTRUCOES:
// 1. Acesse https://console.firebase.google.com
// 2. Crie um projeto chamado "distrito-impacto"
// 3. Ative Authentication (Email/Senha)
// 4. Ative Firestore Database
// 5. Va em Configuracoes do Projeto > Seus apps > Web
// 6. Copie as credenciais e substitua abaixo
// ============================================

const firebaseConfig = {
  apiKey: "AIzaSyAfBy5ZBW60z5m2be4xq_sruYp1TygpPw0",
  authDomain: "distrito-impacto.firebaseapp.com",
  projectId: "distrito-impacto",
  storageBucket: "distrito-impacto.firebasestorage.app",
  messagingSenderId: "213278484200",
  appId: "1:213278484200:web:352f305ef9827677a08b5d",
  measurementId: "G-CJ67W8PE6B"
};

// Inicializa Firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, getDoc, doc, updateDoc, query, where, orderBy, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js';

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// ============================================
// ESTRUTURA DO BANCO DE DADOS (Firestore)
// ============================================
// Colecao: organizacoes
// Campos:
//   - uid: string (ID do usuario Firebase Auth)
//   - nomeOrganizacao: string
//   - nomeResponsavel: string
//   - email: string
//   - telefone: string
//   - tipo: string (ong | startup | empresa | fundo | academia | poder-publico | outro)
//   - areasTematicas: array (educacao | saude | meio-ambiente | cultura | tecnologia | economia)
//   - regiao: string (Regiao Administrativa do DF)
//   - descricao: string (curta, ate 200 chars)
//   - missao: string (longa)
//   - anoFundacao: number
//   - numeroColaboradores: string
//   - site: string
//   - instagram: string
//   - linkedin: string
//   - estagio: string (ideacao | validacao | operacao | escala)
//   - publicoAlvo: string
//   - ODS: array (numeros dos ODS de 1 a 17)
//   - logoUrl: string
//   - status: string (pendente | aprovado | rejeitado)
//   - criadoEm: timestamp
//   - atualizadoEm: timestamp
// ============================================

// Funcoes utilitarias de autenticacao
export async function registrarUsuario(email, senha) {
  return await createUserWithEmailAndPassword(auth, email, senha);
}

export async function fazerLogin(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha);
}

export async function recuperarSenha(email) {
  return await sendPasswordResetEmail(auth, email);
}

export async function fazerLogout() {
  return await signOut(auth);
}

export function monitorarAuth(callback) {
  return onAuthStateChanged(auth, callback);
}

// Funcoes do banco de dados
export async function salvarOrganizacao(uid, dados) {
  const ref = collection(db, 'organizacoes');
  return await addDoc(ref, {
    uid,
    ...dados,
    status: 'pendente',
    criadoEm: serverTimestamp(),
    atualizadoEm: serverTimestamp()
  });
}

export async function buscarOrganizacaoPorUid(uid) {
  const ref = collection(db, 'organizacoes');
  const q = query(ref, where('uid', '==', uid));
  const snap = await getDocs(q);
  if (snap.empty) return null;
  const doc = snap.docs[0];
  return { id: doc.id, ...doc.data() };
}

export async function atualizarOrganizacao(id, dados) {
  const ref = doc(db, 'organizacoes', id);
  return await updateDoc(ref, {
    ...dados,
    atualizadoEm: serverTimestamp()
  });
}

export async function listarOrganizacoesAprovadas() {
  const ref = collection(db, 'organizacoes');
  const q = query(ref, where('status', '==', 'aprovado'), orderBy('nomeOrganizacao'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function listarTodasOrganizacoes() {
  const ref = collection(db, 'organizacoes');
  const q = query(ref, orderBy('criadoEm', 'desc'));
  const snap = await getDocs(q);
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}
