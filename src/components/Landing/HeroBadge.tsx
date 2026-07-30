type HeroBadgeProps = {
  text: string;
};

const HeroBadge = ({ text }: HeroBadgeProps) => {
  return (
    <div
      className="
        inline-flex
        items-center
        gap-2
        rounded-full
        border
        border-cyan-400/20
        bg-cyan-400/10
        px-5
        py-2
        text-sm
        font-semibold
        tracking-wide
        text-cyan-300
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(34,211,238,0.15)]
      "
    >
      <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      {text}
    </div>
  );
};

export default HeroBadge;