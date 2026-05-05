import type { ReactNode } from "react";

type StepCardProps = {
  number: number;
  icon: ReactNode;
  title: string;
  label: string;
};

export function StepCard({ number, icon, title, label }: StepCardProps) {
  return (
    <div className="relative group">
      {/* ── Glassmorphism Card ── */}
      <div className="relative h-full flex flex-col items-center overflow-hidden w-full px-6 py-10 md:px-8 md:py-12 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-[24px] border border-[#333333] transition-all duration-300 hover:-translate-y-2 hover:bg-[#222222]/90 shadow-[inset_0_0_40px_rgba(0,229,255,0.05),0_10px_40px_rgba(0,0,0,0.5)] group-hover:shadow-[inset_0_0_60px_rgba(0,229,255,0.1),0_15px_50px_rgba(0,0,0,0.6)]">
        
        {/* ── Luz Superior (Reflexo) ── */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[20px] bg-[#00e5ff]/10 blur-[20px]" />

        {/* ── Conteúdo Topo (Número + Ícone) ── */}
        <div className="mb-6 flex flex-col items-center justify-center gap-4">
          <span className="text-[#00e5ff] text-[4rem] md:text-[5rem] font-extrabold leading-none opacity-90 tracking-tighter drop-shadow-[0_0_15px_rgba(0,229,255,0.3)]">
            {number}
          </span>
          <div className="grid h-14 w-14 md:h-16 md:w-16 place-items-center bg-[#00e5ff]/10 rounded-full border border-[#00e5ff]/20">
            {icon}
          </div>
        </div>

        {/* ── Textos ── */}
        <p className="text-center leading-snug text-white text-[1.1rem] md:text-[1.2rem] font-semibold mb-3">
          {title}
        </p>
        <p className="text-center text-[#00e5ff]/70 text-[0.9rem] font-bold uppercase tracking-widest mt-auto">
          {label}
        </p>

      </div>
    </div>
  );
}
