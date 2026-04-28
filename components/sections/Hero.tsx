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
        className="absolute inset-0 pointer-events-none z-0 bg-black/45"
      />

      {/* ══════════════════════════════════════════
          NAVBAR (absoluta — fora do flow flex do .hero)
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
          BLOCO HERO — flex split content/media
      ══════════════════════════════════════════ */}
      <div
        className={[
          // mobile
          "hero relative z-10 flex-1 w-full mx-auto max-w-[1200px]",
          "flex flex-col items-center gap-8 px-4 pt-24 pb-10",
          // desktop
          "md:flex-row md:justify-between md:items-center md:gap-12 md:px-20 md:pt-28 md:pb-[60px]",
        ].join(" ")}
      >
        {/* MEDIA — vídeo do robozin */}
        <div className="hero__media order-first w-full max-w-[400px] md:order-none md:flex-1 md:max-w-[500px]">
          <motion.div {...fadeUp(0.1)}>
            <video
              autoPlay
              muted
              loop
              playsInline
              aria-hidden
              className="w-full h-auto rounded-2xl object-cover max-h-[300px] md:max-h-none shadow-[0_25px_60px_-20px_rgba(0,0,0,0.7)]"
              src="/robozin.mp4"
            />
          </motion.div>
        </div>

        {/* CONTENT — texto + CTA */}
        <div className="hero__content w-full text-center flex flex-col items-center gap-5 md:text-left md:items-start md:flex-1 md:max-w-[560px]">
          {/* Headline */}
          <motion.h1
            {...fadeUp(0.22)}
            className="font-extrabold text-white tracking-[-0.02em] [text-shadow:0_2px_20px_rgba(0,0,0,0.6)] text-[clamp(1.8rem,6vw,2.5rem)] leading-[1.2] md:text-[2.6rem] md:leading-[1.15] lg:text-[3.2rem]"
          >
            Seus pais podem cair em um golpe{" "}
            <span className="text-[#FF6B6B] [text-shadow:0_0_40px_rgba(255,107,107,0.55),_0_2px_20px_rgba(0,0,0,0.5)]">
              HOJE.
            </span>{" "}
            <span className="text-[#4ADE80] font-bold [text-shadow:0_0_30px_rgba(74,222,128,0.45),_0_2px_14px_rgba(0,0,0,0.5)]">
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
      </div>
    </section>
  );
}
