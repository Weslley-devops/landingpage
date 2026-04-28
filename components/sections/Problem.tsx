import { AlertTriangle, MessageCircle, Package } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

/* ═══════════════════════════════════════════════════════════
   Partícula verde pontual
═══════════════════════════════════════════════════════════ */
function Particle({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`absolute rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.9)] ${className ?? ""}`}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Section
═══════════════════════════════════════════════════════════ */
export function Problem() {
  return (
    <section className="relative overflow-hidden py-12 md:py-24 lg:py-32 text-white bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center md:bg-fixed bg-no-repeat">
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-black/40"
      />

      {/* Partículas */}
      <Particle className="top-[15%] left-[20%] w-[3px] h-[3px] opacity-80" />
      <Particle className="top-[25%] left-[72%] w-[2px] h-[2px] opacity-80" />
      <Particle className="top-[40%] left-[35%] w-[2px] h-[2px] opacity-60" />
      <Particle className="top-[55%] left-[88%] w-[3px] h-[3px] opacity-80" />
      <Particle className="top-[68%] left-[12%] w-[2px] h-[2px] opacity-80" />
      <Particle className="top-[78%] left-[48%] w-[3px] h-[3px] opacity-70" />
      <Particle className="top-[30%] left-[50%] w-[2px] h-[2px] opacity-50" />
      <Particle className="top-[85%] left-[78%] w-[2px] h-[2px] opacity-80" />
      <Particle className="top-[8%] left-[55%] w-[2px] h-[2px] opacity-70" />
      <Particle className="top-[60%] left-[60%] w-[2px] h-[2px] opacity-50" />
      <Particle className="top-[45%] left-[18%] w-[3px] h-[3px] opacity-80" />
      <Particle className="top-[92%] left-[38%] w-[2px] h-[2px] opacity-80" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full mx-auto max-w-[1200px] px-4 md:px-8 md:pl-20 md:pr-10 grid gap-10 md:gap-16 md:grid-cols-[55%_45%] md:items-center">
        {/* Lado esquerdo — texto */}
        <FadeIn>
          <h2 className="font-extrabold text-white text-[clamp(1.5rem,5vw,3.5rem)] leading-[1.2] tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.55)]">
            Um simples clique pode fazer você perder dinheiro que levou anos
            para conquistar
          </h2>

          <p className="mt-5 md:mt-7 text-white/[0.88] text-base md:text-[clamp(1.05rem,1.6vw,1.5rem)] font-normal leading-[1.6] max-w-full md:max-w-[90%]">
            Mensagens como essas enganam milhares de pessoas todos os dias:
          </p>

          <p className="mt-5 md:mt-7 text-white text-lg md:text-[clamp(1.25rem,2vw,1.75rem)] font-bold leading-[1.3] [text-shadow:0_2px_18px_rgba(0,0,0,0.5)]">
            E quando percebe... já é tarde demais.
          </p>
        </FadeIn>

        {/* Lado direito — cards. Mobile: empilhados retos. Desktop: cascata diagonal. */}
        <div className="relative flex flex-col items-stretch gap-4 self-start md:items-end">
          {/* Card 1 — alerta vermelho */}
          <FadeIn
            delay={0.05}
            className="self-stretch md:self-start md:ml-[260px]"
          >
            <div className="relative w-full max-w-full md:max-w-[300px] rounded-2xl bg-white px-4 py-4 md:px-5 md:rotate-3 border-2 border-[rgba(239,68,68,0.85)] shadow-[0_0_0_1px_rgba(239,68,68,0.35),0_0_30px_rgba(239,68,68,0.45),0_25px_60px_-18px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 font-bold text-[#0B2E24] text-sm md:text-base">
                <AlertTriangle
                  className="h-5 w-5 text-[#ef4444] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Sua conta bancária foi bloqueada</span>
              </div>
              <p className="mt-1.5 text-[0.9rem] text-[#4B5563] leading-snug">
                Clique no link para regularizar <strong>agora</strong>.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white border-l-2 border-b-2 border-[rgba(239,68,68,0.85)]"
              />
            </div>
          </FadeIn>

          {/* Card 2 — entrega */}
          <FadeIn
            delay={0.15}
            className="self-stretch md:self-start md:ml-2"
          >
            <div className="relative w-full max-w-full md:max-w-[280px] rounded-2xl bg-white px-4 py-4 md:px-5 md:-rotate-2 border-2 border-[rgba(255,255,255,0.95)] shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_0_28px_rgba(255,255,255,0.25),0_25px_60px_-18px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 font-bold text-[#0B2E24] text-sm md:text-base">
                <Package
                  className="h-5 w-5 text-[#14b8a6] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Entrega pendente</span>
              </div>
              <p className="mt-1.5 text-[0.9rem] text-[#4B5563] leading-snug">
                Clique para continuar.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white border-l-2 border-b-2 border-[rgba(255,255,255,0.95)]"
              />
            </div>
          </FadeIn>

          {/* Card 3 — mensagem */}
          <FadeIn
            delay={0.25}
            className="self-stretch md:self-start md:ml-[252px]"
          >
            <div className="relative w-full max-w-full md:max-w-[280px] rounded-2xl bg-white px-4 py-4 md:px-5 md:rotate-2 border-2 border-[rgba(255,255,255,0.95)] shadow-[0_0_0_1px_rgba(34,197,94,0.25),0_0_28px_rgba(255,255,255,0.25),0_25px_60px_-18px_rgba(0,0,0,0.55)]">
              <div className="flex items-center gap-2 font-bold text-[#0B2E24] text-sm md:text-base">
                <MessageCircle
                  className="h-5 w-5 text-[#14b8a6] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Oi, troquei de número</span>
              </div>
              <p className="mt-1.5 text-[0.9rem] text-[#4B5563] leading-snug">
                Me chama aqui.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white border-l-2 border-b-2 border-[rgba(255,255,255,0.95)]"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
