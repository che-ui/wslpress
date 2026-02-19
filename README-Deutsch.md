!/wslpress-new-logo.svg

# WSLpress (WSLpress) Abschreckkraft·Leichte Flügel: Ein modernes Blogging-Framework basierend auf Next.js, Contentlayer und Tailwind, speziell für Nutzer von vereinfachtem Chinesisch entwickelt, mit vollständig lokalisierten Oberflächen und vollständiger Kompatibilität mit dem lokalen Ökosystem.

# WSLpress 🚀 ]()

Eine leichte und effiziente moderne Blog-Vorlage, erstellt mit Next.js 13 + Contentlayer + Tailwind CSS.

**Wenn Sie Bilder schnell einfügen müssen, können Sie unser bereitgestelltes Tool verwenden, es ist sehr nützlich!**
- Einführungsartikel: /posts/wslpress-base64-image-tool
- Direkt hier verwenden: 🌐 

WSLpress (Wingsly Press) ist eine Blog-Vorlage, die für Entwickler und Content-Ersteller entwickelt wurde. Sie vereint modernste Frontend-Technologien mit elegantem visuellem Design, unterstützt den Dark Mode, responsives Layout und visuelles Content-Management, sodass Sie sich auf die Inhaltserstellung konzentrieren können, ohne sich um komplexe Konfigurationen kümmern zu müssen.

Entwickelt von **@che-ui** | 🌐 

---

## ✨ Kernfunktionen

- **Moderne Tech-Stack**: Basierend auf Next.js 13 App Router, unterstützt moderne Funktionen wie React Server Components, Route Groups, etc.
- **Effizientes Content-Management**: Automatisches Parsen von Markdown/MDX via Contentlayer, typsicher und erfordert keine manuelle Konfiguration.
- **Schönes & benutzerfreundliches UI**: Responsives Design mit Tailwind CSS, mit einem gut gestalteten Homepage-Hero-Bereich und Artikelkarten.
- **SEO-freundlich**: Innerhalb von weniger als 10 Tagen nach dem Start belegte diese Seite Platz 1 in den Bing-Suchgewichten für die nationale, internationale und Übersee-Version.
- **Dark Mode**: Folgt automatisch den Systemeinstellungen, unterstützt auch manuelles Umschalten, passt sich verschiedenen Leseumgebungen an.
- **Visuelle CMS**: Integriertes Netlify (Decap) CMS, ermöglicht nicht-technischen Benutzern das einfache Veröffentlichen/Bearbeiten von Artikeln (Aufgrund von Studienverpflichtungen derzeit in Wartung und wird stark nicht zum Aktivieren empfohlen).
- **Optimierte Entwicklungserfahrung**: ESLint-Konfiguration, TypeScript-Typüberprüfung, Tailwind-Utility-Klassen für schnelle Entwicklung.
- **Ein-Klick-Bereitstellung**: Nahtlose Anpassung an Plattformen wie Cloudflare Pages, Vercel, Netlify, etc., mit einem einfachen und effizienten Bereitstellungsprozess.
- **RSS**: Unterstützt RSS-Abonnements (/rss.xml).
- **Globale Suche**: Unterstützt Volltext-Schnellsuche.

---

## 🚀 Schnellstart

### Voraussetzungen

- Node.js 18.x oder höher
- pnpm 8.x oder höher (empfohlen, npm/yarn kann auch verwendet werden)

### Schritt 1: Repository klonen

```Bash
git clone
cd wslpress
```

### Schritt 2: Abhängigkeiten installieren

```Bash
pnpm install
# oder npm install / yarn install
```

### Schritt 3: Entwicklungsserver starten

```Bash
pnpm dev
```

### Schritt 4: Lokale Seite aufrufen

Öffnen Sie Ihren Browser und besuchen Sie ``, um eine Blog-Vorschau zu sehen.

### Schritt 5: Produktionsbuild erstellen

```Bash
pnpm build
# Nach dem Bauen können Sie den Produktionsserver mit pnpm start starten.
```

---

## 📝 Benutzerhandbuch

### 1. Ihren ersten Artikel erstellen

1. Erstellen Sie eine Markdown/MDX-Datei im Verzeichnis `content/` (z.B. `hallo-welt.md`).
2. Fügen Sie Metadaten gemäß dem folgenden *Frontmatter*-Format hinzu:

```Markdown
---
title: "Mein erster Blogbeitrag"
date: "2026-01-21"
description: "Dies ist mein erster mit WSLpress veröffentlichte Artikel"
tags: ["Next.js", "Bloggen"]
---

Hier ist der Hauptinhalt des Artikels. Sie können Markdown- oder MDX-Syntax verwenden.

## Unterüberschrift
- Listenpunkt 1
- Listenpunkt 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. Nach dem Speichern führt der Entwicklungsserver ein Hot-Reload durch und der Artikel wird in Echtzeit auf der Homepage und in der Artikelliste angezeigt.

### 2. Blog-Konfiguration anpassen

- **Website-Informationen ändern**: Bearbeiten Sie `siteMetadata` in `contentlayer.config.js` (CMS-Konfiguration muss entsprechend aktualisiert werden).
- **Stile anpassen**: Ändern Sie `tailwind.config.js`, um Farben, Schriftarten, Abstände usw. anzupassen.
- **Seitenstruktur ändern**: Bearbeiten Sie Seitenkomponenten im `app/`-Verzeichnis (z.B. entspricht `app/page.tsx` der Homepage).
- **Komponenten hinzufügen**: Erstellen Sie benutzerdefinierte Komponenten im `components/`-Verzeichnis, die direkt in MDX-Dateien importiert werden können.

### 3. Inhalte mit Netlify CMS verwalten

1. Nach dem Start des Entwicklungsservers besuchen Sie `/admin`.
2. Melden Sie sich mit Ihrem Netlify-Konto an (erfordert beim ersten Mal die Verknüpfung mit einem Repository).
3. Im CMS-Backend können Sie Artikel direkt erstellen, bearbeiten und löschen, ohne Markdown-Dateien manuell bearbeiten zu müssen.

---

## 📂 Verzeichnisstruktur

```Plain Text
wslpress/
├── app/                  # Next.js 13 App Router Verzeichnis
│   ├── page.tsx         # Homepage
│   ├── posts/           # Artikel-Liste/Detailseiten
│   └── layout.tsx       # Globales Layout (enthält Navigation, Footer)
├── components/          # Wiederverwendbare Komponenten (Artikelkarten, Navigationsleiste, etc.)
├── content/             # Artikelinhalt-Verzeichnis (Markdown/MDX Dateien)
├── public/              # Statische Assets (Bilder, Icons, CMS-Konfiguration)
│   ├── admin/           # Netlify CMS Admin-Interface Konfiguration
│   └── WSLpress.svg     # Projekt-Logo
├── contentlayer.config.js # Contentlayer-Konfiguration (Inhaltstypen, Metadaten)
├── tailwind.config.js   # Tailwind CSS Konfiguration
├── next.config.js       # Next.js Konfiguration
├── tsconfig.json        # TypeScript Konfiguration
└── package.json         # Abhängigkeitsverwaltung
```

---

## 🌐 Schnelle Bereitstellungsanleitung (nach dem Forken dieses Repositorys)

### Option 1: Auf Vercel bereitstellen (empfohlen)

Beispiel: /

1. Besuchen Sie  und loggen Sie sich ein.
2. Klicken Sie auf "New Project" und importieren Sie das `wslpress` Repository.
3. Keine zusätzliche Konfiguration erforderlich; Vercel erkennt es automatisch als Next.js-Projekt.
4. Klicken Sie auf "Deploy" und warten Sie auf den Abschluss der Bereitstellung. Sie erhalten eine Online-Adresse.
5. Optional können Sie eine benutzerdefinierte Domain verbinden. Hinweis: Nutzer in Festlandchina können auf `.vercel.app`-Domains nicht zugreifen.

### Option 2: Auf Netlify bereitstellen

Beispiel:

1. Besuchen Sie  und loggen Sie sich ein.
2. Klicken Sie auf "Add new site" → "Import an existing project".
3. Importieren Sie das `wslpress` Repository.
4. Buildeinstellungen (automatisch ausgefüllt, normalerweise keine Änderungen nötig):
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. Klicken Sie auf "Deploy site", um die Bereitstellung abzuschließen.
6. Sie erhalten eine `.netlify.app`-Subdomain. Stand 3. Februar 2026 ist sie innerhalb Chinas erreichbar, der Zugriff über China Mobile Mobilfunknetze kann jedoch instabil sein.

### Option 3: Standardmäßige Bereitstellung auf Cloudflare Pages (Nicht Worker!)

Beispiel:

1. Besuchen Sie das  und loggen Sie sich ein.
2. Klicken Sie auf "Compute and AI" → "Workers & Pages", dann oben rechts auf "Create an application". Klicken Sie auf der nächsten Seite unter "Ready to deploy Pages?" auf "Get started".
3. Importieren Sie das `wslpress` Repository.
4. Build-Konfiguration (Next.js auswählen):
5. Klicken Sie auf "Deploy site", um die Bereitstellung abzuschließen.
6. Sie erhalten eine `.pages.dev`-Subdomain, die gesperrt ist. Sie können jedoch eine benutzerdefinierte Domain verbinden.
7. Befolgen Sie dann dieses Tutorial: /posts/deploying-wsl-on-cfpages

### Option 4: Bereitstellung auf Cloudflare Pages durch direkten Asset-Upload (Empfohlen für Anfänger ohne Zugang zum wissenschaftlichen Internet)

Siehe Tutorial: /posts/deploy-wsl-on-cf-easily

---

## 🛠️ Konfigurationsdetails

### Contentlayer-Konfiguration

`contentlayer.config.js` definiert die Metadatenstruktur für Artikel. Sie können Felder nach Bedarf erweitern (z.B. `author`, `coverImage`):

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // Benutzerdefinierte Felder können hinzugefügt werden
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

### Benutzerdefiniertes Tailwind-Theme

Ändern Sie das `theme`-Feld in `tailwind.config.js`, um Markenfarben, Schriftarten usw. anzupassen:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Unterstützt klassenbasiertes Dark-Mode-Umschalten
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Benutzerdefinierte Primärfarbe
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

## 🤝 Beitragsrichtlinien

Beiträge sind auf folgende Weise willkommen:

1. Forken Sie das Repository und erstellen Sie einen Branch (`git checkout -b feature/xxx`).
2. Committen Sie Ihre Änderungen (`git commit -m "feat: add xxx feature"`).
3. Pushen Sie den Branch (`git push origin feature/xxx`).
4. Reichen Sie einen Pull Request ein.

### Beitragsstandards

- Der Code-Stil folgt der ESLint-Konfiguration.
- Neue Funktionen sollten mit Updates der README einhergehen.
- Commit-Nachrichten sollten das Conventional-Commit-Format verwenden (feat/fix/docs/style/refactor/test/chore).

---

## 📄 Lizenz

Dieses Projekt steht unter der GNU General Public License v3.0 - Details finden Sie in der LICENSE-Datei.

---

## 📞 Kontakt & Offizielle Erklärung

Bei Fragen oder Vorschlägen kontaktieren Sie uns bitte über:

- GitHub Issues: https:///che-ui/wslpress/issues
- Offizielle Feedback-Plattform (Empfohlen): 🌐 /feedback.html
- Entwickler: che-ui (ein Mittelschüler in China, Maintainer des WSLpress GitHub-Repository)

---

🌟 Wenn Ihnen diese Vorlage gefällt, geben Sie dem Repository bitte einen Stern, um uns zu unterstützen!

---

**Offizielle Erklärung zum Projektnamen "WSLPress"**

Dieses Projekt, **WSLPress** (ein Framework zur Generierung statischer Seiten/Blogs), erklärt hiermit offiziell:

**Es besteht keinerlei Zugehörigkeit, Abhängigkeit oder Verbindung zur Windows Subsystem for Linux (WSL)-Technologie und dem Produkt von Microsoft.**

Um Verwechslungen zu vermeiden, werden folgende Punkte klargestellt:

1.  **Namenserklärung**: Das "WSL" im Namen dieses Projekts dient lediglich als Bezeichner und steht für "威慑力" (Abschreckkraft). Es bedeutet nicht, dass das Projekt von der Windows WSL-Technologie abhängig ist, um zu funktionieren. Es handelt sich lediglich um ein Framework für statische Blogs.
2.  **Nicht-Zugehörigkeitserklärung**: Dieses Projekt wurde nicht von Microsoft entwickelt, gesponsert oder gebilligt. Microsofts "WSL" ist dessen eigenständige Marke für eine Betriebssystem-Kompatibilitätsschicht-Technologie.
3.  **Projektunabhängigkeit**: WSLPress ist ein unabhängiges Open-Source-Tool zur Generierung statischer Websites. Sein Design, seine Entwicklung und Wartung stehen in keinerlei Zusammenhang mit Microsoft.
4.  **Namensherkunft**: Die anfängliche Inspiration für den Namen kam von "Wingsly", was Leichtigkeit wie Flügel impliziert und nichts mit Microsoft zu tun hat.
5.  **Nutzungsbereich**: Benutzer können dieses Framework auf jeder Plattform verwenden, die dessen Laufzeitumgebung unterstützt, ohne auf Windows oder WSL beschränkt zu sein.

Wir respektieren die Marken- und geistigen Eigentumsrechte von Microsoft an dessen WSL-Technologie. Eventuelle Missverständnisse aufgrund der Namensähnlichkeit sind unbeabsichtigt.

Bei Fragen kontaktieren Sie uns bitte über das GitHub-Repository des Projekts.

Mit freundlichen Grüßen,

**WSLPress Projekt-Maintainer: @che-ui**
