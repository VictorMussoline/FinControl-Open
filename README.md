# FinControl (MVP)

## Requisitos
- Node.js (versão LTS)
- npm ou yarn
- Conta no Firebase (Firestore + Auth)

## Setup (frontend)
```bash
cd frontend
npm install
cp .env.local.example .env.local   # ajuste com suas chaves
npm start

## Setup (backend)
cd backend
npm install
cp .env.example .env   # ajuste
npm run dev   # usa nodemon (recomendado)

##Endpoints úteis
GET /ping -> testa backend
POST /accounts -> cria conta (placeholder)

##Observações
Não comite arquivos .env nem serviceAccountKey.json.

`frontend/.env.example`:
REACT_APP_API_URL=
REACT_APP_FIREBASE_API_KEY=
REACT_APP_FIREBASE_AUTH_DOMAIN=
REACT_APP_FIREBASE_PROJECT_ID=

`backend/.env.example`:
PORT=5000
FIREBASE_PROJECT_ID=
