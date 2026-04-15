# 🚀 Guia de Configuração do Deploy Automático para Firebase Hosting

Este guia explica como configurar o deploy automático do site Distrito de Impacto para o Firebase Hosting usando GitHub Actions.

## 📚 Índice

1. [Pré-requisitos](#pré-requisitos)
2. [Passo 1: Gerar Service Account no Firebase](#passo-1-gerar-service-account-no-firebase)
3. [Passo 2: Configurar Secret no GitHub](#passo-2-configurar-secret-no-github)
4. [Passo 3: Testar o Deploy](#passo-3-testar-o-deploy)
5. [Troubleshooting](#troubleshooting)

---

## Pré-requisitos

✅ Projeto Firebase criado (distrito-impacto)  
✅ Repositório GitHub configurado  
✅ Arquivos de configuração já criados:
  - `firebase.json`
  - `.firebaserc`
  - `.github/workflows/firebase-hosting.yml`

---

## Passo 1: Gerar Service Account no Firebase

### 1.1 Acessar Firebase Console

1. Acesse [Firebase Console](https://console.firebase.google.com/)
2. Selecione o projeto **distrito-impacto**

### 1.2 Acessar Configurações do Projeto

1. Clique no ícone de **engrenagem** (⚙️) ao lado de "Visão geral do projeto" no menu lateral
2. Selecione **Configurações do projeto**

### 1.3 Navegar até Contas de Serviço

1. Clique na aba **Contas de serviço** (Service accounts)
2. Role a página para baixo até a seção **Firebase Admin SDK**

### 1.4 Gerar Nova Chave Privada

1. Clique no botão **Gerar nova chave privada** ("Generate new private key")
2. Confirme clicando em **Gerar chave** no modal que aparecer
3. Um arquivo JSON será baixado automaticamente

🚨 **IMPORTANTE:** Guarde este arquivo com segurança! Ele contém credenciais sensíveis.

### 1.5 Copiar Conteúdo do Arquivo JSON

1. Abra o arquivo JSON baixado com um editor de texto
2. **Copie TODO o conteúdo** do arquivo (Ctrl+A, Ctrl+C)
3. O arquivo terá um formato parecido com:

```json
{
  "type": "service_account",
  "project_id": "distrito-impacto",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n",
  "client_email": "...",
  "client_id": "...",
  "auth_uri": "...",
  "token_uri": "...",
  "auth_provider_x509_cert_url": "...",
  "client_x509_cert_url": "..."
}
```

---

## Passo 2: Configurar Secret no GitHub

### 2.1 Acessar Configurações do Repositório

1. Vá para o repositório: https://github.com/1sbrobertoo/distrito-impacto-site
2. Clique na aba **Settings** (Configurações)

### 2.2 Navegar até Secrets and Variables

1. No menu lateral esquerdo, procure a seção **Security**
2. Clique em **Secrets and variables**
3. Selecione **Actions**

### 2.3 Criar Novo Repository Secret

1. Clique no botão verde **New repository secret**
2. Preencha os campos:
   - **Name:** `FIREBASE_SERVICE_ACCOUNT`
   - **Secret:** Cole TODO o conteúdo do arquivo JSON que você copiou
3. Clique em **Add secret**

✅ **Pronto!** O secret foi configurado.

---

## Passo 3: Testar o Deploy

### 3.1 Verificar GitHub Actions

1. Vá para a aba **Actions** no repositório
2. Você verá o workflow **Deploy to Firebase Hosting**

### 3.2 Executar Deploy Manual (Opcional)

1. Na aba Actions, clique no workflow **Deploy to Firebase Hosting**
2. Clique no botão **Run workflow**
3. Selecione a branch **main**
4. Clique em **Run workflow**

O GitHub Actions iniciará o processo de deploy automaticamente.

### 3.3 Acompanhar Execução

1. Clique no workflow em execução
2. Clique no job **build_and_deploy**
3. Você verá os logs do processo:
   - Checkout do repositório
   - Deploy para Firebase Hosting

### 3.4 Verificar Site no Firebase

Após o deploy ser concluído com sucesso:

1. Acesse o [Firebase Console](https://console.firebase.google.com/)
2. Vá para **Hosting** no projeto distrito-impacto
3. Você verá o novo deploy listado
4. Acesse a URL fornecida para ver o site ao vivo

---

## 🎉 Deploy Automático Configurado!

A partir de agora, **cada push na branch main** fará deploy automático para o Firebase Hosting!

---

## Troubleshooting

### Erro: "Error: HTTP Error: 403, The caller does not have permission"

**Solução:** Verifique se o Service Account tem permissões adequadas:
1. No Firebase Console > Configurações do Projeto > Contas de Serviço
2. Certifique-se de que a conta tem a função "Editor" ou "Proprietário"

### Erro: "secret not found"

**Solução:** O secret FIREBASE_SERVICE_ACCOUNT não foi configurado corretamente.
1. Verifique se o nome está exatamente como `FIREBASE_SERVICE_ACCOUNT`
2. Certifique-se de ter colado TODO o conteúdo do JSON

### Workflow não executa automaticamente

**Solução:**
1. Verifique se o arquivo `.github/workflows/firebase-hosting.yml` está na branch main
2. Verifique se os Actions estão habilitados: Settings > Actions > General

### Deploy bem-sucedido mas site não atualiza

**Solução:**
1. Limpe o cache do navegador (Ctrl+Shift+R)
2. Verifique o canal de deploy (deve ser "live")
3. Aguarde alguns minutos para propagação do CDN

---

## 🔗 Links Úteis

- [Firebase Console](https://console.firebase.google.com/)
- [Documentação do Firebase Hosting](https://firebase.google.com/docs/hosting)
- [GitHub Actions para Firebase](https://github.com/FirebaseExtended/action-hosting-deploy)
- [Repositório GitHub](https://github.com/1sbrobertoo/distrito-impacto-site)

---

## 📝 Notas Importantes

- 🔒 **NUNCA** compartilhe o arquivo JSON da Service Account publicamente
- 🔒 **NUNCA** faça commit do arquivo JSON no repositório
- ✅ O secret fica criptografado no GitHub e é seguro
- ✅ Cada push na main dispara um novo deploy automaticamente
- ✅ Você pode executar deploys manuais pela aba Actions

---

**Desenvolvido com ❤️ para o Distrito de Impacto**
