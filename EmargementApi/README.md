📝 API Emargement — Node.js / Express / MongoDB

Bienvenue sur API Emargement, un projet complet de gestion de présence pour les sessions de formation ! 🚀
✨ Fonctionnalités principales

Inscription d’utilisateurs (étudiants & formateurs)
Connexion/JWT : authentification sécurisée et gestion du rôle utilisateur
Création de sessions/cours (réservé aux formateurs)
Liste de toutes les sessions (pour les utilisateurs connectés)
Émargement à une session (signature de présence, un seul vote possible par étudiant)
Protection totale des routes sensibles (auth obligatoire)
Interface front HTML : test et démo directe depuis le navigateur (pas besoin de Postman)
Feedback UX coloré et validation côté client pour une expérience conviviale

🏗️ Choix techniques

Express.js & Node.js pour une API performante et claire
MongoDB + Mongoose pour la base de données NoSQL flexible (collections User & Session)
Authentification JWT avec le middleware custom (token dans l'en-tête Authorization)
bcrypt.js pour le hashage sécurisé des mots de passe
Structure moderne en ES Modules (import/export)
Séparation stricte : contrôleurs, routes, middlewares, modèles, front
Mini front intégré statique (HTML+CSS+JS dans public/index.html), utilisable sur http://localhost:3000/

🚦 Structure du projet

EmargementApi
├── controllers
│   ├── sessionController.js
│   └── userController.js
├── Middleware
│   └── auth.js
├── models
│   ├── Session.js
│   └── User.js
├── node_modules/
├── public/
│   └── index.html
├── routes
│   ├── sessionRoutes.js
│   └── userRoutes.js
├── server.js
├── .env
├── package.json
└── README.md


🛠️ Installation et lancement

Cloner le repo et installer
bash
git clone https://github.com/Djadide/Tp-Hacktrack.git
cd EmargementApi
npm install
Configurer la base de données
Assure-toi que MongoDB est lancé sur ta machine (par défaut sur mongodb://localhost/emargement)
Personnalise .env si besoin :
text
MONGO_URI=mongodb://localhost/emargement
JWT_SECRET=lettonclesecret
Démarrer le serveur
bash
npm start
Le serveur écoute sur le port 3000 par défaut.
Tester l’interface front
Ouvre http://localhost:3000/ dans ton navigateur


💻 Utilisation – Workflow

Inscription : remplis les champs (email, mot de passe, rôle)
Connexion : connecte-toi, un token est automatiquement généré
Création de session : les formateurs peuvent créer de nouveaux cours (nom/date)
Liste des sessions : tout utilisateur connecté peut voir les sessions existantes
Émargement : un étudiant connecté peut signer sa présence à une session (une fois max)
Toutes les réponses et statuts sont affichés joliment dans l’interface


📚 Exemple de requêtes API

Inscription
text
POST /api/users/register
{
  "email": "alice@mail.com",
  "password": "monsecret",
  "role": "etudiant"
}
Connexion
text
POST /api/users/login
{
  "email": "alice@mail.com",
  "password": "monsecret"
}
Créer une session (formateur)
text
POST /api/sessions
Headers: Authorization: Bearer <token_formateur>
{
  "courseName": "Mathématiques",
  "date": "2025-08-01"
}
Émargement
text
POST /api/sessions/:id/sign
Headers: Authorization: Bearer <token_etudiant>


🔒 Sécurité

Mots de passe hashés via bcrypt (jamais en clair en base)
Token JWT expirant (1h) transmis dans l’en-tête : sécurité des routes
Anti double émargement : un étudiant ne peut émarger qu'une seule fois par session
Protection automatique des routes derrière le middleware JWT (auth.js)


🎨 Interface front – Demo

Présente dans le dossier public/index.html
Teste toutes les fonctionnalités sans Postman
Responsive, colorée, notifications d’erreurs/réussites
Tout se passe en local sur http://localhost:3000


📈 Evolutions possibles

Rôle plus fin (“admin”), gestion des droits avancée
Export CSV/PDF de l’émargement, édition des sessions, suppression utilisateur
Front complet React ou Vue
Historique de présence, statistiques
Déploiement cloud (Render, Heroku, Vercel…)


👤 Auteur & Licence

Développé par Djadide
Projet éducatif pour découverte de la stack Node.js/Express/MongoDB/JWT.
Licence : MIT
Usage universitaire/pédagogique encouragé.


Bon développement et bonne expérience sur l’API Emargement !
