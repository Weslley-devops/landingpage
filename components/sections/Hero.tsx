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
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/robozin.mp4"
        style={{
          willChange: "transform",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
      />

      {/* ══════════════════════════════════════════
          CAMADA 2: Overlay escuro para legibilidade
      ══════════════════════════════════════════ */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none z-[1]"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.40) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.10) 100%)",
        }}
      />
      {/* Overlay inferior para suavizar o rodapé */}
      <div
        aria-hidden
        className="absolute bottom-0 left-0 right-0 pointer-events-none z-[1]"
        style={{
          height: "30%",
          background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 100%)",
        }}
      />

      {/* ══════════════════════════════════════════
          NAVBAR MINIMALISTA
      ══════════════════════════════════════════ */}
      <nav className="relative z-20 w-full bg-transparent">
        <div
          className="mx-auto max-w-7xl flex items-center justify-between"
          style={{ padding: "1.5rem 2rem" }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <img
              src="/Logo.svg"
              alt="CuidaLink"
              style={{ height: "80px", width: "auto" }}
            />
            <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
              <span style={{ color: "white" }}>Cuida</span>
              <span style={{ color: "#22c55e" }}>Link</span>
            </span>
          </a>

          {/* Botão Entrar */}
          <Link
            href="#acesso"
            id="navbar-cta"
            className="rounded-full px-5 py-2.5 text-sm font-semibold bg-transparent transition-all duration-200 hover:-translate-y-px hover:bg-[#22c55e]/10"
            style={{
              fontSize: "1.2rem",
              color: "white",
              border: "2px solid white",
              padding: "0.5rem 1.5rem",
              borderRadius: "999px",
              background: "transparent",
              cursor: "pointer",
            }}
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
          <div
            className="max-w-[720px] text-left flex flex-col items-start"
            style={{ marginLeft: 0, paddingLeft: "3rem" }}
          >

            {/* Headline principal */}
            <motion.h1
              {...fadeUp(0.22)}
              className="font-extrabold"
              style={{
                fontSize: "4rem",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                textAlign: "left",
                textShadow: "0 2px 20px rgba(0,0,0,0.5)",
              }}
            >
              Seus pais podem cair<br />em um golpe{" "}
              <span
                style={{
                  color: "#FF6B6B",
                  textShadow: "0 0 40px rgba(255,107,107,0.55), 0 2px 20px rgba(0,0,0,0.5)",
                }}
              >
                HOJE.
              </span>{" "}
              <span
                style={{
                  color: "#4ADE80",
                  fontWeight: 700,
                  textShadow: "0 0 30px rgba(74,222,128,0.45), 0 2px 14px rgba(0,0,0,0.5)",
                }}
              >
                Você<br />conseguiria impedir?
              </span>
            </motion.h1>

            {/* Parágrafo descritivo */}
            <motion.p
              {...fadeUp(0.44)}
              style={{
                color: "rgba(255,255,255,0.90)",
                fontSize: "1.4rem",
                fontWeight: 400,
                lineHeight: 1.65,
                marginTop: "22px",
                textShadow: "0 1px 12px rgba(0,0,0,0.45)",
              }}
            >
              Uma mensagem falsa parece real e em segundos pode fazer você
              perder o dinheiro que levou anos pra conquistar.
            </motion.p>

            {/* CTA */}
            <motion.div
              {...fadeUp(0.58)}
              className="flex flex-col items-start gap-3"
              style={{ marginTop: "28px", marginLeft: 0, paddingLeft: 0 }}
            >
              <Link
                href="#acesso"
                id="hero-cta-primary"
                className="inline-flex items-center justify-center gap-2 rounded-full text-white transition-all duration-200 hover:-translate-y-1 active:translate-y-0 focus-visible:outline-none focus-visible:ring-4"
                style={{
                  background: "#22c55e",
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                  padding: "16px 28px",
                  boxShadow:
                    "0 0 30px rgba(34,197,94,0.4), 0 20px 50px -10px rgba(34,197,94,0.65)",
                }}
              >
                <ShieldCheck className="h-5 w-5" strokeWidth={2.4} />
                Quero proteger minha família AGORA
              </Link>

              {/* Aviso âmbar */}
              <p
                className="inline-flex items-center justify-center gap-1.5"
                style={{
                  color: "#FBBF24",
                  fontSize: "1.2rem",
                  fontWeight: 500,
                  textAlign: "center",
                  width: "100%",
                  textShadow: "0 1px 10px rgba(0,0,0,0.45)",
                }}
              >
                <span>⚠</span> Acesso antecipado limitado
              </p>
            </motion.div>

          </div>
        </div>
      </div>

    </section>
  );
}
