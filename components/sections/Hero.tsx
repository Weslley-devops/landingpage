"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

/* ─── Variantes de animação ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});


export function Hero() {
  return (
    <section
      className="relative text-white overflow-hidden"
      style={{ background: "#000000" }}
    >
      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 w-full" style={{ background: "#1c1c1c" }}>
        <div className="mx-auto flex max-w-[1200px] items-center px-6 py-7 md:px-12 md:py-8">

          {/* Logo à esquerda */}
          <a
            href="/"
            className="flex items-center no-underline cursor-pointer"
          >
            <img src="/logo.svg" alt="CuidaLink" className="h-10 w-auto" />
          </a>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO — grid 1fr 1fr
      ══════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1200px]">
        <div
          className="flex flex-col items-center text-center min-h-[520px] gap-0 px-5 pt-40 pb-[160px] md:px-12 md:pt-52 md:pb-[200px]"
        >
          {/* ───── Conteúdo centralizado ───── */}
          <div className="w-full max-w-[780px] flex flex-col items-center text-center relative z-10">

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.18)}
              className="font-bold text-white leading-[1.12] tracking-[-1px] mb-6 text-[36px] md:text-[56px] lg:text-[64px]"
            >
              Seus pais podem cair em um golpe{" "}
              <span className="text-[#ff4444]">HOJE.</span>{" "}
              <span className="text-[#25D366]">Você conseguiria impedir?</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-[16px] md:text-[18px] text-white/50 leading-[1.7] max-w-[560px] mb-10"
            >
              Uma mensagem falsa parece real e em segundos pode fazer você
              perder o dinheiro que levou anos pra conquistar.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.44)}
              className="flex flex-col items-center"
            >
              <Link
                href="#acesso"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#25D366] text-[#0b1f13] font-semibold text-[15px] px-8 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 mb-3.5 shadow-[0_8px_32px_-8px_rgba(37,211,102,0.6)]"
              >
                <ShieldCheck className="h-[18px] w-[18px] shrink-0" strokeWidth={2.4} />
                <span>Quero proteger minha família AGORA</span>
              </Link>

              {/* Aviso */}
              <p className="flex items-center gap-1.5 text-[12px] text-[rgba(255,200,50,0.7)]">
                <span aria-hidden>⚠</span> Acesso antecipado limitado
              </p>
            </motion.div>
          </div>
        </div>


      </div>
    </section>
  );
}
