import { Smartphone, ClipboardCheck, ShieldAlert } from "lucide-react";
import { StepCard } from "@/components/ui/StepCard";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: 1,
    icon: (
      <Smartphone
        className="h-7 w-7 text-[#00e5ff]"
        strokeWidth={2.5}
      />
    ),
    title: "Chegou aquela mensagem estranha?",
    label: "Simples",
  },
  {
    number: 2,
    icon: (
      <ClipboardCheck
        className="h-7 w-7 text-[#00e5ff]"
        strokeWidth={2.5}
      />
    ),
    title: "Cola o link ou texto no CuidaLink — leva 3 segundos.",
    label: "Rápido",
  },
  {
    number: 3,
    icon: (
      <ShieldAlert
        className="h-7 w-7 text-[#ff4444]"
        strokeWidth={2.5}
      />
    ),
    title: "A resposta aparece na hora. Sem enrolação.",
    label: "Sem complicação",
  },
];

export function HowItWorks() {
  return (
    <section 
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden text-white"
      style={{ background: "#000000" }}
    >

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 md:px-8">
        <FadeIn>
          <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 md:gap-6 mb-16 md:mb-20">
            {/* Linha decorativa Esquerda */}
            <div className="hidden sm:flex flex-1 items-center gap-2">
              <span className="w-full h-[1px] bg-gradient-to-l from-[#00e5ff]/50 to-transparent" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/80" />
            </div>

            <h2 className="text-center text-[#00e5ff] text-[28px] md:text-[36px] lg:text-[40px] font-extrabold tracking-tight drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">
              Como o CuidaLink funciona
            </h2>

            {/* Linha decorativa Direita */}
            <div className="hidden sm:flex flex-1 items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00e5ff]/80" />
              <span className="w-full h-[1px] bg-gradient-to-r from-[#00e5ff]/50 to-transparent" />
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-8 md:gap-10 grid-cols-1 lg:grid-cols-3 items-stretch">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.15}>
              <StepCard {...step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
