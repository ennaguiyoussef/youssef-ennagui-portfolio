
<<<<<<< HEAD
Portfolio personnel moderne développé avec Angular 20, Bootstrap 5 et Bootstrap Icons.

## 🚀 Déploiement sur GitHub Pages

Ce projet est configuré pour un déploiement automatique sur GitHub Pages via GitHub Actions.

### Configuration initiale (une seule fois)

1. **Créer un repository GitHub** :
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio Angular"
   git branch -M main
   git remote add origin https://github.com/VOTRE-USERNAME/youssef-ennagui-portfolio.git
   git push -u origin main
   ```

2. **Activer GitHub Pages** :
   - Va sur `https://github.com/VOTRE-USERNAME/youssef-ennagui-portfolio/settings/pages`
   - Dans **Source**, sélectionne **GitHub Actions**
   - Sauvegarde

### Déploiement automatique

Chaque fois que tu push sur la branche `main`, le site se déploie automatiquement !

```bash
git add .
git commit -m "Votre message"
git push
```

Le site sera disponible sur : `https://VOTRE-USERNAME.github.io/youssef-ennagui-portfolio/`

### Déploiement manuel (optionnel)

Si tu veux build localement avant de déployer :

```bash
npm run build:gh-pages
```

Les fichiers de production seront dans `dist/youssef-ennagui-portfolio/browser/`

## 💻 Développement local

### Installation

```bash
npm install
```

### Serveur de développement

```bash
npm start
```

Ouvre ton navigateur sur `http://localhost:4200/`

### Build de production

```bash
npm run build
```

## 🛠️ Technologies utilisées

- **Angular 20** - Framework frontend
- **TypeScript 5.9** - Langage de programmation
- **Bootstrap 5.3** - Framework CSS
- **Bootstrap Icons 1.13** - Bibliothèque d'icônes
- **RxJS 7.8** - Programmation réactive

## 📁 Structure du projet

```
src/
├── app/
│   ├── pages/
│   │   ├── home/           # Page d'accueil
│   │   └── sections/       # Sections du portfolio
│   │       ├── hero/       # Section hero avec présentation
│   │       ├── competences/
│   │       ├── projets/
│   │       ├── parcours/
│   │       ├── blogs/
│   │       └── contacts/
│   └── shared/
│       ├── header/         # En-tête navigation
│       ├── footer/         # Pied de page
│       └── theme.service.ts # Service de gestion du thème
├── styles.css              # Styles globaux
└── index.html
```

## 🎨 Fonctionnalités

- ✅ Design moderne et responsive
- ✅ Mode sombre / clair avec persistance localStorage
- ✅ Animations fluides
- ✅ Navigation par ancres
- ✅ Icônes flottantes animées
- ✅ Optimisé pour les performances
- ✅ Accessible (ARIA labels)

## 📝 Notes

- Le fichier `.nojekyll` est nécessaire pour GitHub Pages
- Le `base-href` est configuré automatiquement pour GitHub Pages
- Les assets (CV, images) sont dans le dossier `public/`

## 📧 Contact

Pour toute question : youssef.ennagui@usmba.ac.ma

---

## ✅ Tâches réalisées (20/11/2025)
- ✅ Création du projet de portfolio Angular
- ✅ Configuration du déploiement GitHub Pages
- ✅ Mise en place du workflow CI/CD
=======
>>>>>>> ca23a08aebd04f610c04989dec09771548ee6706
