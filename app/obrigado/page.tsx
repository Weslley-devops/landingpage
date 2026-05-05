import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado! Sua vaga está garantida | CuidaLink",
  robots: { index: false, follow: false },
};

/* ── Checkmark inline (mesmo do Hero) ── */
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

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center gap-6">

        {/* Logo */}
        <a href="/" className="flex flex-col items-center gap-3 no-underline mb-2">
          <span className="grid h-[100px] w-[100px] md:h-[120px] md:w-[120px] place-items-center rounded-[22px] md:rounded-[26px] bg-[#25D366] text-white">
            <CheckIcon className="h-12 w-12 md:h-14 md:w-14" />
          </span>
          <span className="text-[22px] md:text-[26px] font-semibold tracking-tight">
            <span className="text-white">Cuida</span>
            <span className="text-[#25D366]">Link</span>
          </span>
        </a>

        {/* Título */}
        <h1 className="text-[28px] md:text-[48px] font-extrabold text-white leading-tight tracking-tight">
          Obrigado!{" "}
          <span className="text-[#25D366]">Sua vaga está garantida.</span>
        </h1>

        {/* Subtítulo */}
        <p className="text-[15px] md:text-[17px] text-white/70 leading-relaxed max-w-[480px]">
          Em breve você receberá um e-mail com seu acesso antecipado ao
          CuidaLink. Enquanto isso, compartilhe com quem você quer proteger de
          golpes digitais.
        </p>

        {/* Botão */}
        <Link
          href="/"
          className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#25D366]/20 hover:border-[#25D366]"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

      </div>
    </main>
  );
}
