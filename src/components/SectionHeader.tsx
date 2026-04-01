import FadeIn from "./FadeIn";

export default function SectionHeader({ number, label }: { number: string; label: string }) {
  return (
    <FadeIn>
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs tracking-[4px] uppercase text-[#24D366] font-medium">{number}</span>
        <div className="w-12 h-px bg-[#24D366]" />
        <span className="text-xs tracking-[4px] uppercase ">{label}</span>
      </div>
    </FadeIn>
  );
}