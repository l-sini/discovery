# Discover App

## 목차

- [Discover App](#discover-app)
  - [목차](#목차)
  - [소개](#소개)
  - [프로젝트 구조](#프로젝트-구조)
  - [설치 및 실행](#설치-및-실행)
  - [환경 변수](#환경-변수)
  - [사용한 라이브러리 및 이유](#사용한-라이브러리-및-이유)
  - [기능 개요](#기능-개요)

---

## 소개

**Next.js 15 App Router** 기반으로, 배너 슬라이더, 즐겨찾기 리스트, 서비스 리스트(조건부 노출) 등을 구현하였으며, **i18n**, **환경별 설정**, **플랫폼 감지** 등의 기능을 포함합니다.

## 프로젝트 구조

```plaintext
src/
├── app/
│   ├── layout.tsx           # 글로벌 루트 레이아웃 (HTML/HEAD 설정, html lang, QueryProvider)
│   ├── page.tsx             # 실제 홈 페이지
|   ├── providers/           # QueryProvider
|   ├── styles/              # global.css
├── features/
│   ├── banners/             # 배너 슬라이더
│   │   ├── api/             # getBanners
│   │   ├── hooks/           # useBanner
│   │   ├── mocks/           # mockBanner
│   │   ├── types.ts         # banner.interface
│   │   └── components/      # atoms/molecules/organisms
│   ├── favorites/           # 즐겨찾기
│   │   ├── api/             # getFavorites, removeFavorite
│   │   ├── hooks/           # useFavorites
│   │   ├── mocks/           # mockFavorites
│   │   ├── types.ts         # IFavoriteItem
│   │   └── components/      # atoms/molecules/organisms
│   └── services/            # 서비스 리스트
│       ├── api/             # getServices
│       ├── hooks/           # useServices
│       ├── mocks/           # mockServices
│       ├── types.ts         # IServiceItem
│       └── components/      # atoms/molecules/organisms
├── public/
├── .env.development
├── .env.stage
├── .env.production
├── next.config.ts
├── package.json
```

## 설치 및 실행

```bash
git clone <repo-url>
cd <project>

#node v22
npm install
# 개발 서버 실행
npm run dev
# 스테이지 빌드 & 실행
npm run build:stage && npm run start:stage
# 프로덕션 빌드 & 실행
npm run build && npm run start
```

## 환경 변수

- `.env.development`, `.env.stage`, `.env.production` 파일로 구분
- 예시 (`.env.development`):

- `dotenv-flow`가 `NODE_ENV` 에 따라 자동 로드

## 사용한 라이브러리 및 이유

- **Next.js 15 (App Router)**
  파일 기반 라우팅, `layout.tsx` 중첩 레이아웃, 서버/클라이언트 컴포넌트 분리
- **React & TypeScript**
  타입 안정성, React 19 기능 활용
- **Tailwind CSS**
  유틸리티 퍼스트 CSS로 빠른 스타일링
- **dotenv-flow**
  개발/스테이지/프로덕션 환경 `.env.*` 자동 로드
- **cross-env**
  OS 간 `NODE_ENV` 설정 안정성
- **@tanstack/react-query**
  데이터 패칭, 캐싱, 로딩·에러 상태 관리 자동화 및 에러 관리 용이
- **embla-carousel-react & embla-carousel-autoplay**
  경량 Carousel + 오토슬라이드
- **Prettier + prettier-plugin-tailwindcss + @trivago/prettier-plugin-sort-imports**
  코드 포맷팅, Tailwind 클래스/임포트 자동 정렬로 코드 일관성 증대
- **next/image**
  이미지 최적화, 외부 도메인 CDN 지원

## 기능 개요

1. **배너 슬라이더** (`/features/banners`)
   - dev: mock, prod: 실제 API
   - React Query, Embla Carousel, auto-play, 페이지 인디케이터

2. **즐겨찾기 리스트** (`/features/favorites`)
   - 목록 조회/삭제 기본 API 통신 (dev: mock)
   - React Query `useQuery`/`useMutation`, 삭제 확인 Modal, Bottom Sheet

3. **서비스 리스트** (`/features/services`)
   - 플랫폼(Android/iOS), 빌드 환경(dev/stage/prod)별 노출 필터링
   - Bottom Sheet 상세 뷰, 지원 네트워크 표시
