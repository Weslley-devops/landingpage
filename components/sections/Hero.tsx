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
    <section className="relative isolate min-h-[100vh] flex flex-col overflow-hidden">

      {/* ══════════════════════════════════════════
          CAMADA 1: Vídeo de fundo — background full-bleed
      ══════════════════════════════════════════ */}
      <video
        autoPlay
        muted
        loop
        playsInline
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover z-0 will-change-transform [transform:translateZ(0)] backface-hidden"
        src="/robozin.mp4"
      />

      {/* ══════════════════════════════════════════
          CAMADA 2: Overlay escuro para legibilidade
      ══════════════════════════════════════════ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1] bg-[linear-gradient(to_right,rgba(0,0,0,0.40)_0%,rgba(0,0,0,0.25)_50%,rgba(0,0,0,0.10)_100%)]"
      />
      {/* Overlay inferior para suavizar o rodapé */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[1] h-[30%] bg-[linear-gradient(to_top,rgba(0,0,0,0.35)_0%,transparent_100%)]"
      />

      {/* ══════════════════════════════════════════
          NAVBAR MINIMALISTA
      ══════════════════════════════════════════ */}
      <nav className="relative z-20 w-full bg-transparent">
        <div className="mx-auto max-w-7xl flex items-center justify-between px-8 py-6">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2 no-underline cursor-pointer"
          >
            <img src="/logo.svg" alt="CuidaLink" className="h-20 w-auto" />
            <span className="text-[1.8rem] font-bold">
              <span className="text-white">Cuida</span>
              <span className="text-[#22c55e]">Link</span>
            </span>
          </a>

          {/* Botão Entrar */}
          <Link
            href="#acesso"
            id="navbar-cta"
            className="rounded-full px-6 py-2 text-[1.2rem] font-semibold bg-transparent text-white border-2 border-white cursor-pointer transition-all duration-200 hover:-translate-y-px hover:bg-[#22c55e]/10"
          >
            Entrar
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          CONTEÚDO PRINCIPAL — centralizado à esquerda
      ══════════════════════════════════════════ */}
      <div className="relative z-10 flex flex-1 items-center">
        <div className="w-full px-6 md:pl-[90px] md:pr-6 pb-20 pt-8 md:pt-0">
          <div className="max-w-[720px] text-left flex flex-col items-start ml-0 pl-12">

            {/* Headline principal */}
            <motion.h1
              {...fadeUp(0.22)}
              className="font-extrabold text-[4rem] leading-[1.15] text-white tracking-[-0.02em] text-left [text-shadow:0_2px_20px_rgba(0,0,0,0.5)]"
            >
              Seus pais podem cair<br />em um golpe{" "}
              <span className="text-[#FF6B6B] [text-shadow:0_0_40px_rgba(255,107,107,0.55),_0_2px_20px_rgba(0,0,0,0.5)]">
                HOJE.
              </span>{" "}
              <span className="text-[#4ADE80] font-bold [text-shadow:0_0_30px_rgba(74,222,128,0.45),_0_2px_14px_rgba(0,0,0,0.5)]">
                Você<br />conseguiria impedir?
              </span>
            </motion.h1>

            {/* Parágrafo descritivo */}
            <motion.p
              {...fadeUp(0.44)}
              className="text-white/90 text-[1.4rem] font-normal leading-[1.65] mt-[22px] [text-shadow:0_1px_12px_rgba(0,0,0,0.45)]"
            >
              Uma mensagem falsa parece real e em segundos pode fazer você
              perder o dinheiro que levou anos pra conquistar.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.58)}
              className="flex flex-col items-start gap-3 mt-7 ml-0 pl-0"
            >
              <Link
                href="#acesso"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4 bg-[#22c55e] text-[1.4rem] font-bold tracking-[-0.01em] px-7 py-4 shadow-[0_0_30px_rgba(34,197,94,0.4),0_20px_50px_-10px_rgba(34,197,94,0.65)]"
              >
                <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
                Quero proteger minha família AGORA
              </Link>

              {/* Aviso âmbar */}
              <p className="inline-flex items-center justify-center gap-1.5 text-[#FBBF24] text-[1.2rem] font-medium text-center w-full [text-shadow:0_1px_10px_rgba(0,0,0,0.45)]">
                <span>⚠</span> Acesso antecipado limitado
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
