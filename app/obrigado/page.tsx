import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "Obrigado! Sua vaga está garantida | CuidaLink",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center bg-fixed bg-no-repeat">
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-black/50"
      />

      <div className="relative z-10">
        <Navbar />

        <section className="relative mx-auto flex min-h-[90vh] max-w-2xl flex-col items-center justify-center px-6 text-center pt-32 pb-20">
          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Obrigado! <br />
            <span className="text-[#25D366]">Sua vaga está garantida.</span>
          </h1>

          <p className="mt-6 max-w-lg text-base md:text-lg text-white/80 leading-relaxed">
            Em breve você receberá um e-mail com seu acesso antecipado ao
            CuidaLink. Enquanto isso, compartilhe com quem você quer proteger de
            golpes digitais.
          </p>

          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-[#25D366]/20 hover:border-[#25D366]"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para o início
          </Link>
        </section>
      </div>
    </main>
  );
}
