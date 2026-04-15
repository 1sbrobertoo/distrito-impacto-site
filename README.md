# 🌍 Distrito de Impacto

## Sobre o Projeto

O **Distrito de Impacto** é uma plataforma digital desenvolvida para conectar e mapear organizações do ecossistema de impacto social no Distrito Federal. O projeto visa fortalecer a articulação entre diferentes atores que trabalham com inovação social, sustentabilidade e desenvolvimento comunitário.

🔗 **Website:** [www.distritodeimpacto.com](https://www.distritodeimpacto.com/)

---

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido utilizando tecnologias web modernas e amplamente adotadas:

- **HTML (76.9%)** - Estruturação semântica do conteúdo
- **CSS (11.6%)** - Estilização e design responsivo
- **JavaScript (11.5%)** - Interatividade e funcionalidades dinâmicas
- **Firebase** - Backend as a Service (BaaS) para:
  - Autenticação de usuários
  - Banco de dados em tempo real (Firestore)
  - Hospedagem (Firebase Hosting)

---

## 📁 Estrutura do Projeto

```
distrito-impacto-site/
│
├── assets/
│   ├── css/              # Arquivos de estilização
│   └── js/               # Scripts JavaScript
│       ├── main.js       # Funcionalidades principais
│       └── firebase-config.js  # Configuração do Firebase
│
├── cadastro/             # Página de cadastro de organizações
├── dashboard/            # Painel administrativo
├── data/                 # Dados e arquivos JSON
├── eventos/              # Página de eventos
├── login/                # Página de autenticação
├── manifesto/            # Manifesto do Distrito de Impacto
├── mapeamento/           # Mapeamento público de organizações
├── quem-somos/           # Página institucional
├── recuperar-senha/      # Recuperação de senha
│
├── index.html            # Página inicial
└── INSTRUCOES-FIREBASE.md # Documentação Firebase
```

---

## ⚙️ Funcionalidades

### 🔐 Sistema de Autenticação
- Login e cadastro de usuários
- Recuperação de senha
- Autenticação via Firebase Auth

### 🗺️ Mapeamento de Organizações
- Cadastro de organizações de impacto social
- Visualização pública do mapeamento
- Sistema de aprovação de organizações
- Dados armazenados em Firestore Database

### 📊 Dashboard Administrativo
- Gestão de organizações cadastradas
- Aprovação/edição de perfis organizacionais
- Visualização de métricas

### 📅 Gestão de Eventos
- Divulgação de eventos do ecossistema
- Calendário de atividades

### 📄 Páginas Institucionais
- Manifesto do Distrito de Impacto
- Informações sobre o projeto
- Página "Quem Somos"

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Servidor local (opcional: Live Server, XAMPP, ou Python SimpleHTTPServer)
- Conta Firebase (para funcionalidades de backend)

### Instalação Local

1. **Clone o repositório:**

```bash
git clone https://github.com/1sbrobertoo/distrito-impacto-site.git
cd distrito-impacto-site
```

2. **Configure o Firebase:**

- Acesse o [Firebase Console](https://console.firebase.google.com/)
- Crie um novo projeto ou utilize um existente
- Ative o Firestore Database
- Ative o Firebase Authentication
- Copie as credenciais do Firebase
- Atualize o arquivo `assets/js/firebase-config.js` com suas credenciais

3. **Execute localmente:**

**Opção 1 - Usando Live Server (VS Code):**
```bash
# Instale a extensão Live Server no VS Code
# Clique com botão direito no index.html > "Open with Live Server"
```

**Opção 2 - Usando Python:**
```bash
python -m http.server 8000
# Acesse: http://localhost:8000
```

**Opção 3 - Abrir diretamente:**
```bash
# Abra o arquivo index.html no navegador
```

---

## 🔥 Configuração do Firebase

Consulte o arquivo `INSTRUCOES-FIREBASE.md` para instruções detalhadas sobre:

- Como aprovar organizações
- Configuração do Firestore Database
- Estrutura de dados
- Regras de segurança
- Fluxo completo de aprovação

---

## 🌐 Deploy

O site está hospedado no **GitHub Pages** e pode ser acessado em:
👉 [www.distritodeimpacto.com](https://www.distritodeimpacto.com/)

### Deploy Automático

O projeto utiliza GitHub Pages para deploy automático:
- Cada commit na branch `main` dispara um novo deployment
- O site é atualizado automaticamente
- Deployments visíveis na aba "Deployments" do repositório

---

## 👥 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto é de código aberto e está disponível para uso público.

---

## 📧 Contato

**Desenvolvedor:** Roberto Júnior (@1sbrobertoo)

**Projeto:** [github.com/1sbrobertoo/distrito-impacto-site](https://github.com/1sbrobertoo/distrito-impacto-site)

---

## 🙏 Agradecimentos

Ao ecossistema de impacto social do Distrito Federal e a todas as organizações que fazem parte desta rede.

---

**Desenvolvido com ❤️ para fortalecer o ecossistema de impacto do DF**
