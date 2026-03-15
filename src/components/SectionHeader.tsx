import FadeIn from "./FadeIn";

export default function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[4px] uppercase text-red-500 font-medium">{number}</span>
        <div className="w-12 h-px bg-red-500" />
        <span className="text-xs tracking-[4px] uppercase text-white/30">{label}</span>
      </div>
    </FadeIn>
  );
}