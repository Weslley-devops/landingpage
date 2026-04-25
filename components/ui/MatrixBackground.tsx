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
      <div className="relative w-full h-full rounded-xl grid place-items-center bg-[linear-gradient(135deg,rgba(34,197,94,0.10)_0%,rgba(34,197,94,0.03)_100%)] border border-[rgba(34,197,94,0.35)] shadow-[inset_0_0_20px_rgba(34,197,94,0.10),0_0_30px_rgba(34,197,94,0.15)] backdrop-blur-[2px]">
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
      className="absolute rounded-full bg-[#4ade80] shadow-[0_0_6px_rgba(74,222,128,0.9)]"
      style={{
        top,
        left,
        width: size,
        height: size,
        opacity,
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
        className="absolute inset-0 pointer-events-none bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center bg-no-repeat"
      />

      {/* Grade em perspectiva — piso matrix */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none origin-top opacity-90 bg-[linear-gradient(to_right,transparent_0%,rgba(34,197,94,0.35)_50%,transparent_100%)_0_0_/_100%_1px_no-repeat,repeating-linear-gradient(0deg,rgba(34,197,94,0.22)_0_1px,transparent_1px_80px),repeating-linear-gradient(90deg,rgba(34,197,94,0.22)_0_1px,transparent_1px_80px)] [transform:perspective(700px)_rotateX(62deg)_translateY(32%)_scale(1.8)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_20%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black_20%,transparent_80%)]"
      />

      {/* Grade de teto (espelhada) */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none origin-bottom opacity-[0.55] bg-[repeating-linear-gradient(0deg,rgba(34,197,94,0.14)_0_1px,transparent_1px_80px),repeating-linear-gradient(90deg,rgba(34,197,94,0.14)_0_1px,transparent_1px_80px)] [transform:perspective(700px)_rotateX(-62deg)_translateY(-32%)_scale(1.8)] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black_20%,transparent_80%)] [-webkit-mask-image:radial-gradient(ellipse_70%_60%_at_50%_100%,black_20%,transparent_80%)]"
      />

      {/* Glow radial central */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_60%_55%_at_50%_50%,rgba(34,197,94,0.28)_0%,rgba(34,197,94,0.10)_35%,transparent_70%)]"
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
