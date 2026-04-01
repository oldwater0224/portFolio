// Constants 
export const SECTIONS = ["home", "about", "skills", "projects", "contact"];

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
  {
    category: "Backend & DB",
    items: ["Firebase Auth", "Cloud Firestore", "Kakao OAuth", "MongoDB"],
  },
  { category: "Tools", items: ["Git / GitHub", "Kakao Maps API", "Vercel"] },
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
      "카카오맵 기반 매치경기장 안내",
      "매치 조회/참가 신청/취소 ",
      "반응형 모바일 퍼스트 UI",
    ],
    achievements1: [
      "firestore 실시간 구독으로 메세지 수신 지연 0.5초 이내 달성",
      "WriteBatch 활용으로 읽음 처리 성능 최적화(개별 write 대비 약 60% 감소)",
      "Kakao Maps API로 경기장 위치 시각화 구현",
      "용병 모집 게시판 CRUD 구현 및 사용자 친화적 UI/UX 설계",
      "반응형 모바일 퍼스트 UI",
    ],
    troubleshooting1: [
      {
        problem:
          "next/router를 사용한 페이지 이동이 App Router 환경에서 동작하지 않았다.",
        solution:
          "next/navigation의 useRouter로 마이그레이션하여 App Router의 라우팅 방식에 맞게 수정했다.",
      },
      {
        problem:
          "useState + useEffect로 파생 상태를 관리하니 불필요한 리렌더링이 발생했다.",
        solution:
          "useMemo를 활용한 파생 상태 패턴으로 변경하여 렌더링 횟수를 줄이고 코드 가독성을 높였다.",
      },
      {
        problem:
          "Firestore 컬렉션 이름 오타로 데이터가 불러와지지 않아서 에러 메시지 없이 빈 배열만 반환되었다.",
        solution:
          "Firestore는 없는 컬렉션을 에러 없이 빈 결과로 반환하는 특성임을 파악하고, 컬렉션 이름을 상수로 관리하여 재발을 방지했다.",
      },
      {
        problem:
          "TypeScript에서 매치 상태 값의 리터럴 타입이 맞지 않아 컴파일 에러가 발생했다.",
        solution:
          "as const 단언과 유니온 타입을 적용하여 타입 안정성을 확보했다.",
      },
    ],
  },
];
export const PROJECTS2 = [
  {
    title2: "SULOG",
    subtitle2: "블로그 & 커뮤니티 플랫폼",
    description2:
      "블로그 기반 커뮤니티 웹 애플리케이션입니다. Kakao OAuth 소셜 로그인, Zustand 기반 상태 관리,  MongoDB 연동 RESTful API, 그리고 검색·필터·페이지네이션 기능을 구현했습니다.",
    tech2: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "MongoDB",
      "Kakao OAuth",
      "Zustand",
      "Axios",
      "Vercel",
    ],
    highlights2: [
      "Kakao OAuth 소셜 로그인",
      "게시글 CRUD , 댓글 기능",
      "카테고리 필터 + 키워드 검색",
      "페이지네이션 (서버사이드)",
     
    ],
    achievements2: [
      "URLSearchParams 기반 필터/정렬/검색 상태를 URL로 관리하여 새로고침 시에도 상태 유지",
      "Axios 인터셉터로 API 통신 모듈화, 컴포넌트 내 중복 API 호출 코드 제거",
      "React Router loader 패턴 적용으로 페이지 진입 시 데이터 프리페칭 구현",
      "서버사이드 페이지네이션으로 한 번에 12개씩 로딩, 불필요한 전체 데이터 조회 방지",
      
    ],
    troubleshooting2: [
      {
        problem:
          "페이지네이션 구현 시 URLSearchParams로 쿼리 스트링을 조합하는 과정에서 page, perPage 값이 undefined가 되어 API 호출이 실패했다.",
        solution:
          "loader에서 URLSearchParams로 쿼리 스트링을 안전하게 조합하고, page/perPage 기본값을 설정했다. 프론트에서는 옵셔널 체이닝과 기본값 처리로 방어 처리했다.",
      },
      {
        problem:
          "카카오 로그인 API 호출 시 CORS 에러가 발생하여 인증이 실패했다.",
        solution:
          "백엔드에서 카카오 API를 호출하도록 프록시 패턴으로 구조를 변경하여 CORS 문제를 해결했다.",
      },
      {
        problem:
          "카테고리나 정렬 변경 시 이전 페이지 번호가 유지되어 빈 결과가 표시되는 문제가 있었다.",
        solution:
          "필터/정렬 변경 핸들러에서 page를 항상 1로 초기화하도록 수정하여 UX를 개선했다.",
      },
    ],
  },
];



export const NAV_LABELS: Record<string, string> = {
  home: "Home",
  about: "About",
  skills: "Skills",
  projects: "Projects",
  contact: "Contact",
};
