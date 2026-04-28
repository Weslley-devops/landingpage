import type { ReactNode } from "react";

type StepCardProps = {
  number: number;
  icon: ReactNode;
  title: string;
  label: string;
};

export function StepCard({ number, icon, title, label }: StepCardProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-full px-5 py-7 md:px-8 md:py-10 bg-white/5 border border-[rgba(0,229,192,0.25)] backdrop-blur-[12px] rounded-[20px] shadow-[0_0_30px_rgba(0,229,192,0.08),0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_40px_rgba(0,229,192,0.18),0_8px_32px_rgba(0,0,0,0.4)]">
        <div className="mb-3 md:mb-4 flex items-center justify-center gap-3 md:gap-4">
          <span className="text-[#00E5C0] text-[2rem] md:text-[2.5rem] font-black leading-none">
            {number}
          </span>
          <div className="grid h-10 w-10 md:h-12 md:w-12 place-items-center">{icon}</div>
        </div>
        <p className="text-center leading-snug text-white text-base md:text-[1.1rem] font-semibold">
          {title}
        </p>
      </div>
      <p className="mt-4 md:mt-5 text-white/45 text-[0.8rem] font-medium">
        {label}
      </p>
    </div>
  );
}
