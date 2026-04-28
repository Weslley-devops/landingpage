"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── Variantes de animação ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] flex flex-col overflow-hidden text-white bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center bg-no-repeat">
      {/* Overlay escuro para legibilidade */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-0 bg-black/55"
      />

      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav className="absolute top-0 left-0 right-0 z-20 w-full bg-transparent">
        <div className="mx-auto w-full max-w-[1200px] flex items-center justify-between gap-3 px-4 py-3 min-h-[60px] md:px-8 md:py-5">
          <a
            href="/"
            className="flex items-center gap-2 no-underline cursor-pointer min-h-[44px]"
          >
            <img
              src="/logo.svg"
              alt="CuidaLink"
              className="h-12 w-auto md:h-16"
            />
            <span className="text-[1.25rem] font-bold md:text-[1.6rem]">
              <span className="text-white">Cuida</span>
              <span className="text-[#22c55e]">Link</span>
            </span>
          </a>

          <Link
            href="#acesso"
            id="navbar-cta"
            className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent text-white font-semibold cursor-pointer transition-all duration-200 hover:-translate-y-px hover:bg-[#22c55e]/10 min-h-[44px] min-w-[44px] px-4 py-2 text-base md:px-6 md:text-[1.1rem]"
          >
            Entrar
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO GRID — 3fr texto / 2fr robô
      ══════════════════════════════════════════ */}
      <div
        className={[
          "relative z-10 flex-1 w-full mx-auto max-w-[1200px] grid items-center",
          // mobile: 1 coluna, padding 60px 24px (mais 60px de offset para a nav)
          "grid-cols-1 gap-10 px-6 pt-[120px] pb-[60px]",
          // desktop: 3fr 2fr, padding 80px 48px (+nav)
          "md:grid-cols-[3fr_2fr] md:gap-12 md:px-12 md:pt-[140px] md:pb-20",
        ].join(" ")}
      >
        {/* ───── Coluna ESQUERDA — texto ───── */}
        <div className="hero__content order-2 md:order-1 text-center md:text-left flex flex-col items-center md:items-start gap-5 max-w-[640px] mx-auto md:mx-0">
          {/* Badge */}
          <motion.span
            {...fadeUp(0.1)}
            className="inline-flex items-center gap-2 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-3.5 py-1.5 text-xs md:text-sm font-medium text-[#86efac] backdrop-blur-sm"
          >
            <span
              aria-hidden
              className="h-2 w-2 rounded-full bg-[#22c55e] shadow-[0_0_8px_rgba(34,197,94,0.85)] animate-pulse"
            />
            Proteção em tempo real
          </motion.span>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.22)}
            className="font-extrabold text-white tracking-[-0.02em] [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] text-[clamp(1.8rem,6vw,2.5rem)] leading-[1.2] md:text-[2.6rem] md:leading-[1.15] lg:text-[3.2rem]"
          >
            Seus pais podem cair em um golpe{" "}
            <span className="text-[#ff4444] [text-shadow:0_0_40px_rgba(255,68,68,0.55),_0_2px_20px_rgba(0,0,0,0.5)]">
              HOJE.
            </span>{" "}
            <span className="text-[#22c55e] font-bold [text-shadow:0_0_30px_rgba(34,197,94,0.45),_0_2px_14px_rgba(0,0,0,0.5)]">
              Você conseguiria impedir?
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            {...fadeUp(0.44)}
            className="text-white/90 font-normal leading-[1.6] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] text-base md:text-[1.15rem] lg:text-[1.25rem]"
          >
            Uma mensagem falsa parece real e em segundos pode fazer você
            perder o dinheiro que levou anos pra conquistar.
          </motion.p>

          {/* CTA + aviso */}
          <motion.div
            {...fadeUp(0.58)}
            className="w-full flex flex-col items-stretch gap-3 md:items-start md:w-auto"
          >
            <Link
              href="#acesso"
              id="hero-cta-primary"
              className="inline-flex items-center justify-center gap-2 rounded-full text-white font-bold tracking-[-0.01em] transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 bg-[#22c55e] shadow-[0_0_30px_rgba(34,197,94,0.4),0_20px_50px_-10px_rgba(34,197,94,0.65)] w-full min-h-[48px] px-6 py-4 text-base md:w-auto md:px-8 md:py-4 md:text-[1.15rem] lg:text-[1.25rem]"
            >
              <ShieldCheck className="h-5 w-5 shrink-0" strokeWidth={2.4} />
              <span>Quero proteger minha família AGORA</span>
            </Link>

            <p className="inline-flex items-center justify-center md:justify-start gap-1.5 text-[#FBBF24] font-medium text-center w-full text-sm md:text-base [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
              <span aria-hidden>⚠</span> Acesso antecipado limitado
            </p>
          </motion.div>
        </div>

        {/* ───── Coluna DIREITA — robô ───── */}
        <div className="hero__media order-1 md:order-2 relative flex items-center justify-center md:justify-end">
          {/* Glow radial verde atrás do robô */}
          <div
            aria-hidden
            className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.28)_0%,rgba(34,197,94,0.08)_45%,transparent_70%)] blur-2xl"
          />

          <motion.div
            {...fadeUp(0.3)}
            className="relative z-10 w-full max-w-[300px] sm:max-w-[340px] md:max-w-[420px]"
          >
            <img
              src="/robo6.svg"
              alt="Robô CuidaLink"
              className="w-full h-auto animate-float-robot [filter:drop-shadow(0_0_32px_rgba(34,197,94,0.18))]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
