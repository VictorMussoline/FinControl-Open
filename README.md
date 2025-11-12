# 💰 FinControl-Open

![GitHub repo size](https://img.shields.io/github/repo-size/VictorMussoline/FinControl-Open)
![GitHub license](https://img.shields.io/github/license/VictorMussoline/FinControl-Open)
![GitHub last commit](https://img.shields.io/github/last-commit/VictorMussoline/FinControl-Open)
![GitHub issues](https://img.shields.io/github/issues/VictorMussoline/FinControl-Open)
![GitHub stars](https://img.shields.io/github/stars/VictorMussoline/FinControl-Open?style=social)

---

## 📌 Sobre o projeto

O **FinControl-Open** é um gerenciador de finanças pessoais **open source**, inspirado em plataformas como **Mobills** e **Organizze**.  
O objetivo é ajudar usuários a **controlar receitas, despesas, cartões e contas bancárias**, tudo de forma simples e acessível — com possibilidade de evolução futura para versão mobile e funcionalidades premium.

---

## 🧭 Funcionalidades (em desenvolvimento)

✅ Cadastro de contas bancárias e carteiras  
✅ Registro de receitas e despesas  
✅ Controle de cartões de crédito e lançamentos  
✅ Histórico de transações  
✅ Visualização de saldo consolidado  
🔜 Relatórios e gráficos por categoria e período  
🔜 Exportação de dados (PDF/Excel)  
🔜 Autenticação com Firebase  

---

## 🚀 Tecnologias utilizadas

### 🔹 **Frontend**
- React.js  
- React Router  
- Tailwind CSS  

### 🔹 **Backend**
- Node.js  
- Express.js  
- Firebase Admin SDK  
- Dotenv  
- Cors  

---

## 🛠️ Estrutura do projeto

```

FinControl-Open/
│
├── backend/
│   ├── routes/
│   │   └── ping.js
│   ├── server.js
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── package.json
└── README.md

````

---

## ⚙️ Como rodar o projeto localmente

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/VictorMussoline/FinControl-Open.git
cd FinControl-Open
````

### 2️⃣ Instalar dependências

```bash
npm install
```

### 3️⃣ Instalar dependências do backend e frontend

```bash
cd backend && npm install
cd ../frontend && npm install
cd ..
```

### 4️⃣ Rodar os dois simultaneamente (modo desenvolvimento)

```bash
npm run dev
```

O comando acima usa **Concurrently** para iniciar **frontend e backend juntos**.

* Frontend: `http://localhost:3000`
* Backend: `http://localhost:5000`

---

## 📁 Variáveis de ambiente

### 🔹 `backend/.env.example`

```env
PORT=5000
FIREBASE_PROJECT_ID=
FIREBASE_PRIVATE_KEY=
FIREBASE_CLIENT_EMAIL=
```

### 🔹 `frontend/.env.local.example`

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=
REACT_APP_FIREBASE_STORAGE_BUCKET=
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=
REACT_APP_FIREBASE_APP_ID=
```

---

## 📡 Testar o servidor backend

Após rodar `npm run dev`, acesse:

```
http://localhost:5000/ping
```

Você deve ver algo como:

```json
{
  "pong": true,
  "time": "2025-11-12T14:32:45.000Z"
}
```

---

## 🧩 Scripts úteis

| Comando                        | Descrição                                          |
| ------------------------------ | -------------------------------------------------- |
| `npm run dev`                  | Inicia o frontend e backend simultaneamente        |
| `npm start --prefix frontend`  | Inicia apenas o frontend                           |
| `npm run dev --prefix backend` | Inicia apenas o backend em modo desenvolvimento    |
| `npm install`                  | Instala todas as dependências do projeto principal |

---

## 📸 Demonstrações (em breve)

> 💡 Aqui adicionaremos as demonstrações!

| Tela inicial | Controle de despesas | Relatórios |
| ------------ | -------------------- | ---------- |
| *(imagem)*   | *(imagem)*           | *(imagem)* |

---

## 👥 Contribuindo

Contribuições são super bem-vindas!
Para colaborar com o projeto:

1. Faça um **fork** do repositório
2. Crie uma nova branch:

   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Faça suas alterações e commit:

   ```bash
   git commit -m "Adiciona nova funcionalidade X"
   ```
4. Envie o push da branch:

   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um **Pull Request** ✨

---

## 🧭 Roadmap (planejado)

* [ ] Sistema de login com Firebase Auth
* [ ] Dashboard de relatórios financeiros
* [ ] Controle de categorias personalizadas
* [ ] Notificações de vencimento
* [ ] Versão mobile (React Native)
* [ ] Tema escuro

---

## 📄 Licença

Este projeto está sob a licença **MIT** — veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

> Desenvolvido com 💚 por [Victor Mussoline](https://github.com/VictorMussoline)
