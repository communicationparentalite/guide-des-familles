# 📦 Guide des Familles - Prêt à uploader !

## 🎯 Comment utiliser ce ZIP :

### Étape 1 : Décompresser
Décompressez ce fichier ZIP sur votre ordinateur.

### Étape 2 : Aller sur GitHub
Allez sur votre dépôt : https://github.com/communicationparentalite/guide-des-familles

### Étape 3 : Uploader les fichiers

**Option A - Via l'interface web (Recommandé)** :

1. Sur GitHub, cliquez sur "Add file" → "Upload files"
2. Glissez-déposez TOUS les fichiers et dossiers de ce ZIP
3. En bas, écrivez : "Ajout du Guide des Familles complet"
4. Cliquez sur "Commit changes"

**Option B - Via Git (si vous avez Git installé)** :

```bash
# Dans le dossier décompressé, ouvrez un terminal et tapez :
git init
git add .
git commit -m "Ajout du Guide des Familles"
git branch -M main
git remote add origin https://github.com/communicationparentalite/guide-des-familles.git
git push -u origin main
```

### Étape 4 : Activer GitHub Pages

1. Sur GitHub, allez dans "Settings" → "Pages"
2. Source : "Deploy from a branch"
3. Branch : "main" / Folder : "/ (root)"
4. Cliquez sur "Save"
5. Attendez 2-3 minutes

### Étape 5 : Votre site est en ligne ! 🎉

Votre site sera accessible à :
https://communicationparentalite.github.io/guide-des-familles/

---

## 📁 Structure du site :

```
guide-des-familles/
├── index.html          → Page principale
├── css/
│   └── style.css      → Feuille de style
├── textes/
│   └── *.txt          → Tous vos fichiers texte
└── images/
    └── *              → Toutes vos images
```

---

## 🆘 Besoin d'aide ?

- Documentation GitHub Pages : https://docs.github.com/fr/pages
- Support : contact@cc-berryloirepuisaye.fr

---

Bonne chance ! 🚀
