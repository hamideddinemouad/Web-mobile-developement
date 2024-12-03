# Gestion d'Équipe de Football 🏟️⚽

Ce projet permet de créer et gérer une équipe de football virtuelle composée de 11 joueurs, avec des fonctionnalités dynamiques pour personnaliser la composition, modifier les positions, et calculer la chimie entre les joueurs. 

---

## Fonctionnalités 🛠️

### 1. **Création d'une Équipe de 11 Joueurs**
- Ajouter des joueurs via un formulaire dynamique avec les champs suivants :
  - **Nom**
  - **Position** (définie selon la formation choisie)
  - **Statistiques** (ex. vitesse, passes, tirs, etc.)
- Modifier ou supprimer un joueur déjà ajouté.
- Validation des données saisies pour garantir leur cohérence.

---

### 2. **Adaptation de la Formation**
- Choix parmi des formations prédéfinies :
  - **4-4-2** 
  - **4-5-1** 
  - **3-3-4**
- Ajustement automatique des positions des joueurs selon la formation choisie.
- Filtrage des postes disponibles pour chaque joueur selon la formation.


### 3. **Sauvegarde et Récupération des Données**
- Sauvegarde automatique des données de l'équipe localement (dans le navigateur ou via un fichier local).
- Chargement automatique des données sauvegardées à l'ouverture de l'application.

---

### 4. **Formulaire Dynamique pour les Joueurs**
- Interface intuitive pour ajouter dynamiquement des joueurs à l'équipe.
- Limitation à un maximum de **11 joueurs** par équipe.
- Positions ajustées automatiquement selon les formations choisies.

---

## Installation 🚀

1. **Cloner le dépôt :**
   ```bash
   git clone https://github.com/votre-nom-dutilisateur/nom-du-projet.git
   cd nom-du-projet
