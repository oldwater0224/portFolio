
import { NAV_LABELS, PROJECTS1, SECTIONS, SKILLS_DATA, TIMELINE } from "./types";

import { useMouseParallax } from "./hooks/useMouseParallax";
import { useEffect, useState } from "react";
import NavDot from "./components/NavDot";
import SectionHeader from "./components/SectionHeader";
import FadeIn from "./components/FadeIn";








// ─── Main ────────────────────────────────────────────────────────────────────
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const mouse = useMouseParallax(0.015);
   
      

  useEffect(() => {
    const handler = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      for (const id of [...SECTIONS].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.5) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="bg-[#0A0A0B] text-[#F0EDE6] min-h-screen font-sans overflow-x-hidden">
      {/* ── Fonts & Custom Styles ── */}
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400&family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=JetBrains+Mono:wght@400;500&display=swap"
        rel="stylesheet"
      />
      <style>{`
        // *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        ::selection { background: #E63946; color: #fff; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0A0A0B; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }

        @keyframes grain {
          0%, 100% { transform: translate(0,0) }
          10% { transform: translate(-5%,-10%) }
          30% { transform: translate(3%,-15%) }
          50% { transform: translate(-10%,5%) }
          70% { transform: translate(8%,10%) }
          90% { transform: translate(-3%,8%) }
        }
        @keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }
        @keyframes slide-up { from { opacity:0; transform:translateY(30px) } to { opacity:1; transform:translateY(0) } }

        .grain-overlay {
          position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none; z-index: 9999; animation: grain 8s steps(10) infinite; opacity: 0.4;
        }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-mono { font-family: 'JetBrains Mono', monospace; }
      `}</style>

      <div className="grain-overlay" />

      {/* ══════════════════ NAV ══════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] px-6 md:px-10 py-5 flex justify-between items-center transition-all duration-300 ${
          scrollY > 100 ? "bg-[#0A0A0B]/85 backdrop-blur-xl" : "bg-transparent"
        }`}
      >
        <div className="font-display text-xl font-bold tracking-tight">
          <span className="text-red-500">H</span>eonsu
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 items-center">
          {SECTIONS.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={`bg-transparent border-none cursor-pointer text-sm font-medium tracking-wide uppercase transition-colors duration-300 ${
                activeSection === s ? "text-red-500" : "text-white/40 hover:text-white/70"
              }`}
            >
              {NAV_LABELS[s]}
            </button>
          ))}
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-transparent border-none cursor-pointer z-[1002] p-2 flex flex-col gap-[5px]"
        >
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#F0EDE6] transition-all duration-300 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-72 h-screen bg-[#0A0A0B]/98 backdrop-blur-xl z-[1001] pt-20 px-10 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.4s cubic-bezier(.22,1,.36,1)" }}
      >
        {SECTIONS.map((s, i) => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`block bg-transparent border-none cursor-pointer text-3xl font-light font-display mb-8 text-left ${
              activeSection === s ? "text-red-500" : "text-[#F0EDE6]"
            }`}
            style={{
              animation: menuOpen ? `slide-up 0.4s ease ${i * 0.08}s both` : "none",
            }}
          >
            {NAV_LABELS[s]}
          </button>
        ))}
      </div>

      {/* Side dots (desktop) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 hidden md:flex flex-col gap-3 z-[100]">
        {SECTIONS.map((s) => (
          <NavDot
            key={s}
            active={activeSection === s}
            label={NAV_LABELS[s]}
            onClick={() => scrollTo(s)}
          />
        ))}
      </div>

      {/* ══════════════════ HERO ══════════════════ */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-6"
      >
        {/* Background blobs */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full top-[10%] right-[-5%] transition-transform duration-300"
          style={{
            background: "radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)",
            transform: `translate(${mouse.x * 2}px, ${mouse.y * 2}px)`,
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full bottom-[15%] left-[5%] transition-transform duration-300"
          style={{
            background: "radial-gradient(circle, rgba(69,123,157,0.06) 0%, transparent 70%)",
            transform: `translate(${-mouse.x}px, ${-mouse.y}px)`,
          }}
        />
        {/* Grid lines */}
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-white/3 to-transparent" />
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/3 to-transparent" />

        <div className="text-center max-w-3xl relative z-10">
          <p className="text-xs tracking-[6px] uppercase text-white/30 mb-8 font-medium">
            Frontend Developer
          </p>

          <h1
            className="font-display font-black leading-none tracking-tight mb-6"
            style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
          >
            
            <span
              className="block font-normal italic text-white/35 mt-2"
              style={{ fontSize: "clamp(20px, 3vw, 36px)", letterSpacing: 0 }}
            >
              Jeong Heonsu
            </span>
          </h1>

          <p
            className="leading-loose text-white/45 font-light max-w-lg mx-auto mb-12"
            style={{ fontSize: "clamp(16px, 2vw, 20px)" }}
          >
            비전공자에서 개발자로.
            <br />
            깊이 있는 이해를 추구하며, 사용자 경험을 고민하는 개발자입니다.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={() => scrollTo("projects")}
              className="bg-red-500 text-white border-none py-4 px-10 rounded-full text-sm font-medium cursor-pointer tracking-wide transition-all duration-300 shadow-[0_4px_24px_rgba(230,57,70,0.3)] hover:-translate-y-0.5 "
            >
              프로젝트 보기
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="bg-transparent text-[#F0EDE6] border border-white/15 py-4 px-10 rounded-full text-sm font-medium cursor-pointer tracking-wide transition-all duration-300 hover:border-red-500/50 hover:text-red-500"
            >
              연락하기
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-[11px] tracking-[3px] uppercase text-white/15">Scroll</span>
            <div
              className="w-px h-12"
              style={{
                background: "linear-gradient(to bottom, rgba(230,57,70,0.5), transparent)",
                animation: "float 2s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════ ABOUT ══════════════════ */}
      <section id="about" className="py-36 px-6 max-w-4xl mx-auto">
        <SectionHeader number="01" label="About Me" />

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-bold leading-tight mb-10 tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            코드로 문제를 해결하는 것에
            <br />
            <span className="text-red-500 italic">열정</span>을 가진 개발자
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <FadeIn delay={0.2}>
            <p className="text-base leading-8 text-white/50 font-light">
              국비지원 부트캠프를 통해 프로그래밍을 시작했습니다. 비전공자라는 배경은 오히려 사용자
              관점에서 생각하는 능력을 키워주었고, '왜?'라는 질문을 멈추지 않는 학습 태도로 빠르게
              성장하고 있습니다.
            </p>
          </FadeIn>
        </div>

        {/* Timeline */}
        <FadeIn delay={0.35}>
          <div className="relative pl-10">
            <div
              className="absolute left-[7px] top-2 bottom-2 w-px"
              style={{
                background: "linear-gradient(to bottom, #E63946, rgba(230,57,70,0.1))",
              }}
            />
            {TIMELINE.map((t, i) => (
              <FadeIn key={i} delay={0.4 + i * 0.12}>
                <div className="mb-10 relative">
                  <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-red-500">
                    {i === 0 && (
                      <div className="absolute inset-[3px] rounded-full bg-red-500" />
                    )}
                  </div>
                  <span className="font-mono text-xs text-red-500 tracking-wide">
                    {t.year}
                  </span>
                  <h4 className="text-lg font-semibold mt-1 mb-1">{t.title}</h4>
                  <p className="text-white/40 text-sm font-light">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ══════════════════ SKILLS ══════════════════ */}
      <section id="skills" className="py-36 px-6 max-w-4xl mx-auto">
        <SectionHeader number="02" label="Skills" />

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-bold leading-tight mb-16 tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            기술 <span className="text-red-500 italic">스택</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SKILLS_DATA.map((group, gi) => (
            <FadeIn key={gi} delay={0.15 + gi * 0.1}>
              <div className="bg-white/3 border border-white/6 rounded-2xl p-7 transition-all duration-300 hover:bg-white/5 hover:border-red-500/20 hover:-translate-y-1">
                <h3 className="text-xs tracking-[3px] uppercase text-red-500 mb-5 font-semibold">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, ii) => (
                    <span
                      key={ii}
                      className="inline-block py-2 px-4 rounded-full text-sm bg-white/4 border border-white/8 transition-all duration-300 cursor-default hover:bg-red-500/10 hover:border-red-500/30 hover:text-red-500 hover:scale-105"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════ PROJECTS ══════════════════ */}
      <section id="projects" className="py-36 px-6 max-w-4xl mx-auto">
        <SectionHeader number="03" label="Projects" />

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-bold leading-tight mb-16 tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 52px)" }}
          >
            주요 <span className="text-red-500 italic">프로젝트</span>
          </h2>
        </FadeIn>

        {PROJECTS1.map((project, pi) => (
          <FadeIn key={pi} delay={0.2}>
            <div className="bg-white/2 border border-white/6 rounded-3xl p-8 md:p-14 relative overflow-hidden">
              {/* Accent glow */}
              <div
                className="absolute top-0 right-0 w-52 h-52"
                style={{
                  background:
                    "radial-gradient(circle at top right, rgba(230,57,70,0.06), transparent 70%)",
                }}
              />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_16px_rgba(230,57,70,0.4)]" />
                  <span className="font-mono text-xs text-white/30 tracking-[2px] uppercase">
                    Featured Project
                  </span>
                </div>

                <h3
                  className="font-display font-bold mb-2 tracking-tight"
                  style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
                >
                  {project.title}
                </h3>
                <p className="text-lg text-white/45 mb-8 font-light">{project.subtitle}</p>
                <p className="text-base leading-loose text-white/50 max-w-2xl mb-10 font-light">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {project.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                      <span className="text-sm text-white/50">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="inline-block py-1.5 px-3.5 rounded-full text-xs font-mono tracking-tight bg-red-500/10 border border-red-500/25 text-red-500 transition-all duration-300 hover:bg-red-500/20 hover:-translate-y-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </section>

      {/* ══════════════════ CONTACT ══════════════════ */}
      <section id="contact" className="py-36 px-6 max-w-4xl mx-auto text-center">
        <SectionHeader number="04" label="Contact" />

        <FadeIn delay={0.1}>
          <h2
            className="font-display font-bold leading-tight mb-6 tracking-tight"
            style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
          >
            함께 일하고 <span className="text-red-500 italic">싶으시다면</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-lg leading-loose text-white/40 max-w-md mx-auto mb-12 font-light">
            새로운 기회와 협업에 항상 열려있습니다.
            <br />
            편하게 연락 주세요!
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="flex gap-5 justify-center flex-wrap">
            <a
              href="/"
              className="inline-flex items-center gap-2.5 bg-red-500 text-white no-underline py-4 px-10 rounded-full text-sm font-medium transition-all duration-300 shadow-[0_4px_24px_rgba(230,57,70,0.3)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(230,57,70,0.4)]"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              이메일 보내기
            </a>
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-transparent text-[#F0EDE6] no-underline border border-white/15 py-4 px-10 rounded-full text-sm font-medium transition-all duration-300 hover:border-red-500/50 hover:text-red-500"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── Footer ── */}
      <footer className="text-center py-10 border-t border-white/4">
        <p className="text-xs text-white/15 tracking-wide">
          © Built with React & TypeScript.
        </p>
      </footer>
    </div>
  );
}