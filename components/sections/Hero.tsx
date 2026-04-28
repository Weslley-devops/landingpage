"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, Shield, Zap, Clock } from "lucide-react";

/* ─── Variantes de animação ─── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

/* ─── Checkmark inline para o logo ─── */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export function Hero() {
  return (
    <section
      className={[
        "relative text-white",
        // Fundo verde-escuro WhatsApp + camadas radiais
        "bg-[radial-gradient(ellipse_60%_70%_at_75%_50%,rgba(37,211,102,0.13)_0%,transparent_70%),radial-gradient(ellipse_40%_50%_at_20%_30%,rgba(18,140,126,0.08)_0%,transparent_60%),#0b1f13]",
      ].join(" ")}
    >
      {/* ══════════════════════════════════════════
          NAVBAR
      ══════════════════════════════════════════ */}
      <nav className="sticky top-0 z-50 w-full border-b-[0.5px] border-[rgba(37,211,102,0.12)] bg-[#0b1f13]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 py-4 md:px-12 md:py-[18px]">
          {/* Logo composto */}
          <a
            href="/"
            className="flex items-center gap-2.5 no-underline cursor-pointer min-h-[44px]"
          >
            <span
              aria-hidden
              className="grid h-9 w-9 place-items-center rounded-[10px] bg-[#25D366] text-white"
            >
              <CheckIcon className="h-5 w-5" />
            </span>
            <span className="text-[18px] font-medium tracking-tight">
              <span className="text-white">Cuida</span>
              <span className="text-[#25D366]">Link</span>
            </span>
          </a>

          {/* Botão Entrar */}
          <Link
            href="#acesso"
            id="navbar-cta"
            className="inline-flex items-center justify-center rounded-full bg-[#25D366] text-[#0b1f13] font-semibold text-sm transition-all duration-200 hover:-translate-y-px hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 min-h-[44px] min-w-[44px] px-5 py-[9px]"
          >
            Entrar
          </Link>
        </div>
      </nav>

      {/* ══════════════════════════════════════════
          HERO — grid 1fr 1fr
      ══════════════════════════════════════════ */}
      <div className="mx-auto max-w-[1200px]">
        <div
          className={[
            "grid items-center min-h-[520px]",
            "grid-cols-1 gap-0 px-5 pt-12 pb-[52px]",
            "md:grid-cols-2 md:px-12 md:pt-16 md:pb-[72px]",
          ].join(" ")}
        >
          {/* ───── Coluna ESQUERDA — texto ───── */}
          <div className="order-2 md:order-1 flex flex-col items-center text-center md:items-start md:text-left">
            {/* Badge */}
            <motion.span
              {...fadeUp(0.08)}
              className="inline-flex items-center gap-2 rounded-full bg-[rgba(37,211,102,0.1)] border-[0.5px] border-[rgba(37,211,102,0.3)] px-3.5 py-1.5 text-[12px] font-medium text-[#86efac] mb-[22px]"
            >
              <span
                aria-hidden
                className="h-1.5 w-1.5 rounded-full bg-[#25D366] shadow-[0_0_8px_rgba(37,211,102,0.85)] animate-pulse"
              />
              Proteção em tempo real
            </motion.span>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.18)}
              className="font-bold text-white leading-[1.15] tracking-[-0.5px] mb-5 text-[28px] md:text-[40px]"
            >
              Seus pais podem cair em um golpe{" "}
              <span className="text-[#ff4444]">HOJE.</span>{" "}
              <span className="text-[#25D366]">Você conseguiria impedir?</span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              {...fadeUp(0.32)}
              className="text-[14px] md:text-[15px] text-white/45 leading-[1.7] max-w-[440px] mb-8"
            >
              Uma mensagem falsa parece real e em segundos pode fazer você
              perder o dinheiro que levou anos pra conquistar.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.44)}
              className="w-full md:w-auto flex flex-col items-center md:items-start"
            >
              <Link
                href="#acesso"
                id="hero-cta-primary"
                className="inline-flex w-full md:w-auto items-center justify-center md:justify-start gap-2.5 rounded-full bg-[#25D366] text-[#0b1f13] font-semibold text-[14px] px-7 py-4 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1EBE5D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/60 mb-3.5 shadow-[0_8px_24px_-8px_rgba(37,211,102,0.5)]"
              >
                <ShieldCheck className="h-[17px] w-[17px] shrink-0" strokeWidth={2.4} />
                <span>Quero proteger minha família AGORA</span>
              </Link>

              {/* Aviso */}
              <p className="flex items-center gap-1.5 text-[12px] text-[rgba(255,200,50,0.7)]">
                <span aria-hidden>⚠</span> Acesso antecipado limitado
              </p>
            </motion.div>
          </div>

          {/* ───── Coluna DIREITA — robô ───── */}
          <div className="order-1 md:order-2 relative flex items-end justify-center min-h-[300px] md:min-h-[440px] mb-8 md:mb-0">
            {/* Glow externo */}
            <div
              aria-hidden
              className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none rounded-full w-[280px] h-[280px] md:w-[440px] md:h-[440px] bg-[radial-gradient(ellipse_at_50%_85%,rgba(37,211,102,0.22)_0%,rgba(18,140,126,0.10)_40%,transparent_70%)]"
            />
            {/* Glow interno */}
            <div
              aria-hidden
              className="absolute left-1/2 bottom-0 -translate-x-1/2 pointer-events-none w-[280px] h-[200px] bg-[radial-gradient(ellipse_at_50%_100%,rgba(37,211,102,0.30)_0%,transparent_60%)]"
            />
            {/* Sombra no chão */}
            <div
              aria-hidden
              className="absolute left-1/2 -translate-x-1/2 bottom-1 pointer-events-none w-[200px] h-[18px] rounded-full bg-[rgba(37,211,102,0.18)] blur-[8px]"
            />

            <motion.img
              {...fadeUp(0.22)}
              src="/robo6.svg"
              alt="Robô CuidaLink"
              className={[
                "relative z-[2] h-auto",
                "w-[80%] md:w-[95%] lg:w-full",
                "mix-blend-screen",
                "[filter:drop-shadow(0_0_24px_rgba(37,211,102,0.35))_drop-shadow(0_16px_48px_rgba(37,211,102,0.18))_brightness(1.05)_contrast(1.05)]",
              ].join(" ")}
            />
          </div>
        </div>

        {/* ══════════════════════════════════════════
            BADGES DE CREDIBILIDADE
        ══════════════════════════════════════════ */}
        <div className="border-t-[0.5px] border-[rgba(37,211,102,0.12)] flex flex-row flex-wrap gap-[14px] md:gap-6 px-5 py-5 md:px-12 md:py-6">
          <span className="inline-flex items-center gap-2 text-[12px] text-white/35">
            <Zap className="h-[13px] w-[13px] shrink-0" strokeWidth={2} aria-hidden />
            Gratuito para começar
          </span>
          <span className="inline-flex items-center gap-2 text-[12px] text-white/35">
            <Shield className="h-[13px] w-[13px] shrink-0" strokeWidth={2} aria-hidden />
            Dados protegidos
          </span>
          <span className="inline-flex items-center gap-2 text-[12px] text-white/35">
            <Clock className="h-[13px] w-[13px] shrink-0" strokeWidth={2} aria-hidden />
            Resultado em segundos
          </span>
        </div>
      </div>
    </section>
  );
}
