"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { leadSchema, maskPhone, type LeadInput } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { supabase } from "@/lib/supabase";
import { FadeIn } from "@/components/motion/FadeIn";

export function LeadForm() {
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);

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
    setSubmitSuccess(null);

    const { error } = await supabase.from("leads").insert({
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

    track("generate_lead", { method: "landing_form" });
    reset();
    setSubmitSuccess("Vaga garantida! Em breve entraremos em contato.");
  });

  return (
    <section
      id="acesso"
      className="relative overflow-hidden py-24 md:py-28 bg-[#0d2818] bg-[url(/blackgraud.png)] bg-cover bg-center bg-fixed bg-no-repeat"
    >
      {/* Dark overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none bg-black/40"
      />

      <div className="relative z-10 mx-auto px-6 max-w-[820px] w-[95%]">
        <FadeIn>
          <div className="bg-white/5 border border-[rgba(0,229,192,0.25)] backdrop-blur-[12px] rounded-[20px] p-14 shadow-[0_0_30px_rgba(0,229,192,0.08),0_8px_32px_rgba(0,0,0,0.4)]">
            <h2 className="text-white text-[clamp(1.75rem,3.5vw,2.25rem)] font-extrabold leading-[1.15] tracking-[-0.02em]">
              Quero acesso antecipado
            </h2>
            <p className="mt-2 text-white/60 text-base leading-normal">
              Rápido, gratuito e sem compromisso.
            </p>

            <form onSubmit={onSubmit} noValidate className="mt-8 flex flex-col gap-5">
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

              {submitSuccess && (
                <p role="status" className="text-sm text-[#4ADE80]">
                  {submitSuccess}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 bg-[#22C55E] text-[1.0625rem] shadow-[0_18px_40px_-15px_rgba(34,197,94,0.55),0_4px_10px_-2px_rgba(34,197,94,0.25)]"
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
