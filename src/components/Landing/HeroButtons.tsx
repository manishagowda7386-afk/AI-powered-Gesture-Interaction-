import { ArrowRight, Github } from "lucide-react";

const HeroButtons = () => {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
      <button
        className="
          flex items-center gap-2
          rounded-xl
          bg-cyan-500
          px-7 py-4
          font-semibold
          text-black
          transition-all
          duration-300
          hover:scale-105
          hover:bg-cyan-400
          shadow-[0_0_35px_rgba(34,211,238,0.35)]
        "
      >
        Launch Demo
        <ArrowRight size={18} />
      </button>

      <button
        className="
          flex items-center gap-2
          rounded-xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-xl
          px-7 py-4
          font-semibold
          text-white
          transition-all
          duration-300
          hover:border-cyan-400/40
          hover:bg-white/10
        "
      >
        <Github size={18} />
        GitHub
      </button>
    </div>
  );
};

export default HeroButtons;