import { Cpu, Sparkles, Zap } from "lucide-react";

const stats = [
  {
    icon: Cpu,
    value: "98.9%",
    label: "Gesture Accuracy",
  },
  {
    icon: Zap,
    value: "10 ms",
    label: "Recognition Speed",
  },
  {
    icon: Sparkles,
    value: "50+",
    label: "Smart Gestures",
  },
];

const HeroStats = () => {
  return (
    <div className="mt-20 grid gap-6 md:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-2xl
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,.18)]
            "
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/15">
              <Icon className="text-cyan-400" size={28} />
            </div>

            <h2 className="text-4xl font-bold text-white">
              {stat.value}
            </h2>

            <p className="mt-3 text-slate-400">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default HeroStats;