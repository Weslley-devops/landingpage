import { Smartphone, CheckCircle2, ShieldAlert } from "lucide-react";
import { StepCard } from "@/components/ui/StepCard";
import { FadeIn } from "@/components/motion/FadeIn";

const steps = [
  {
    number: 1,
    icon: (
      <Smartphone
        className="h-8 w-8"
        strokeWidth={2}
        style={{ color: "#00E5C0" }}
      />
    ),
    title: "Chegou aquela mensagem estranha?",
    label: "Simples",
  },
  {
    number: 2,
    icon: (
      <CheckCircle2
        className="h-8 w-8"
        strokeWidth={2}
        style={{ color: "#00E5C0" }}
      />
    ),
    title: "Cola o link ou texto no CuidaLink — leva 3 segundos.",
    label: "Rápido",
  },
  {
    number: 3,
    icon: (
      <ShieldAlert
        className="h-8 w-8"
        strokeWidth={2}
        style={{ color: "#FF4444" }}
      />
    ),
    title: "A resposta aparece na hora. Sem enrolação.",
    label: "Sem complicação",
  },
];

export function HowItWorks() {
  return (
    <section
      className="relative py-24 md:py-28 overflow-hidden text-white"
      style={{
        backgroundColor: "#0d2818",
        backgroundImage: "url(/blackgraud.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "rgba(0, 0, 0, 0.4)" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <FadeIn>
          <div className="mx-auto flex max-w-2xl items-center justify-center gap-6">
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ borderTop: "1px solid rgba(0,229,192,0.4)" }}
            />
            <h2
              className="text-center whitespace-nowrap"
              style={{
                color: "#00E5C0",
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              Como o CuidaLink funciona
            </h2>
            <span
              aria-hidden
              className="h-px flex-1"
              style={{ borderTop: "1px solid rgba(0,229,192,0.4)" }}
            />
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
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
