import { Hand, Sparkles, ScanSearch } from "lucide-react";

const HeroImage = () => {
  return (
    <div className="relative flex items-center justify-center">

      <div className="absolute h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[120px]" />

      <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-cyan-400/20 bg-white/5 backdrop-blur-3xl shadow-[0_0_80px_rgba(34,211,238,.18)]">

        <Hand
          size={180}
          strokeWidth={1.2}
          className="text-cyan-300"
        />

        <div className="absolute -top-6 right-4 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
          <Sparkles className="text-violet-400" size={30} />
          <p className="mt-2 text-xs text-slate-300">
            AI Tracking
          </p>
        </div>

        <div className="absolute bottom-2 -left-6 rounded-2xl border border-white/10 bg-slate-900/70 p-4 backdrop-blur-xl">
          <ScanSearch className="text-cyan-400" size={30} />
          <p className="mt-2 text-xs text-slate-300">
            Live Detection
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;