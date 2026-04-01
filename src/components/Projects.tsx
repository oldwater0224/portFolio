interface ProjectsProps {
  url : string;
  label? : string;
}

export default function Projects({ url, label = "프로젝트 보기" }: ProjectsProps) {
  return (
    <>
      <button
        className="bg-[#24D366] text-black border-none py-4 px-10 rounded-full text-xs font-medium cursor-pointer tracking-wide transition-all duration-300  hover:-translate-y-0.5"
        onClick={() =>
          window.open(url, "_blank")
        }
      >
        {label}
      </button>
    </>
  );
}
