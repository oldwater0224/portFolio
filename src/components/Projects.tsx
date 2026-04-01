interface ProjectsProps {
  url : string;
  label? : string;
}

export default function Projects({ url, label = "프로젝트 보기" }: ProjectsProps) {
  return (
    <>
      <button
        className="bg-red-500 text-white border-none py-4 px-10 rounded-full text-xs font-medium cursor-pointer tracking-wide transition-all duration-300 shadow-[0_4px_24px_rgba(230,57,70,0.3)] hover:-translate-y-0.5"
        onClick={() =>
          window.open(url, "_blank")
        }
      >
        {label}
      </button>
    </>
  );
}
