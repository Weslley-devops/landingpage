"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { leadSchema, maskPhone, type LeadInput } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { getSupabase } from "@/lib/supabase";
import { FadeIn } from "@/components/motion/FadeIn";

export function LeadForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: { nome: "", email: "", whatsapp: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);

    try {
      const { error } = await getSupabase().from("leads").insert({
        nome: data.nome,
        email: data.email,
        telefone: data.whatsapp || null,
      });

      if (error) {
        console.error("[lead] supabase error", error);
        setSubmitError(
          "Não foi possível enviar agora. Tente novamente em instantes.",
        );
        return;
      }
    } catch (err) {
      console.error("[lead] client init error", err);
      setSubmitError(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
      return;
    }

    track("generate_lead", { method: "landing_form" });
    reset();
    router.push("/obrigado");
  });

  return (
    <section
      id="acesso"
      className="relative overflow-hidden py-12 md:py-24 lg:py-28 text-white"
      style={{ background: "#000000" }}
    >
      <div className="relative z-10 mx-auto px-4 md:px-8 max-w-[480px] md:max-w-[600px] lg:max-w-[760px] w-full">
        <FadeIn>
          <div className="relative overflow-hidden w-full px-6 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12 lg:px-20 lg:py-16 bg-[#1a1a1a]/80 backdrop-blur-xl rounded-[24px] border border-[#333333] shadow-[inset_0_0_40px_rgba(0,229,255,0.05),0_10px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:shadow-[inset_0_0_60px_rgba(0,229,255,0.1),0_15px_50px_rgba(0,0,0,0.6)]">
            
            {/* ── Luz Superior (Reflexo) ── */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/50 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[20px] bg-[#00e5ff]/10 blur-[20px] pointer-events-none" />
            <h2 className="text-white text-[clamp(1.5rem,5vw,2.25rem)] font-extrabold leading-[1.2] tracking-[-0.02em]">
              Quero acesso antecipado
            </h2>
            <p className="mt-2 text-white/60 text-sm md:text-base leading-normal">
              Rápido, gratuito e sem compromisso.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-6 md:mt-8 flex flex-col gap-4 md:gap-5">
              <Input
                label="Seu nome"
                placeholder="Ex: João Silva"
                autoComplete="name"
                error={errors.nome?.message}
                {...register("nome")}
              />
              <Input
                label="Seu e-mail"
                type="email"
                placeholder="Ex: joao@email.com"
                autoComplete="email"
                error={errors.email?.message}
                {...register("email")}
              />
              <Input
                label="WhatsApp"
                optional
                type="tel"
                inputMode="tel"
                placeholder="(00) 00000-0000"
                autoComplete="tel-national"
                error={errors.whatsapp?.message}
                {...register("whatsapp", {
                  onChange: (e) => {
                    setValue("whatsapp", maskPhone(e.target.value), {
                      shouldValidate: false,
                    });
                  },
                })}
              />

              {submitError && (
                <p role="alert" className="text-sm text-[#fca5a5]">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full min-h-[48px] items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white text-base transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 bg-[#25D366] shadow-[0_18px_40px_-15px_rgba(37,211,102,0.55),0_4px_10px_-2px_rgba(37,211,102,0.25)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  "Garantir minha vaga"
                )}
              </button>

              <p className="text-center text-xs text-white/40">
                Seus dados estão seguros. Não fazemos spam.
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
