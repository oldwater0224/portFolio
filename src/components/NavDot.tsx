export default function NavDot({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      title={label}
      className={`h-2.5 rounded-full border-none cursor-pointer p-0 ${
        active ? "w-7 bg-[#24D366]" : "w-2.5 bg-white/20"
      }`}
      style={{ transition: "all 0.4s cubic-bezier(.22,1,.36,1)" }}
    />
  );
}