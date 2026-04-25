import { AlertTriangle, MessageCircle, Package } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";

/* ═══════════════════════════════════════════════════════════
   Ícone decorativo de "chat bubble" usado dentro dos cubos
═══════════════════════════════════════════════════════════ */
function FloatingCubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-[#22c55e]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   Cubo 3D translúcido com ícone dentro
═══════════════════════════════════════════════════════════ */
function FloatingCube({
  className,
  size = 64,
  rotate = 0,
}: {
  className?: string;
  size?: number;
  rotate?: number;
}) {
  return (
    <div
      aria-hidden
      className={className}
      style={{
        width: size,
        height: size,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <div
        className="relative w-full h-full rounded-xl grid place-items-center"
        style={{
          background:
            "linear-gradient(135deg, rgba(34,197,94,0.10) 0%, rgba(34,197,94,0.03) 100%)",
          border: "1px solid rgba(34,197,94,0.35)",
          boxShadow:
            "inset 0 0 20px rgba(34,197,94,0.10), 0 0 30px rgba(34,197,94,0.15)",
          backdropFilter: "blur(2px)",
        }}
      >
        <FloatingCubeIcon />
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   Partícula verde pontual
═══════════════════════════════════════════════════════════ */
function Particle({
  top,
  left,
  size = 2,
  opacity = 0.8,
}: {
  top: string;
  left: string;
  size?: number;
  opacity?: number;
}) {
  return (
    <span
      aria-hidden
      className="absolute rounded-full"
      style={{
        top,
        left,
        width: size,
        height: size,
        background: "#4ade80",
        opacity,
        boxShadow: "0 0 6px rgba(74,222,128,0.9)",
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════
   Section
═══════════════════════════════════════════════════════════ */
export function Problem() {
  return (
    <section
      className="relative overflow-hidden py-24 md:py-32 text-white"
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

      {/* Partículas */}
      <Particle top="15%" left="20%" size={3} />
      <Particle top="25%" left="72%" size={2} />
      <Particle top="40%" left="35%" size={2} opacity={0.6} />
      <Particle top="55%" left="88%" size={3} />
      <Particle top="68%" left="12%" size={2} />
      <Particle top="78%" left="48%" size={3} opacity={0.7} />
      <Particle top="30%" left="50%" size={2} opacity={0.5} />
      <Particle top="85%" left="78%" size={2} />
      <Particle top="8%" left="55%" size={2} opacity={0.7} />
      <Particle top="60%" left="60%" size={2} opacity={0.5} />
      <Particle top="45%" left="18%" size={3} opacity={0.8} />
      <Particle top="92%" left="38%" size={2} />

      {/* Conteúdo */}
      <div className="relative z-10 w-full px-6 md:pl-20 md:pr-10 grid gap-16 md:grid-cols-[55%_45%] md:items-center">
        {/* Lado esquerdo — texto */}
        <FadeIn>
          <h2
            className="text-3xl font-extrabold text-white"
            style={{
              fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
            }}
          >
            Um simples clique pode fazer você perder dinheiro que levou anos
            para conquistar
          </h2>

          <p
            className="mt-7"
            style={{
              color: "rgba(255,255,255,0.88)",
              fontSize: "clamp(1.05rem, 1.6vw, 1.5rem)",
              fontWeight: 400,
              lineHeight: 1.6,
              maxWidth: "90%",
            }}
          >
            Mensagens como essas enganam milhares de pessoas todos os dias:
          </p>

          <p
            className="mt-7"
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.25rem, 2vw, 1.75rem)",
              fontWeight: 700,
              lineHeight: 1.3,
              textShadow: "0 2px 18px rgba(0,0,0,0.5)",
            }}
          >
            E quando percebe... já é tarde demais.
          </p>
        </FadeIn>

        {/* Lado direito — cards em cascata diagonal (grupo compacto no topo-direita) */}
        <div className="relative flex flex-col items-end gap-4 self-start">
          {/* Card 1 — topo (alerta vermelho, inclinado para a direita) */}
          <FadeIn
            delay={0.05}
            className="self-start ml-[244px] md:ml-[260px]"
          >
            <div
              className="relative max-w-[300px] rounded-2xl bg-white px-5 py-4"
              style={{
                transform: "rotate(3deg)",
                border: "2px solid rgba(239,68,68,0.85)",
                boxShadow:
                  "0 0 0 1px rgba(239,68,68,0.35), 0 0 30px rgba(239,68,68,0.45), 0 25px 60px -18px rgba(0,0,0,0.55)",
              }}
            >
              <div className="flex items-center gap-2 font-bold text-[#0B2E24]">
                <AlertTriangle
                  className="h-5 w-5 text-[#ef4444] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Sua conta bancária foi bloqueada</span>
              </div>
              <p className="mt-1.5 text-sm text-[#4B5563] leading-snug">
                Clique no link para regularizar <strong>agora</strong>.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white"
                style={{ borderLeft: "2px solid rgba(239,68,68,0.85)", borderBottom: "2px solid rgba(239,68,68,0.85)" }}
              />
            </div>
          </FadeIn>

          {/* Card 2 — meio esquerdo (caixa teal, inclinado para a esquerda) */}
          <FadeIn
            delay={0.15}
            className="self-start ml-0 md:ml-2"
          >
            <div
              className="relative max-w-[280px] rounded-2xl bg-white px-5 py-4"
              style={{
                transform: "rotate(-2deg)",
                border: "2px solid rgba(255,255,255,0.95)",
                boxShadow:
                  "0 0 0 1px rgba(34,197,94,0.25), 0 0 28px rgba(255,255,255,0.25), 0 25px 60px -18px rgba(0,0,0,0.55)",
              }}
            >
              <div className="flex items-center gap-2 font-bold text-[#0B2E24]">
                <Package
                  className="h-5 w-5 text-[#14b8a6] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Entrega pendente</span>
              </div>
              <p className="mt-1.5 text-sm text-[#4B5563] leading-snug">
                Clique para continuar.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white"
                style={{ borderLeft: "2px solid rgba(255,255,255,0.95)", borderBottom: "2px solid rgba(255,255,255,0.95)" }}
              />
            </div>
          </FadeIn>

          {/* Card 3 — baixo (mensagem teal, inclinado para a direita) */}
          <FadeIn
            delay={0.25}
            className="self-start ml-[236px] md:ml-[252px]"
          >
            <div
              className="relative max-w-[280px] rounded-2xl bg-white px-5 py-4"
              style={{
                transform: "rotate(2deg)",
                border: "2px solid rgba(255,255,255,0.95)",
                boxShadow:
                  "0 0 0 1px rgba(34,197,94,0.25), 0 0 28px rgba(255,255,255,0.25), 0 25px 60px -18px rgba(0,0,0,0.55)",
              }}
            >
              <div className="flex items-center gap-2 font-bold text-[#0B2E24]">
                <MessageCircle
                  className="h-5 w-5 text-[#14b8a6] shrink-0"
                  strokeWidth={2.5}
                />
                <span>Oi, troquei de número</span>
              </div>
              <p className="mt-1.5 text-sm text-[#4B5563] leading-snug">
                Me chama aqui.
              </p>
              <span
                aria-hidden
                className="absolute -bottom-2 left-6 h-4 w-4 rotate-45 bg-white"
                style={{ borderLeft: "2px solid rgba(255,255,255,0.95)", borderBottom: "2px solid rgba(255,255,255,0.95)" }}
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
