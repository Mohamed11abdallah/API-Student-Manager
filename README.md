# 🏫 Gestion apprenant API

## 🖹 Description

Cette API permet de gérer les apprenants, les paiements, les modules et les inscriptions sur une plateforme de suivi de formations.

---

## 🚀 Prérequis

Avant de commencer, vous avez besoin de :

- **Node.js** (version 14 ou supérieure)
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **Postman** (pour tester l'API)

---

## 📥 Installation

### 1. Clonez le dépôt :

```bash
https://github.com/semthillo/API-Student-Manager.git
```

### 2. Accédez au dossier du projet :

```bash
cd API-Student-Manager
```

### 3. Installez les dépendances :

```bash
npm install
```

### 4. Configurez la base de données :

- Créez une base de données dans PostgreSQL.
- Remplissez vos informations de connexion à PostgreSQL dans le fichier .env.sample.

### 5. Configurez Prisma :

```bash
npx prisma migrate deploy
```

### 6. Démarrez le projet :

```bash
npm start
```

## ⛓️ Endpoints API

Pour voir les endpoints, importez la collection Postman dans votre application : collection_postman.

## ⚙️ Fonctionnalités

👨🏻‍🎓 Gestion des Apprenants :

    Lister les apprenants.
    Ajouter un apprenant .
    Modifier les informations d’un apprenant.
    Supprimer un apprenant.

📚 Gestion des Modules :

    Lister les modules.
    Ajouter un module .
    Modifier les informations d’un module.
    Supprimer un module.

📝 Gestion des Inscriptions :

    Lister les inscriptions.
    Ajouter une inscription .
    Modifier une inscription.
    Supprimer une inscription.

📜 Gestion des Paiements :

    Lister les paiements.
    Ajouter un paiement.
    Supprimer un paiement.

## Auteur

[MohamedAbdallah](https://github.com/Mohamed11abdallah)
