# 🚀 Guide de Déploiement GitHub Pages

## Étapes à suivre (DANS L'ORDRE) :

### 1️⃣ Préparer le repository Git

Ouvre le terminal PowerShell dans le dossier du projet et exécute :

```powershell
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit - Portfolio Angular avec déploiement GitHub Pages"

# Renommer la branche en main
git branch -M main
```

### 2️⃣ Créer le repository sur GitHub

1. Va sur https://github.com/new
2. Nomme le repository : `youssef-ennagui-portfolio` (ou autre nom)
3. **NE COCHE PAS** "Add README" (tu en as déjà un)
4. **NE COCHE PAS** "Add .gitignore" (tu en as déjà un)
5. Clique sur **Create repository**

### 3️⃣ Lier et pousser le code

Remplace `VOTRE-USERNAME` par ton username GitHub :

```powershell
# Ajouter le remote
git remote add origin https://github.com/VOTRE-USERNAME/youssef-ennagui-portfolio.git

# Pousser le code
git push -u origin main
```

### 4️⃣ Activer GitHub Pages

1. Va sur ton repository : `https://github.com/VOTRE-USERNAME/youssef-ennagui-portfolio`
2. Clique sur **Settings** (⚙️ en haut)
3. Dans le menu de gauche, clique sur **Pages**
4. Dans **Source**, sélectionne **GitHub Actions** (au lieu de "Deploy from a branch")
5. C'est tout ! Pas besoin de sauvegarder

### 5️⃣ Vérifier le déploiement

1. Va sur l'onglet **Actions** de ton repository
2. Tu verras le workflow "Deploy to GitHub Pages" en cours
3. Attends qu'il devienne vert ✅ (environ 2-3 minutes)
4. Ton site sera disponible sur : `https://VOTRE-USERNAME.github.io/youssef-ennagui-portfolio/`

## 🔄 Mises à jour futures

Pour mettre à jour ton site, il suffit de :

```powershell
git add .
git commit -m "Description des modifications"
git push
```

Le déploiement se fera automatiquement ! 🎉

## ⚠️ Important

- **Si le nom de ton repository est différent de `youssef-ennagui-portfolio`**, modifie dans `package.json` :
  ```json
  "build:gh-pages": "ng build --configuration production --base-href /NOM-DE-TON-REPO/"
  ```

- **Si tu veux que ton site soit sur `https://VOTRE-USERNAME.github.io/`** (sans sous-dossier) :
  - Renomme le repository en `VOTRE-USERNAME.github.io`
  - Change le `base-href` en : `--base-href /`

## 🆘 En cas de problème

- Vérifie que GitHub Pages est bien activé en mode "GitHub Actions"
- Regarde les logs dans l'onglet Actions pour voir les erreurs
- Assure-toi que le fichier `.github/workflows/deploy.yml` existe
- Vérifie que tu as bien push la branche `main`

## 📧 Besoin d'aide ?

Contacte-moi : youssef.ennagui@usmba.ac.ma

