!/wslpress-new-logo.svg

# WSLpress (WSLpress) Force de Dissuasion · Ailes Légères : Un framework de blog moderne basé sur Next.js, Contentlayer et Tailwind, conçu pour les utilisateurs de chinois simplifié, avec une interface entièrement localisée et une compatibilité totale avec l'écosystème local.

# WSLpress 🚀 ]()

Un modèle de blog moderne, léger et efficace, construit avec Next.js 13 + Contentlayer + Tailwind CSS.

**Si vous avez besoin d'insérer rapidement des images, vous pouvez utiliser l'outil que nous fournissons, il est extrêmement utile !**
- Article de présentation : /posts/wslpress-base64-image-tool
- Utilisez-le directement ici : 🌐 

WSLpress (Wingsly Press) est un modèle de blog conçu pour les développeurs et les créateurs de contenu. Il combine des technologies frontend de pointe avec un design visuel élégant, prend en charge le mode sombre, la mise en page réactive et la gestion visuelle du contenu, vous permettant de vous concentrer sur la création de contenu sans vous soucier de configurations complexes.

Développé par **@che-ui** | 🌐 

---

## ✨ Fonctionnalités principales

- **Stack technologique de pointe** : Basé sur Next.js 13 App Router, prenant en charge des fonctionnalités modernes comme React Server Components, les groupes de routes, etc.
- **Gestion de contenu efficace** : Analyse automatique des fichiers Markdown/MDX via Contentlayer, sécurisé au niveau des types et ne nécessite aucune configuration manuelle.
- **UI belle et conviviale** : Design réactif propulsé par Tailwind CSS, avec une section Hero sur la page d'accueil soigneusement conçue et des cartes d'articles.
- **Optimisé pour le SEO** : Moins de 10 jours après son lancement, ce site s'est classé n°1 dans les poids de recherche Bing pour les versions nationale, internationale et à l'étranger.
- **Mode sombre** : Suit automatiquement les préférences du système, prend également en charge la commutation manuelle, s'adapte à différents scénarios de lecture.
- **CMS visuel** : CMS Netlify (Decap) intégré, permettant aux utilisateurs non techniques de publier/modifier facilement des articles (En maintenance actuelle en raison d'engagements scolaires, fortement déconseillé d'activer).
- **Expérience de développement optimisée** : Configuration ESLint, vérification des types TypeScript, classes utilitaires Tailwind pour un développement rapide.
- **Déploiement en un clic** : S'adapte parfaitement à des plateformes comme Cloudflare Pages, Vercel, Netlify, etc., avec un processus de déploiement simple et efficace.
- **RSS** : Prend en charge l'abonnement RSS (/rss.xml).
- **Recherche globale** : Prend en charge la recherche rapide en texte intégral.

---

## 🚀 Démarrage rapide

### Prérequis

- Node.js 18.x ou supérieur
- pnpm 8.x ou supérieur (recommandé, npm/yarn peut également être utilisé)

### Étape 1 : Cloner le dépôt

```Bash
git clone
cd wslpress
```

### Étape 2 : Installer les dépendances

```Bash
pnpm install
# ou npm install / yarn install
```

### Étape 3 : Démarrer le serveur de développement

```Bash
pnpm dev
```

### Étape 4 : Accéder au site local

Ouvrez votre navigateur et visitez `` pour voir un aperçu du blog.

### Étape 5 : Construire pour la production

```Bash
pnpm build
# Après la construction, vous pouvez démarrer le serveur de production avec pnpm start
```

---

## 📝 Guide d'utilisation

### 1. Créer votre premier article

1. Créez un fichier Markdown/MDX dans le répertoire `content/` (par exemple, `hello-world.md`).
2. Ajoutez des métadonnées en suivant le format *frontmatter* ci-dessous :

```Markdown
---
title: "Mon premier article de blog"
date: "2026-01-21"
description: "Ceci est mon premier article publié en utilisant WSLpress"
tags: ["Next.js", "Blogging"]
---

Voici le contenu principal de l'article. Vous pouvez utiliser la syntaxe Markdown ou MDX.

## Sous-titre
- Élément de liste 1
- Élément de liste 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. Après l'enregistrement, le serveur de développement rechargera à chaud, et l'article apparaîtra en temps réel sur la page d'accueil et dans la liste des articles.

### 2. Personnaliser la configuration du blog

- **Modifier les informations du site** : Modifiez `siteMetadata` dans `contentlayer.config.js` (la configuration CMS doit être mise à jour en conséquence).
- **Ajuster les styles** : Modifiez `tailwind.config.js` pour personnaliser les couleurs, polices, espacements, etc.
- **Changer la structure des pages** : Modifiez les composants de page dans le répertoire `app/` (par exemple, `app/page.tsx` correspond à la page d'accueil).
- **Ajouter des composants** : Créez des composants personnalisés dans le répertoire `components/`, qui peuvent être directement importés dans les fichiers MDX.

### 3. Gérer le contenu avec Netlify CMS

1. Après avoir démarré le serveur de développement, visitez `/admin`.
2. Connectez-vous avec votre compte Netlify (nécessite la liaison à un dépôt lors de la première utilisation).
3. Dans le backend CMS, vous pouvez directement créer, éditer et supprimer des articles sans avoir à modifier manuellement les fichiers Markdown.

---

## 📂 Structure des répertoires

```Plain Text
wslpress/
├── app/                  # Répertoire Next.js 13 App Router
│   ├── page.tsx         # Page d'accueil
│   ├── posts/           # Pages de liste/détail des articles
│   └── layout.tsx       # Mise en page globale (inclut navigation, pied de page)
├── components/          # Composants réutilisables (cartes d'article, barre de navigation, etc.)
├── content/             # Répertoire de contenu des articles (fichiers Markdown/MDX)
├── public/              # Ressources statiques (images, icônes, configuration CMS)
│   ├── admin/           # Configuration de l'interface d'administration Netlify CMS
│   └── WSLpress.svg     # Logo du projet
├── contentlayer.config.js # Configuration Contentlayer (types de contenu, métadonnées)
├── tailwind.config.js   # Configuration Tailwind CSS
├── next.config.js       # Configuration Next.js
├── tsconfig.json        # Configuration TypeScript
└── package.json         # Gestion des dépendances
```

---

## 🌐 Guide de déploiement rapide (après avoir forké ce dépôt)

### Option 1 : Déployer sur Vercel (recommandé)

Exemple : /

1. Visitez  et connectez-vous.
2. Cliquez sur "New Project" et importez le dépôt `wslpress`.
3. Aucune configuration supplémentaire n'est nécessaire ; Vercel le reconnaîtra automatiquement comme un projet Next.js.
4. Cliquez sur "Deploy" et attendez la fin du déploiement. Vous recevrez une adresse en ligne.
5. Optionnellement, liez un domaine personnalisé. Note : les utilisateurs en Chine continentale ne peuvent pas accéder aux domaines `.vercel.app`.

### Option 2 : Déployer sur Netlify

Exemple :

1. Visitez  et connectez-vous.
2. Cliquez sur "Add new site" → "Import an existing project".
3. Importez le dépôt `wslpress`.
4. Paramètres de build (pré-remplis, généralement aucun changement nécessaire) :
   - Build command : `pnpm build`
   - Publish directory : `.next`
5. Cliquez sur "Deploy site" pour terminer le déploiement.
6. Vous obtiendrez un sous-domaine `.netlify.app`. Au 3 février 2026, il est accessible en Chine, mais l'accès via les réseaux mobiles de China Mobile peut être instable.

### Option 3 : Méthode standard pour déployer sur Cloudflare Pages (Pas Worker !)

Exemple :

1. Visitez le  et connectez-vous.
2. Cliquez sur "Compute and AI" → "Workers & Pages", puis en haut à droite sur "Create an application". Sur la page suivante, cliquez sur "Get started" sous "Ready to deploy Pages?".
3. Importez le dépôt `wslpress`.
4. Configuration de build (sélectionnez Next.js) :
5. Cliquez sur "Deploy site" pour terminer le déploiement.
6. Vous obtiendrez un sous-domaine `.pages.dev`, qui est bloqué. Cependant, vous pouvez lier un domaine personnalisé.
7. Suivez ensuite ce tutoriel : /posts/deploying-wsl-on-cfpages

### Option 4 : Déploiement sur Cloudflare Pages via téléchargement direct des ressources (recommandé pour les débutants sans accès à Internet scientifique)

Voir le tutoriel : /posts/deploy-wsl-on-cf-easily

---

## 🛠️ Détails de configuration

### Configuration Contentlayer

`contentlayer.config.js` définit la structure des métadonnées pour les articles. Vous pouvez étendre les champs selon les besoins (par exemple, `author`, `coverImage`) :

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // Vous pouvez ajouter des champs personnalisés
    // author: { type: "string", required: false },
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.md$/, "")
    },
  },
}));
```

### Thème personnalisé Tailwind

Modifiez le champ `theme` dans `tailwind.config.js` pour personnaliser les couleurs de la marque, les polices, etc. :

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Prend en charge la commutation du mode sombre basée sur les classes
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Couleur principale personnalisée
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

---

## 🤝 Lignes directrices pour les contributions

Les contributions sont les bienvenues via les méthodes suivantes :

1. Forkez le dépôt et créez une branche (`git checkout -b feature/xxx`).
2. Committez vos modifications (`git commit -m "feat: add xxx feature"`).
3. Poussez la branche (`git push origin feature/xxx`).
4. Soumettez une Pull Request.

### Normes de contribution

- Le style de code suit la configuration ESLint.
- Les nouvelles fonctionnalités doivent s'accompagner de mises à jour du README.
- Les messages de commit doivent utiliser le format conventionnel (feat/fix/docs/style/refactor/test/chore).

---

## 📄 Licence

Ce projet est sous licence GNU General Public License v3.0 - voir le fichier LICENSE pour plus de détails.

---

## 📞 Nous contacter & Déclaration officielle

Si vous avez des questions ou des suggestions, n'hésitez pas à nous contacter via :

- GitHub Issues : https:///che-ui/wslpress/issues
- Plateforme de feedback officielle (Recommandé) : 🌐 /feedback.html
- Développeur : che-ui (un collégien en Chine, mainteneur du dépôt GitHub WSLpress)

---

🌟 Si vous aimez ce modèle, veuillez donner une étoile au dépôt pour nous soutenir !

---

**Déclaration officielle concernant le nom du projet "WSLPress"**

Ce projet, **WSLPress** (un framework de génération de site/statique de blog), déclare par la présente :

**Il n'a aucune affiliation, dépendance ou association avec la technologie et le produit Windows Subsystem for Linux (WSL) de Microsoft.**

Pour éviter toute confusion, les points suivants sont clarifiés :

1.  **Clarification du nom** : Le "WSL" dans le nom de ce projet n'est qu'un identifiant et signifie "威慑力" (Force de Dissuasion). Cela ne signifie pas que le projet dépend de la technologie Windows WSL pour fonctionner. Il s'agit simplement d'un framework de blog statique.
2.  **Déclaration de non-affiliation** : Ce projet n'est pas développé, sponsorisé ou approuvé par Microsoft. Le "WSL" de Microsoft est sa marque indépendante pour une technologie de couche de compatibilité du système d'exploitation.
3.  **Indépendance du projet** : WSLPress est un outil open source indépendant pour la génération de sites statiques. Sa conception, son développement et sa maintenance sont totalement indépendants de Microsoft.
4.  **Origine du nom** : L'inspiration initiale pour le nom est venue de "Wingsly", ce qui implique la légèreté, comme des ailes, et n'a aucun lien avec Microsoft.
5.  **Champ d'application** : Les utilisateurs peuvent utiliser ce framework sur toute plateforme prenant en charge son environnement d'exécution, sans être limités à Windows ou WSL.

Nous respectons les marques et les droits de propriété intellectuelle de Microsoft sur sa technologie WSL. Toute incompréhension potentielle résultant de la similitude des noms est involontaire.

Pour toute question, veuillez nous contacter via le dépôt GitHub du projet.

Sincèrement,

**Mainteneur du projet WSLPress : @che-ui**
