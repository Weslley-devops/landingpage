"use client";

import type { ReactNode } from "react";
import { useState } from "react";

type StepCardProps = {
  number: number;
  icon: ReactNode;
  title: string;
  label: string;
};

export function StepCard({ number, icon, title, label }: StepCardProps) {
  const [hover, setHover] = useState(false);

  return (
    <div className="flex flex-col items-center">
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="relative w-full px-8 py-10"
        style={{
          background: "rgba(255, 255, 255, 0.05)",
          border: "1px solid rgba(0, 229, 192, 0.25)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "20px",
          boxShadow: hover
            ? "0 0 40px rgba(0, 229, 192, 0.18), 0 8px 32px rgba(0,0,0,0.4)"
            : "0 0 30px rgba(0, 229, 192, 0.08), 0 8px 32px rgba(0,0,0,0.4)",
          transform: hover ? "translateY(-6px)" : "translateY(0)",
          transition: "all 0.3s ease",
        }}
      >
        <div className="mb-4 flex items-center justify-center gap-4">
          <span
            style={{
              color: "#00E5C0",
              fontSize: "2.5rem",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            {number}
          </span>
          <div className="grid h-12 w-12 place-items-center">{icon}</div>
        </div>
        <p
          className="text-center leading-snug"
          style={{
            color: "#FFFFFF",
            fontSize: "1.1rem",
            fontWeight: 600,
          }}
        >
          {title}
        </p>
      </div>
      <p
        className="mt-5"
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "0.8rem",
          fontWeight: 500,
        }}
      >
        {label}
      </p>
    </div>
  );
}
