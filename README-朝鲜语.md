!/wslpress-new-logo.svg

# WSLpress (WSLpress) 위력·가벼운 날개: Next.js, Contentlayer, Tailwind 기반의 현대적 블로그 프레임워크, 중국어 간체자 사용자를 위해 제작, 전면 현지화된 인터페이스와 완벽한 현지 생태계 호환성을 갖춘 블로그 프레임워크

# WSLpress 🚀 ]()

가볍고 효율적인 현대적 블로그 템플릿, Next.js 13 + Contentlayer + Tailwind CSS로 구축

**이미지를 빠르게 삽입해야 하는 경우, 저희가 제공하는 도구를 사용하실 수 있습니다. 매우 유용합니다!**
- 소개 글: /posts/wslpress-base64-image-tool
- 여기서 직접 사용하기: 🌐 

WSLpress(Wingsly Press)는 개발자와 콘텐츠 크리에이터를 위해 설계된 블로그 템플릿으로, 최첨단 프론트엔드 기술 스택과 우아한 시각적 디자인을 융합하고, 다크 모드, 반응형 레이아웃, 시각적 콘텐츠 관리를 지원하여 복잡한 구성에 신경 쓰지 않고 콘텐츠 제작에 집중할 수 있게 해줍니다.

**@che-ui** 개발 | 🌐 

---

## ✨ 핵심 기능

- **최첨단 기술 스택**: Next.js 13 App Router 기반, React Server Components, 라우트 그룹 등 현대적 기능 지원
- **효율적인 콘텐츠 관리**: Contentlayer를 통해 Markdown/MDX 자동 파싱, 타입 안전성 보장 및 수동 구성 불필요
- **아름답고 사용자 친화적인 UI**: Tailwind CSS 기반의 반응형 디자인, 정교하게 디자인된 홈페이지 Hero 섹션 및 글 카드 내장
- **SEO 친화적**: 사이트 출시 후 10일도 안 되어 Bing 검색 가중치 국내판, 국제판, 해외판 모두 1위 기록
- **다크 모드**: 시스템 환경설정을 자동으로 따르며, 수동 전환도 지원, 다양한 독서 환경에 적응
- **시각적 CMS**: Netlify (Decap) CMS 통합, 비기술 사용자도 글을 쉽게 게시/편집 가능 (학업으로 인해 현재 유지보수 중이며, 활성화를 매우 권장하지 않음)
- **최적화된 개발 경험**: ESLint 구성, TypeScript 타입 검사, 신속한 개발을 위한 Tailwind 유틸리티 클래스
- **원클릭 배포**: Cloudflare Pages, Vercel, Netlify 등의 플랫폼에 원활하게 적응, 간단하고 효율적인 배포 프로세스
- **RSS**: RSS 구독 지원 (/rss.xml)
- **전체 검색**: 전체 텍스트 빠른 검색 지원

---

## 🚀 빠른 시작

### 필수 조건

- Node.js 18.x 이상
- pnpm 8.x 이상 (권장, npm/yarn도 사용 가능)

### 1단계: 저장소 복제

```Bash
git clone
cd wslpress
```

### 2단계: 의존성 설치

```Bash
pnpm install
# 또는 npm install / yarn install
```

### 3단계: 개발 서버 시작

```Bash
pnpm dev
```

### 4단계: 로컬 사이트 접속

브라우저를 열고 ``에 접속하여 블로그 미리보기를 확인하세요.

### 5단계: 프로덕션 빌드

```Bash
pnpm build
# 빌드 후 pnpm start로 프로덕션 서버를 시작할 수 있습니다.
```

---

## 📝 사용 가이드

### 1. 첫 번째 글 작성하기

1. `content/` 디렉터리에 Markdown/MDX 파일 생성 (예: `hello-world.md`).
2. 아래 *frontmatter* 형식에 따라 메타데이터 추가:

```Markdown
---
title: "나의 첫 블로그 글"
date: "2026-01-21"
description: "WSLpress를 사용하여 발표한 첫 번째 글입니다"
tags: ["Next.js", "블로그"]
---

여기는 글의 본문 내용입니다. Markdown 또는 MDX 구문을 사용할 수 있습니다.

## 소제목
- 목록 항목 1
- 목록 항목 2

import SomeComponent from "@/components/SomeComponent";
<SomeComponent />
```

1. 저장 후 개발 서버가 핫 리로드되며, 글은 홈페이지와 글 목록에 실시간으로 표시됩니다.

### 2. 블로그 구성 사용자 정의

- **사이트 정보 수정**: `contentlayer.config.js`의 `siteMetadata` 편집 (CMS 구성도 함께 업데이트 필요).
- **스타일 조정**: `tailwind.config.js` 수정하여 색상, 글꼴, 간격 등 사용자 정의.
- **페이지 구조 변경**: `app/` 디렉터리의 페이지 컴포넌트 편집 (예: `app/page.tsx`는 홈페이지에 해당).
- **컴포넌트 추가**: `components/` 디렉터리에 사용자 정의 컴포넌트 생성, MDX 파일에서 직접 가져올 수 있음.

### 3. Netlify CMS로 콘텐츠 관리

1. 개발 서버 시작 후 `/admin` 접속.
2. Netlify 계정으로 로그인 (처음 사용 시 저장소 연결 필요).
3. CMS 백엔드에서 Markdown 파일을 수동으로 수정하지 않고도 글을 직접 생성, 편집, 삭제 가능.

---

## 📂 디렉터리 구조

```Plain Text
wslpress/
├── app/                  # Next.js 13 App Router 디렉터리
│   ├── page.tsx         # 홈페이지
│   ├── posts/           # 글 목록/상세 페이지
│   └── layout.tsx       # 전역 레이아웃 (네비게이션, 푸터 포함)
├── components/          # 재사용 가능 컴포넌트 (글 카드, 내비게이션 바 등)
├── content/             # 글 콘텐츠 디렉터리 (Markdown/MDX 파일)
├── public/              # 정적 자산 (이미지, 아이콘, CMS 구성)
│   ├── admin/           # Netlify CMS 관리 인터페이스 구성
│   └── WSLpress.svg     # 프로젝트 로고
├── contentlayer.config.js # Contentlayer 구성 (콘텐츠 유형, 메타데이터)
├── tailwind.config.js   # Tailwind CSS 구성
├── next.config.js       # Next.js 구성
├── tsconfig.json        # TypeScript 구성
└── package.json         # 의존성 관리
```

---

## 🌐 빠른 배포 가이드 (본 저장소 포크 완료 후)

### 옵션 1: Vercel에 배포 (권장)

예시: /

1.  방문 및 로그인.
2. "New Project" 클릭 후 `wslpress` 저장소 가져오기.
3. 추가 구성 불필요; Vercel이 자동으로 Next.js 프로젝트로 인식.
4. "Deploy" 클릭 후 배포 완료 대기. 온라인 주소를 받게 됩니다.
5. 선택적으로 사용자 정의 도메인 연결 가능. 참고: 중국 본토 사용자는 `.vercel.app` 도메인에 접속할 수 없습니다.

### 옵션 2: Netlify에 배포

예시:

1.  방문 및 로그인.
2. "Add new site" → "Import an existing project" 클릭.
3. `wslpress` 저장소 가져오기.
4. 빌드 설정 (자동 채워짐, 일반적으로 변경 불필요):
   - Build command: `pnpm build`
   - Publish directory: `.next`
5. "Deploy site" 클릭하여 배포 완료.
6. `.netlify.app` 서브도메인을 받게 됩니다. 2026년 2월 3일 기준 중국 내에서 접근 가능하지만, 중국 모바일 셀룰러 네트워크를 통한 접속은 불안정할 수 있습니다.

### 옵션 3: Cloudflare Pages에 표준 방식으로 배포 (Worker 아님!)

예시:

1.  방문 및 로그인.
2. "Compute and AI" → "Workers & Pages" 클릭, 우측 상단 "Create an application" 클릭. 다음 페이지에서 "Ready to deploy Pages?" 아래 "Get started" 클릭.
3. `wslpress` 저장소 가져오기.
4. 빌드 구성 (Next.js 선택):
5. "Deploy site" 클릭하여 배포 완료.
6. `.pages.dev` 서브도메인을 받게 되며, 차단되었습니다. 그러나 사용자 정의 도메인을 연결할 수 있습니다.
7. 그런 다음 이 튜토리얼을 따르세요: /posts/deploying-wsl-on-cfpages

### 옵션 4: 직접 자산 업로드를 통해 Cloudflare Pages에 배포 (과학적 인터넷 접근 권한이 없는 초보자 권장)

튜토리얼 참조: /posts/deploy-wsl-on-cf-easily

---

## 🛠️ 구성 세부 정보

### Contentlayer 구성

`contentlayer.config.js`는 글의 메타데이터 구조를 정의합니다. 필요에 따라 필드 확장 가능 (예: `author`, `coverImage`):

```JavaScript
export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: "string", required: true },
    date: { type: "date", required: true },
    description: { type: "string", required: true },
    tags: { type: "list", of: { type: "string" } },
    // 사용자 정의 필드 추가 가능
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

### Tailwind 사용자 정의 테마

`tailwind.config.js`의 `theme` 필드 수정하여 브랜드 색상, 글꼴 등 사용자 정의:

```JavaScript
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 클래스 기반 다크 모드 전환 지원
  theme: {
    extend: {
      colors: {
        primary: "#6366f1", // 사용자 정의 기본 색상
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

## 🤝 기여 지침

다음 방법을 통해 기여를 환영합니다:

1. 저장소를 포크하고 브랜치 생성 (`git checkout -b feature/xxx`).
2. 변경 사항 커밋 (`git commit -m "feat: add xxx feature"`).
3. 브랜치 푸시 (`git push origin feature/xxx`).
4. Pull Request 제출.

### 기여 기준

- 코드 스타일은 ESLint 구성을 따릅니다.
- 새로운 기능은 README 업데이트와 동반되어야 합니다.
- 커밋 메시지는 Conventional Commit 형식 사용 (feat/fix/docs/style/refactor/test/chore).

---

## 📄 라이선스

이 프로젝트는 GNU General Public License v3.0에 따라 라이선스가 부여됩니다. 자세한 내용은 LICENSE 파일을 참조하세요.

---

## 📞 문의처 및 공식 성명

질문이나 제안 사항이 있는 경우 다음을 통해 문의하세요:

- GitHub Issues: https:///che-ui/wslpress/issues
- 공식 피드백 플랫폼 (권장): 🌐 /feedback.html
- 개발자: che-ui (중국 중학생, WSLpress GitHub 저장소 관리자)

---

🌟 이 템플릿을 좋아하신다면, 저장소에 Star를 눌러 저희를 지원해 주세요!

---

**프로젝트 이름 "WSLPress"에 관한 공식 성명**

본 프로젝트, **WSLPress** (정적 사이트/블로그 생성 프레임워크)는 다음과 같이 공식 성명합니다:

**Microsoft의 Windows Subsystem for Linux (WSL) 기술 및 제품과 어떠한 소속, 의존, 연관 관계도 없습니다.**

혼동을 피하기 위해 다음 사항을 명확히 합니다:

1.  **명칭 설명**: 본 프로젝트 이름의 "WSL"은 단지 식별자일 뿐, "威慑力" (위력)을 나타냅니다. 이 프로젝트가 Windows WSL 기술에 의존하여 작동함을 의미하지 않습니다. 단순히 정적 블로그 프레임워크일 뿐입니다.
2.  **비연관성 성명**: 본 프로젝트는 Microsoft가 개발, 후원 또는 승인한 것이 아닙니다. Microsoft의 "WSL"은 운영 체제 호환성 계층 기술을 위한 독자적인 상표입니다.
3.  **프로젝트 독립성**: WSLPress는 독립적인 오픈소스 정적 사이트 생성 도구입니다. 그 설계, 개발 및 유지보수는 Microsoft와 전혀 관련이 없습니다.
4.  **명칭 유래**: 이름의 초기 영감은 "Wingsly"에서 비롯되었으며, 날개처럼 가벼움을 의미하며 Microsoft와 무관합니다.
5.  **사용 범위**: 사용자는 해당 런타임 환경을 지원하는 모든 플랫폼에서 이 프레임워크를 사용할 수 있으며, Windows 또는 WSL로 제한되지 않습니다.

Microsoft의 WSL 기술에 대한 상표 및 지식 재산권을 존중합니다. 명칭 유사성으로 인해 발생할 수 있는 오해는 의도치 않았습니다.

문의 사항은 프로젝트의 GitHub 저장소를 통해 연락해 주시기 바랍니다.

성실히,

**WSLPress 프로젝트 관리자: @che-ui**
