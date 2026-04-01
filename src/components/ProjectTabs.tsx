import { useState } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────
interface TroubleshootingItem {
  problem: string;
  solution: string;
}

interface ProjectTabsProps {
  highlights: string[];
  achievements: string[];
  troubleshooting: TroubleshootingItem[];
}

// ─── Tab Button ──────────────────────────────────────────────────────────────
function TabButton({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2.5 rounded-full text-xs font-medium tracking-wide cursor-pointer border-none transition-all duration-300 ${
        active
          ? "bg-red-500/15 text-red-500 border border-red-500/30"
          : "bg-white/3 text-white/40 hover:text-white/60 hover:bg-white/5"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function ProjectTabs({
  highlights,
  achievements,
  troubleshooting,
}: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<
    "highlights" | "achievements" | "troubleshooting"
  >("highlights");

  const tabs = [
    { key: "highlights" as const, label: "주요 기능" },
    { key: "achievements" as const, label: "성과" },
    { key: "troubleshooting" as const, label: "트러블슈팅" },
  ];

  return (
    <div>
      {/* Tab buttons */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            label={tab.label}
            active={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
          />
        ))}
      </div>

      {/* Tab content */}
      <div
        className="min-h-25"
        style={{
          animation: "fade-tab 0.3s ease",
        }}
        key={activeTab}
      >
        {/* ── Highlights ── */}
        {activeTab === "highlights" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                <span className="text-sm text-white/50">{h}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── Achievements ── */}
        {activeTab === "achievements" && (
          <div className="grid grid-cols-1 gap-4">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white/2 border border-white/6 rounded-xl p-5 transition-all duration-300 hover:bg-white/4 hover:border-emerald-400/15"
              >
                <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded shrink-0 mt-0.5">
                  ✚
                </span>
                <span className="text-sm text-white/55 leading-relaxed">
                  {a}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* ── Troubleshooting ── */}
        {activeTab === "troubleshooting" && (
          <div className="grid grid-cols-1 gap-5">
            {troubleshooting.map((item, i) => (
              <div
                key={i}
                className="bg-white/2 border border-white/6 rounded-xl overflow-hidden transition-all duration-300 hover:border-red-500/15"
              >
                {/* Problem */}
                <div className="px-5 py-4 border-b border-white/4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-medium text-red-500 bg-red-500/10 px-2 py-1 rounded shrink-0 mt-0.5">
                      문제
                    </span>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {item.problem}
                    </p>
                  </div>
                </div>
                {/* Solution */}
                <div className="px-5 py-4">
                  <div className="flex items-start gap-3">
                    <span className="text-xs font-mono font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded shrink-0 mt-0.5">
                      해결
                    </span>
                    <p className="text-sm text-white/55 leading-relaxed">
                      {item.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
