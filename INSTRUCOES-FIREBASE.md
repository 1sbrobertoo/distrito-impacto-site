# 🔥 INSTRUÇÕES - CONFIGURAÇÃO FIREBASE

## Distrito de Impacto - Sistema de Autenticação

---

## 📋 Passos para Ativar o Sistema

### 1️⃣ Criar Projeto Firebase

1. Acesse: **https://console.firebase.google.com**
2. Clique em **"Adicionar projeto"**
3. Nome do projeto: `distrito-impacto`
4. Desative o Google Analytics (opcional)
5. Clique em **"Criar projeto"**

---

### 2️⃣ Ativar Authentication (Autenticação)

1. No menu lateral, clique em **"Authentication"**
2. Clique em **"Vamos começar"**
3. Na aba **"Sign-in method"**, ative:
   - ✅ **E-mail/Senha**
4. Salve

---

### 3️⃣ Ativar Firestore Database (Banco de Dados)

1. No menu lateral, clique em **"Firestore Database"**
2. Clique em **"Criar banco de dados"**
3. Escolha: **"Iniciar no modo de produção"**
4. Localização: `southamerica-east1` (São Paulo)
5. Clique em **"Ativar"**

#### Configurar Regras de Segurança:
Na aba **"Regras"**, substitua o conteúdo por:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Permitir leitura de organizações aprovadas (público)
    match /organizacoes/{orgId} {
      allow read: if resource.data.status == 'aprovado';
      
      // Permitir que usuário autenticado crie seu próprio documento
      allow create: if request.auth != null && request.resource.data.uid == request.auth.uid;
      
      // Permitir que usuário edite apenas seu próprio documento
      allow update: if request.auth != null && resource.data.uid == request.auth.uid;
    }
  }
}
```

Clique em **"Publicar"**.

---

### 4️⃣ Copiar Credenciais do Firebase

1. Clique no ícone de **engrenagem** (⚙️) no menu lateral > **"Configurações do projeto"**
2. Role até **"Seus apps"**
3. Clique no ícone **"</>"** (Web)
4. Apelido do app: `distrito-impacto-web`
5. **NÃO** marque "Firebase Hosting"
6. Clique em **"Registrar app"**
7. Copie as credenciais que aparecem:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "distrito-impacto.firebaseapp.com",
  projectId: "distrito-impacto",
  storageBucket: "distrito-impacto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

---

### 5️⃣ Atualizar o Código

1. Vá para o arquivo: **`assets/js/firebase-config.js`**
2. Nas **linhas 15-20**, substitua os valores:

```javascript
const firebaseConfig = {
  apiKey: "COLE_SUA_API_KEY_AQUI",
  authDomain: "COLE_SEU_AUTH_DOMAIN_AQUI",
  projectId: "COLE_SEU_PROJECT_ID_AQUI",
  storageBucket: "COLE_SEU_STORAGE_BUCKET_AQUI",
  messagingSenderId: "COLE_SEU_MESSAGING_SENDER_ID_AQUI",
  appId: "COLE_SEU_APP_ID_AQUI"
};
```

Por:

```javascript
const firebaseConfig = {
  apiKey: "AIza..." // COLE SUA API KEY AQUI
  authDomain: "distrito-impacto.firebaseapp.com",
  projectId: "distrito-impacto",
  storageBucket: "distrito-impacto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

3. Salve e faça commit no GitHub

---

## ✅ Testar o Sistema

### Teste de Cadastro:
1. Acesse: `https://1sbrobertoo.github.io/distrito-impacto-site/cadastro/`
2. Preencha o formulário
3. Clique em "Criar conta"
4. Verifique no Firebase Console > Authentication se o usuário foi criado
5. Verifique no Firestore Database se a organização foi salva

### Teste de Login:
1. Acesse: `https://1sbrobertoo.github.io/distrito-impacto-site/login/`
2. Faça login com o e-mail e senha criados
3. Você será redirecionado para o **Dashboard**

### Teste de Dashboard:
1. Edite as informações da organização
2. Clique em "Salvar alterações"
3. Verifique no Firestore se os dados foram atualizados

---

## 📊 Estrutura do Banco de Dados

### Coleção: `organizacoes`

Cada documento representa uma organização:

```json
{
  "uid": "abc123xyz" // ID do usuário Firebase Auth
  "nomeOrganizacao": "Instituto Exemplo",
  "nomeResponsavel": "João Silva",
  "email": "joao@exemplo.com",
  "telefone": "(61) 99999-9999",
  "tipo": "ong",
  "regiao": "Brasília",
  "descricao": "Descrição breve...",
  "status": "pendente", // pendente | aprovado | rejeitado
  "criadoEm": Timestamp,
  "atualizadoEm": Timestamp
}
```

---

## 🔐 Como Aprovar Organizações

1. Acesse o **Firestore Database** no console
2. Entre na coleção **`organizacoes`**
3. Clique no documento da organização
4. Edite o campo **`status`** de `"pendente"` para `"aprovado"`
5. Salve

**Pronto!** A organização agora aparece no mapeamento público.

---

## 🚀 Fluxo Completo

```
1. Organização se cadastra → Firebase Auth cria usuário → Firestore salva dados (status: pendente)
2. Admin aprova no console → Muda status para "aprovado"
3. Mapeamento público carrega apenas organizações aprovadas
4. Organização faz login → Acessa dashboard → Edita perfil
```

---

## 📞 Próximos Passos

Quando enviar as **perguntas detalhadas do formulário de mapeamento**, podemos expandir:
- Campos adicionais no Firestore (missão, ano fundação, ODS, etc.)
- Formulário completo no dashboard
- Filtros avançados no mapeamento

---

🎉 **Sistema pronto para funcionar!**
