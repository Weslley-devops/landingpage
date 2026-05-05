"use client";

import { ShieldCheck, AlertTriangle, MessageCircle, ArrowRight } from "lucide-react";

export function HeroVisual() {
  return (
    <div className="relative w-full h-[500px] flex items-center justify-center pointer-events-none">
      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateZ(0px) translateY(0px); }
          50% { transform: translateZ(20px) translateY(-10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateZ(60px) translateY(0px); }
          50% { transform: translateZ(85px) translateY(-15px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateZ(120px) translateY(0px); }
          50% { transform: translateZ(150px) translateY(-20px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; filter: blur(20px); }
          50% { opacity: 0.8; filter: blur(30px); }
        }
        .iso-container {
          transform: rotateX(55deg) rotateZ(-45deg);
          transform-style: preserve-3d;
        }
      `}</style>

      {/* Glow de fundo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#25D366]/20 rounded-full blur-[80px]" />

      <div className="relative w-[300px] h-[300px] iso-container perspective-[1200px]">
        
        {/* Camada 1: Mensagem Fake WhatsApp */}
        <div 
          className="absolute inset-0 bg-[#1c1e21] rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col"
          style={{ animation: "float-slow 6s ease-in-out infinite" }}
        >
          {/* Header WhatsApp falso */}
          <div className="bg-[#075e54] h-12 w-full flex items-center px-4 gap-3">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
              <MessageCircle className="w-4 h-4 text-white/80" />
            </div>
            <div className="flex flex-col">
              <span className="text-white text-[11px] font-semibold">Número Desconhecido</span>
              <span className="text-white/60 text-[9px]">Online</span>
            </div>
          </div>
          
          {/* Corpo da mensagem */}
          <div className="flex-1 p-4 flex flex-col gap-3 bg-[#0d1418]">
            <div className="bg-[#056162] text-white text-[10px] p-2 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm">
              Oi mãe, meu celular quebrou. Salva meu número novo!
            </div>
            <div className="bg-[#056162] text-white text-[10px] p-2 rounded-lg rounded-tr-none self-end max-w-[85%] shadow-sm">
              Preciso de um PIX urgente pra pagar o conserto...
            </div>
          </div>
        </div>

        {/* Camada 2: Alerta de Golpe bloqueado */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] bg-red-500/10 backdrop-blur-md border border-red-500/50 rounded-xl p-3 shadow-[0_0_30px_rgba(239,68,68,0.2)] flex items-center gap-3"
          style={{ animation: "float-medium 5s ease-in-out infinite", animationDelay: "1s" }}
        >
          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5 text-red-500" />
          </div>
          <div>
            <div className="text-red-500 text-[11px] font-bold uppercase tracking-wider mb-0.5">Ameaça Detectada</div>
            <div className="text-red-200/80 text-[9px] leading-tight">Padrão de fraude reconhecido pela IA do CuidaLink.</div>
          </div>
        </div>

        {/* Efeito de Raio Verde Bloqueador */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] bg-gradient-to-b from-[#25D366]/80 to-transparent rounded-full"
          style={{ 
            animation: "pulse-glow 3s ease-in-out infinite", 
            transform: "translateZ(90px) rotateX(90deg) translateY(-40px)",
            transformOrigin: "center"
          }}
        />

        {/* Camada 3: Escudo CuidaLink (Topo) */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(37,211,102,0.8)] border-4 border-white/20"
          style={{ animation: "float-fast 4s ease-in-out infinite", animationDelay: "0.5s" }}
        >
          <ShieldCheck className="w-12 h-12 text-[#0b1f13]" strokeWidth={2.5} />
        </div>

      </div>
    </div>
  );
}
