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

export function MatrixBackground() {
  return (
    <>
      {/* Base image + solid fallback */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "#0d2818",
          backgroundImage: "url(/blackgraud.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Grade em perspectiva — piso matrix */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to right, transparent 0%, rgba(34,197,94,0.35) 50%, transparent 100%) 0 0 / 100% 1px no-repeat,
            repeating-linear-gradient(0deg, rgba(34,197,94,0.22) 0 1px, transparent 1px 80px),
            repeating-linear-gradient(90deg, rgba(34,197,94,0.22) 0 1px, transparent 1px 80px)
          `,
          transform: "perspective(700px) rotateX(62deg) translateY(32%) scale(1.8)",
          transformOrigin: "center top",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 0%, black 20%, transparent 80%)",
          opacity: 0.9,
        }}
      />

      {/* Grade de teto (espelhada) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            repeating-linear-gradient(0deg, rgba(34,197,94,0.14) 0 1px, transparent 1px 80px),
            repeating-linear-gradient(90deg, rgba(34,197,94,0.14) 0 1px, transparent 1px 80px)
          `,
          transform: "perspective(700px) rotateX(-62deg) translateY(-32%) scale(1.8)",
          transformOrigin: "center bottom",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, black 20%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 100%, black 20%, transparent 80%)",
          opacity: 0.55,
        }}
      />

      {/* Glow radial central */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 50%, rgba(34,197,94,0.28) 0%, rgba(34,197,94,0.10) 35%, transparent 70%)",
        }}
      />

      {/* Cubos flutuantes decorativos */}
      <FloatingCube className="absolute top-[10%] left-[6%] animate-float" size={70} rotate={-12} />
      <FloatingCube className="absolute top-[22%] right-[8%] animate-float" size={56} rotate={8} />
      <FloatingCube className="absolute bottom-[14%] left-[10%] animate-float" size={80} rotate={6} />
      <FloatingCube className="absolute bottom-[18%] right-[14%] animate-float" size={52} rotate={-10} />
      <FloatingCube className="absolute top-[48%] left-[2%] hidden lg:block animate-float" size={44} rotate={14} />
      <FloatingCube className="absolute top-[6%] right-[28%] hidden lg:block animate-float" size={40} rotate={-6} />

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
    </>
  );
}
