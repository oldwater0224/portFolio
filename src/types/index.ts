// ─── Types & Constants ───────────────────────────────────────────────────────
export const SECTIONS = ["home", "about", "skills", "projects", "contact"];

export const SKILLS_DATA = [
  { category: "Frontend", items: ["React", "Next.js 14","JavaScript", "TypeScript", "Tailwind CSS", "HTML / CSS"] },
  { category: "Backend & DB", items: ["Firebase Auth", "Cloud Firestore" ] },
  { category: "Tools", items: ["Git / GitHub", "VS Code", "Kakao Maps API" ] },
];

export const PROJECTS1 = [
  {
    title: "ChatFutsal",
    subtitle: "풋살 매칭 & 실시간 채팅 플랫폼",
    description:
      "풋살 경기를 찾고, 용병을 모집하고, 실시간으로 소통할 수 있는 올인원 플랫폼입니다. Firestore onSnapshot 기반의 실시간 채팅, Kakao Maps 연동 경기장 확인, 반응형 UI를 구현했습니다.",
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "Firebase", "Kakao Maps API", "Vercel"],
    highlights: [
      "실시간 채팅 (Firestore onSnapshot)",
      "용병 모집 게시판 CRUD",
      "카카오맵 기반 매치경기장 검색",
      "Firebase Auth  로그인",
      "반응형 모바일 퍼스트 UI",
    ],
  },
];

export const TIMELINE = [
  { year: "2024", title: "국비지원 코딩 부트캠프 수료", desc : ""},
  { year: "2025", title: "ChatFutsal MVP 개발", desc: "기획부터 배포까지 1인 풀스택 프로젝트" },
  { year: "2025", title: "취업 준비 중", desc: "프론트엔드 개발자" },
];

export const NAV_LABELS: Record<string, string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};