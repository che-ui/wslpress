!/wslpress-new-logo.svg

# WSLpress (WSLpress) Fórsa Eaglacha · Sciatháin Éadroma: Creat Blag nua-aimseartha bunaithe ar Next.js, Contentlayer, agus Tailwind, deartha d’úsáideoirí Sínis Shimplí, le comhéadan go hiomlán logánta agus comhoiriúnacht iomlán le héiceachóras áitiúil.

# WSLpress 🚀 ]()

Teimpléad blag nua-aimseartha éadrom agus éifeachtach, tógtha le Next.js 13 + Contentlayer + Tailwind CSS.

**Má theastaíonn uait íomhánna a chur isteach go tapa, is féidir leat an t-uirlis a sholáthraímid a úsáid, tá sí an-úsáideach!**
- Alt túsithe: /posts/wslpress-base64-image-tool
- Úsáid díreach anseo: 🌐 

Is teimpléad blag é WSLpress (Wingsly Press) atá deartha d’fhorbróirí agus do chruthaitheoirí ábhair. Comhcheanglaíonn sé teicneolaíochtaí ceann-tosaigh den scoth le dearadh amhairc galánta, tacaíonn sé le mód dorcha, leagan amach imoibríoch, agus bainistíocht amhairc ar ábhar, rud a ligeann duit díriú ar chruthú ábhair gan bheith buartha faoi chumraíochtaí casta.

Forbartha ag **@che-ui** | 🌐 

---

## ✨ Gnéithe Lárnacha

- **Cruach-Teicneolaíochta Ceann-Tosaigh**: Bunaithe ar Next.js 13 App Router, tacaíonn sé le gnéithe nua-aimseartha cosúil le Comhpháirteanna Freastalaí React, Grúpaí Bealaí, srl.
- **Bainistíocht Éifeachtach Ábhair**: Anailís uathoibríoch ar chomhaid Markdown/MDX trí Contentlayer, sábháilte ó thaobh cineál agus ní theastaíonn aon chumraíocht láimhe.
- **Comhéadan Úsáideora (UI) Dathúil agus So-úsáidte**: Dearadh Imoibríoch faoi thiomáint ag Tailwind CSS, le roinn Hero leathanaigh baile deartha go cúramach agus cártaí ailt.
- **Cairdiúil do SEO**: Laistigh de níos lú ná 10 lá tar éis a sheoladh, d’éirigh leis an suíomh seo an chéad áit a bhaint amach i meáchain cuardaigh Bing do na leaganacha náisiúnta, idirnáisiúnta agus thar lear.
- **Mód Dorcha**: Leanann sé go huathoibríoch sainroghanna an chórais, tacaíonn sé freisin le haistriú láimhe, oiriúnaíonn sé do chásanna léitheoireachta éagsúla.
- **Córas Bainistíochta Ábhair Amhairc (CMS)**: CMS comhtháite Netlify (Decap), ligeann sé d’úsáideoirí neamh-theicniúla ailt a fhoilsiú/a chur in eagar go héasca (Faoi chothabháil faoi láthair mar gheall ar oibleagáidí scoile, moltar go mór gan é a chumasú).
- **Taithí Forbartha Fheabhsaithe**: Cumraíocht ESLint, Seiceáil Cineál TypeScript, Ranganna Fóntais Tailwind le haghaidh forbartha tapa.
- **Lonnaíocht le hAonchliceáil**: Oiriúnú gan stró d’ardáin mar Cloudflare Pages, Vercel, Netlify, srl., le próiseas lonnaithe simplí agus éifeachtach.
- **RSS**: Tacaíonn sé le síntiúis RSS (/rss.xml).
- **Cuardach Domhanda**: Tacaíonn sé le cuardach tapa téacs iomláin.

---

## 🚀 Tús Luath

### Réamhriachtanais

- Node.js 18.x nó níos airde
- pnpm 8.x nó níos airde (molta, is féidir npm/yarn a úsáid freisin)

### Céim 1: Clónáil an Stór (Repository)

```Bash
git clone
cd wslpress
```

### Céim 2: Suiteáil na Spláchtaí (Dependencies)

```Bash
pnpm install
# nó npm install / yarn install
```

### Céim 3: Tosaigh an Freastalaí Forbartha

```Bash
pnpm dev
```

### Céim 4: Rochtain ar an Suíomh Áitiúil

Oscail do bhrabhsálaí agus tabhair cuairt ar `` chun réamhamharc an bhlag a fheiceáil.

### Céim 5: Tóg don Táirgeadh (Production Build)

```Bash
pnpm build
# Tar éis an tógála, is féidir leat an freastalaí táirgíochta a thosú le pnpm start
```

---

## 📝 Treoir Úsáide

### 1. Cruthaigh Do Chéad Alt

1. Cruthaigh comhad Markdown/MDX san eolaire `content/` (mar shampla, `hello-world.md`).
2. Cuir meiteashonraí leis de réir an fhormáid *frontmatter* thíos:

```Markdown
---
title: "Mo Chéad Alt Blag"
date: "2026-01-21"
description: "Is é seo mo chéad alt a foilsíodh ag úsáid WSLpress"
tags: ["Next.js", "Blagáil"]
---

Seo an príomhábhar an ailt. Is féidir leat comhréir Markdown nó MDX a úsáid.

## Fotheideal
- Mír liosta 1
- Mír liosta 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. Tar éis sábháil, déanfaidh an freastalaí forbartha athlódáil te (hot reload), agus beidh an t-alt le feiceáil i bhfíor-am ar an leathanach baile agus sa liosta ailt.

### 2. Saincheap Cumraíocht an Bhlag

-   **Athraigh Faisnéis an tSuímh**: Cuir `siteMetadata` in eagar i `contentlayer.config.js` (caithfear cumraíocht CMS a thabhairt cothrom le dáta dá réir).
-   **Coigeartaigh na Stíleanna**: Cuir `tailwind.config.js` in eagar chun dathanna, clónna, spásanna, srl. a shaincheapadh.
-   **Athraigh Struchtúr an Leathanaigh**: Cuir na comhpháirteí leathanach san eolaire `app/` in eagar (mar shampla, freagraíonn `app/page.tsx` don leathanach baile).
-   **Cuir Comhpháirteí Leis**: Cruthaigh comhpháirteí saincheaptha san eolaire `components/`, is féidir iad a allmhairiú go díreach i gcomhaid MDX.

### 3. Bainistigh Ábhar le Netlify CMS

1. Tar éis duit an freastalaí forbartha a thosú, tabhair cuairt ar `/admin`.
2. Logáil isteach le do chuntas Netlify (éilíonn sé ceangal le stór (repository) an chéad uair a úsáidtear é).
3. Sa chúl-raon (backend) CMS, is féidir leat ailt a chruthú, a chur in eagar agus a scriosadh go díreach gan gá le comhaid Markdown a chur in eagar de láimh.

---

## 📂 Struchtúr Eolaire

```Plain Text
wslpress/
├── app/                  # Eolaire Next.js 13 App Router
│   ├── page.tsx         # Leathanach Baile
│   ├── posts/           # Leathanaigh Liosta/Sonraí Ailt
│   └── layout.tsx       # Leagan Amach Domhanda (cuimsíonn nascleanúint, buntásc)
├── components/          # Comhpháirteí In-athúsáidte (cártaí ailt, barra nascleanúna, srl.)
├── content/             # Eolaire Ábhair Ailt (comhaid Markdown/MDX)
├── public/              # Acmhainní Statacha (íomhánna, deilbhíní, cumraíocht CMS)
│   ├── admin/           # Cumraíocht Comhéadain Riaracháin Netlify CMS
│   └── WSLpress.svg     # Lógó an Tionscadail
├── contentlayer.config.js # Cumraíocht Contentlayer (cineálacha ábhair, meiteashonraí)
├── tailwind.config.js   # Cumraíocht Tailwind CSS
├── next.config.js       # Cumraíocht Next.js
├── tsconfig.json        # Cumraíocht TypeScript
└── package.json         # Bainistíocht Spleáchas
```

---

## 🌐 Treoir Lonnaithe Tapa (tar éis fork a dhéanamh ar an stór seo)

### Rogha 1: Lonnaigh ar Vercel (molta)

Sampla: /

1. Tabhair cuairt ar  agus logáil isteach.
2. Cliceáil ar "New Project" agus iompórtáil an stór `wslpress`.
3. Níl aon chumraíocht breise ag teastáil; Aithneoidh Vercel go huathoibríoch é mar thionscadal Next.js.
4. Cliceáil ar "Deploy" agus fan go mbeidh an lonnaíocht críochnaithe. Gheobhaidh tú seoladh ar líne.
5. De rogha, is féidir leat fearann saincheaptha a cheangal. Nóta: Ní féidir le húsáideoirí i mórthír na Síne rochtain a fháil ar fhearainn `.vercel.app`.

### Rogha 2: Lonnaigh ar Netlify

Sampla:

1. Tabhair cuairt ar  agus logáil isteach.
2. Cliceáil ar "Add new site" → "Import an existing project".
3. Iompórtáil an stór `wslpress`.
4. Socruithe Tógála (líontar go huathoibríoch iad, de ghnáth ní gá aon athruithe):
    - Build command: `pnpm build`
    - Publish directory: `.next`
5. Cliceáil ar "Deploy site" chun an lonnaíocht a chríochnú.
6. Gheobhaidh tú fofhearann `.netlify.app`. Ag an 3 Feabhra 2026, tá sé inrochtana sa tSín, ach d’fhéadfadh rochtain trí líonraí soghluaiste China Mobile a bheith éagobhsaí.

### Rogha 3: Modh Caighdeánach le Lonnaigh ar Cloudflare Pages (Ní Worker!)

Sampla:

1. Tabhair cuairt ar an  agus logáil isteach.
2. Cliceáil ar "Compute and AI" → "Workers & Pages", ansin ag barr ar dheis ar "Create an application". Ar an gcéad leathanach eile, cliceáil ar "Get started" faoi "Ready to deploy Pages?".
3. Iompórtáil an stór `wslpress`.
4. Cumraíocht Tógála (roghnaigh Next.js):
5. Cliceáil ar "Deploy site" chun an lonnaíocht a chríochnú.
6. Gheobhaidh tú fofhearann `.pages.dev`, atá curtha faoi chois. Mar sin féin, is féidir leat fearann saincheaptha a cheangal.
7. Lean ansin an teagasc seo: /posts/deploying-wsl-on-cfpages

### Rogha 4: Lonnaíocht ar Cloudflare Pages trí Uaslódáil Dhíreach na nAcmhainní (molta do thosaitheoirí gan rochtain ar an idirlíon eolaíoch)

Féach ar an teagasc: /posts/deploy-wsl-on-cf-easily

---

## 🛠️ Mionsonraí Cumraíochta

### Cumraíocht Contentlayer

Sainmhíníonn `contentlayer.config.js` struchtúr na meiteashonraí d’ailt. Is féidir leat réimsí a leathnú de réir mar is gá (mar shampla, `author`, `coverImage`):

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // Is féidir leat réimsí saincheaptha a chur leis
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

### Téama Saincheaptha Tailwind

Cuir an réimse `theme` in eagar i `tailwind.config.js` chun dathanna an bhranda, clónna, srl. a shaincheapadh:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Tacaíonn sé le haistriú mód dorcha bunaithe ar ranga
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // Príomhdhath saincheaptha
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

## 🤝 Treoirlínte um Ranníocaíocht

Tá fáilte roimh ranníocaíochtaí trí na modhanna seo a leanas:

1. Déan fork ar an stór agus cruthaigh brainse (`git checkout -b feature/xxx`).
2. Commit do chuid athruithe (`git commit -m "feat: add xxx feature"`).
3. Brúigh an brainse (`git push origin feature/xxx`).
4. Cuir Iarratas Tarraing (Pull Request) isteach.

### Caighdeáin Ranníocaíochta

- Leanann stíl an chóid an chumraíocht ESLint.
- Ba chóir go mbeadh nuashonruithe ar an README in éineacht le gnéithe nua.
- Ní mór do theachtaireachtaí comhaid (commit) an fhormáid ghnáthaithe a úsáid (feat/fix/docs/style/refactor/test/chore).

---

## 📄 Ceadúnas

Tá an tionscadal seo faoi cheadúnas GNU General Public License v3.0 - féach ar an gcomhad LICENSE le haghaidh sonraí.

---

## 📞 Déan Teagmháil Linn & Dearbhú Oifigiúil

Má tá aon cheist nó moladh agat, ná bíodh leisce ort teagmháil a dhéanamh linn trí:

- Saincheisteanna GitHub (GitHub Issues): https:///che-ui/wslpress/issues
- Ardán Aiseolais Oifigiúil (Molta): 🌐 /feedback.html
- Forbróir: che-ui (dalai meánscoile sa tSín, coimeádaí stór GitHub WSLpress)

---

🌟 Má thaitníonn an teimpléad seo leat, tabhair réalta (Star) don stór chun tacú linn!

---

**Dearbhú Oifigiúil maidir le hAinm an Tionscadail “WSLPress”**

Dearbhaíonn an tionscadal seo, **WSLPress** (creat giniúna suímh/bhlag statach), go hoifigiúil an méid seo a leanas:

**Níl aon chleamhnas, spleáchas nó comhchaidreamh aige le teicneolaíocht agus táirge Windows Subsystem for Linux (WSL) Microsoft.**

Chun aon mhíchiall a sheachaint, soiléitear na pointí seo a leanas:

1.  **Míniú ar an Ainm**: Níl san “WSL” in ainm an tionscadail seo ach aitheantóir agus seasann sé do “威慑力” (Fórsa Eaglacha). Ní thugann sé le tuiscint go mbraitheann an tionscadal ar theicneolaíocht Windows WSL le feidhmiú. Níl ann ach creat blag statach.
2.  **Dearbhú Neamh-Chleamhnais**: Níor fhorbair, níor urraigh, ná níor cheadaigh Microsoft an tionscadal seo. Is é “WSL” Microsoft a mharc trádála neamhspleách le haghaidh teicneolaíocht chiseal comhoiriúnaithe córas oibriúcháin.
3.  **Neamhspleáchas an Tionscadail**: Is uirlis foinse oscailte neamhspleách í WSLPress le haghaidh giniúint suíomhanna statacha. Tá a dearadh, forbairt agus cothabháil go hiomlán neamhspleách ar Microsoft.
4.  **Tús an Ainm**: Tháinig an inspioráid tosaigh don ainm ó “Wingsly”, rud a thugann le fios éadroime cosúil le sciatháin, agus níl aon gaol aige le Microsoft.
5.  **Raon Feidhme**: Is féidir le húsáideoirí an creat seo a úsáid ar aon ardán a thacaíonn lena thimpeallacht forghníomhaithe, gan a bheith teoranta do Windows nó WSL.

Urramaímid marcaí trádála agus cearta maoine intleachtaí Microsoft maidir lena theicneolaíocht WSL. Aon mhíchiall fhéideartha de bharr cosúlachta na n-ainmneacha, is neamhdheonach iad.

Le haghaidh aon cheisteanna, déan teagmháil linn trí stór GitHub an tionscadail.

Le meas,

**Coimeádaí Tionscadail WSLPress: @che-ui**
