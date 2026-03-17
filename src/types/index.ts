// ─── Types & Constants ───────────────────────────────────────────────────────
export const SECTIONS = ["home", "about", "skills",  "projects", "contact"];

export const SKILLS_DATA = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js 14",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "HTML / CSS",
    ],
  },
  { category: "Backend & DB", items: ["Firebase Auth", "Cloud Firestore"] },
  { category: "Tools", items: ["Git / GitHub", "VS Code", "Kakao Maps API"] },
];

export const PROJECTS1 = [
  {
    title1: "ChatFutsal",
    subtitle1: "풋살 매칭 & 실시간 채팅 플랫폼",
    description1:
      "풋살 경기를 찾고, 용병을 모집하고, 실시간으로 소통할 수 있는 올인원 플랫폼입니다. Firestore onSnapshot 기반의 실시간 채팅, Kakao Maps 연동 경기장 확인, 반응형 UI를 구현했습니다.",
    tech1: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Firebase",
      "Kakao Maps API",
      "Vercel",
    ],
    highlights1: [
      "실시간 채팅 (Firestore onSnapshot)",
      "용병 모집 게시판 CRUD",
      "카카오맵 기반 매치경기장 검색",
      "Firebase Auth  로그인",
      "반응형 모바일 퍼스트 UI",
    ],
  },
];
export const PROJECTS2 = [
  {
    title2: "SULOG",
    subtitle2: "개인 블로그",
    description2: "React 를 통한 개인 블로그 홈페이지 구현",
    tech2: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "kakao social Login",
      "zustand",
      "Kakao Maps API",
      "Vercel",
      "MongoDB"
    ],
    highlights2: ["3개 국어 지원" , "시스템 별 밝기 모드"],
  },
];

export const TIMELINE = [
  {
    year: "2025",
    title: "개인 블로그 SULOG",
    desc: "React 사용한 1인 프로젝트",
  },
  {
    year: "2025",
    title: "ChatFutsal MVP 개발",
    desc: "기획부터 배포까지 1인 풀스택 프로젝트",
  },
  { year: "2026", title: "취업 준비 중", desc: "프론트엔드 개발자" },
];

export const NAV_LABELS: Record<string, string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};
