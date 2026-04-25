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
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-brand-950 via-[#061912] to-brand-900">
      <Navbar />

      <section className="relative mx-auto flex min-h-[90vh] max-w-2xl flex-col items-center justify-center px-6 text-center pt-32 pb-20">
        <div className="relative mb-8">
          <img src="/Logo.svg" alt="CuidaLink" className="h-[180px] w-auto" />
        </div>

        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
          Obrigado! <br />
          <span className="text-brand-400">Sua vaga está garantida.</span>
        </h1>

        <p className="mt-6 max-w-lg text-base md:text-lg text-white/80 leading-relaxed">
          Em breve você receberá um e-mail com seu acesso antecipado ao
          CuidaLink. Enquanto isso, compartilhe com quem você quer proteger de
          golpes digitais.
        </p>

        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>
      </section>
    </main>
  );
}
