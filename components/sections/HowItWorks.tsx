import { Smartphone, CheckCircle2, ShieldAlert } from "lucide-react";
import { StepCard } from "@/components/ui/StepCard";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: 1,
    icon: (
      <Smartphone
        className="h-8 w-8 text-[#00E5C0]"
        strokeWidth={2}
      />
    ),
    title: "Chegou aquela mensagem estranha?",
    label: "Simples",
  },
  {
    number: 2,
    icon: (
      <CheckCircle2
        className="h-8 w-8 text-[#00E5C0]"
        strokeWidth={2}
      />
    ),
    title: "Cola o link ou texto no CuidaLink — leva 3 segundos.",
    label: "Rápido",
  },
  {
    number: 3,
    icon: (
      <ShieldAlert
        className="h-8 w-8 text-[#FF4444]"
        strokeWidth={2}
      />
    ),
    title: "A resposta aparece na hora. Sem enrolação.",
    label: "Sem complicação",
  },
];

export function HowItWorks() {
  return (
    <section className="relative py-10 md:py-20 lg:py-28 overflow-hidden text-white bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center md:bg-fixed bg-no-repeat">
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-black/40"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-8">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-3 md:gap-6">
            <span
              aria-hidden
              className="hidden sm:block flex-1 border-t border-[rgba(0,229,192,0.4)]"
            />
            <h2 className="text-center text-[#00E5C0] text-[clamp(1.4rem,4vw,2rem)] font-extrabold tracking-[-0.01em]">
              Como o CuidaLink funciona
            </h2>
            <span
              aria-hidden
              className="hidden sm:block flex-1 border-t border-[rgba(0,229,192,0.4)]"
            />
          </div>
        </FadeIn>

        <div className="mt-10 md:mt-16 grid gap-6 md:gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.1}>
              <StepCard {...step} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
