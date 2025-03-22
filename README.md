# 🚀 Marvel API Backend (Express.js)

Backend Node.js sécurisé et modulaire pour une application Marvel React, avec :

- Proxy de l'API Marvel du Réacteur (cachée côté client)
- Authentification JWT (signup/login)
- Système de favoris (personnages ou comics), liés à chaque utilisateur
- Middleware d'autorisation basé sur des policies
- Architecture MVC propre (routes/controllers/models)
- Stack Express.js + MongoDB

---

## 🛠 Stack technique

- Node.js / Express.js
- MongoDB (via Mongoose)
- JWT pour l’auth
- Architecture RESTful propre, sécurisée

---

## ⚡ Quickstart

```bash
git clone https://github.com/nicosek/marvel-api-nicosek.git
cd marvel-api-nicosek

cp .env.example .env # configure tes variables (clé JWT, MongoDB, clé Marvel)
npm install

npm run dev # ou nodemon src/index.js
```

---

## 📦 Endpoints principaux

```http
POST /api/auth/signup # Création d’un compte  
POST /api/auth/login # Authentification  
GET /api/marvel/characters # Proxy vers l’API Marvel (persos)  
GET /api/marvel/comics # Proxy vers l’API Marvel (comics)  
GET /api/favorites # Liste des favoris du user (auth + policy)  
POST /api/favorites # Ajout d’un favori  
DELETE /api/favorites/:id # Suppression d’un favori (auth + owner)  
```

---

## 🔐 Exemple `.env`

```env
PORT=3000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/marvel
JWT_SECRET=un_secret_de_ouf
MARVEL_API_KEY=ta_clef_du_reacteur
```

---


> Fait avec ❤️ par [@nicosek](https://github.com/nicosek)
