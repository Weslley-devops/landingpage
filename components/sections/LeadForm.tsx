"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { leadSchema, maskPhone, type LeadInput } from "@/lib/validation";
import { track } from "@/lib/analytics";
import { FadeIn } from "@/components/motion/FadeIn";

export function LeadForm() {
  const router = useRouter();
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LeadInput>({
    resolver: zodResolver(leadSchema),
    mode: "onBlur",
    defaultValues: { nome: "", email: "", whatsapp: "" },
  });

  const onSubmit = handleSubmit(async (data) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("request failed");
      track("generate_lead", { method: "landing_form" });
      router.push("/obrigado");
    } catch {
      setSubmitError(
        "Não foi possível enviar agora. Tente novamente em instantes.",
      );
    }
  });

  return (
    <section
      id="acesso"
      className="relative overflow-hidden py-24 md:py-28"
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

      <div
        className="relative z-10 mx-auto px-6"
        style={{ maxWidth: "820px", width: "95%" }}
      >
        <FadeIn>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              border: "1px solid rgba(0, 229, 192, 0.25)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              borderRadius: "20px",
              padding: "3.5rem",
              boxShadow:
                "0 0 30px rgba(0, 229, 192, 0.08), 0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <h2
              style={{
                color: "#FFFFFF",
                fontSize: "clamp(1.75rem, 3.5vw, 2.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              Quero acesso antecipado
            </h2>
            <p
              className="mt-2"
              style={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "1rem",
                lineHeight: 1.5,
              }}
            >
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
                <p role="alert" className="text-sm text-danger">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-bold text-white transition-all duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                style={{
                  background: "#22C55E",
                  fontSize: "1.0625rem",
                  boxShadow:
                    "0 18px 40px -15px rgba(34,197,94,0.55), 0 4px 10px -2px rgba(34,197,94,0.25)",
                }}
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

              <p
                className="text-center text-xs"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Seus dados estão seguros. Não fazemos spam.
              </p>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
