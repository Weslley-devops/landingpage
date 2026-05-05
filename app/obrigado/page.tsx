import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Obrigado! Sua vaga está garantida | CuidaLink",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-[600px] flex flex-col items-center text-center gap-6">

        {/* Logo */}
        <a href="/" className="flex flex-col items-center no-underline mb-2">
          <img
            src="/logo.svg"
            alt="CuidaLink"
            className="h-[100px] w-auto md:h-[120px]"
          />
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
