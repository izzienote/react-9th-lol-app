# 🎮 League of Legend Info-app

> _"이번주 무료 챔피언 정보와 아이템 정보를 한눈에!"_

![image](/src/public/lol4.png)

## 🧳 배포 주소

## 📌 프로젝트 소개

**League of Legend Info-app**는 사용자에게 챔피언 및 아이템 목록과 RiotAPI를 활용하여 무료로 플레이 가능한 **챔피언 로테이션** 정보를 제공합니다

## 🎯 필수 기능

### 🔹 챔피언 목록 및 상세 페이지

- 리그 오브 레전드의 모든 캐릭터 확인
- 사용자가 선택한 챔피언에 대한 스킬 및 상세정보 표시

### 🔹 챔피언 로테이션 페이지

- 무료로 플레이 가능한 챔피언 목록 확인

### 🔹 아이템 목록 페이지

- 리그 오브 레전드 아이템 목록 확인

## 🛠 기술 스택

|                                                            기술                                                             | 사용 목적                  |
| :-------------------------------------------------------------------------------------------------------------------------: | -------------------------- |
|            ![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)             | 프로젝트 개발              |
|  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)   | 타입스크립트 언어          |
| ![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white) | 데이터 비동기 관리         |
|  ![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)   | 전체적인 CSS               |
|         ![Riot](https://img.shields.io/badge/Riot%20API-EB0029?style=for-the-badge&logo=riotgames&logoColor=white)          | 리그 오브 레전드 정보 제공 |

## 📷 프로젝트 미리보기

## 🚀 시작하기

### 1️⃣ 프로젝트 클론

```sh
git clone https://github.com/izzienote/react-9th-lol-app.git
cd react-9th-lol-app
```

### 3️⃣ 환경 변수 설정

`.env` 파일을 생성하고 아래와 같이 API 키 추가해야합니다! 문의주세요!

```env
NEXT_PUBLIC_RIOT_API_KEY =
NEXT_PUBLIC_LATEST_VERSION_URL =
```

## 🛤 프로젝트 구조

```plaintext
📂react-9th-lol-app
 ┣ 📂src
 ┃ ┣ 📂app
 ┃ ┃ ┣ 📂api             # 라우트핸들러
 ┃ ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┣ 📂champions       # PAGE _ 챔피언
 ┃ ┃ ┃ ┣ 📂[id]          # PAGE _ 챔피언 상세
 ┃ ┃ ┣ 📂items           # PAGE _ 아이템
 ┃ ┃ ┣ 📂rotation        # PAGE _ 챔피언 로테이션
 ┃ ┃ ┣ 📜layout.tsx      # 공통 레이아웃
 ┃ ┃ ┣ 📜page.tsx        # 프로젝트 진입점
 ┃ ┃ ┗ 📜provider.tsx    # 탠스택쿼리 상태관리
 ┃ ┣ 📂components        # 공통 컴포넌트
 ┃ ┣ 📂constants         # 공통 상수
 ┃ ┣ 📂hooks             # Tanstack-Query 훅
 ┃ ┣ 📂public            # 공통 이미지
 ┃ ┣ 📂types             # Typescript 타입
 ┃ ┗ 📂utils             # 유틸 함수
```

## 📜 라이선스

이 프로젝트는 MIT 라이선스를 따릅니다. 자유롭게 사용하고 기여해주세요!
