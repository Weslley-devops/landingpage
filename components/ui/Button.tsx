import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const styles: Record<Variant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_18px_40px_-12px_rgba(37,211,102,0.55)] hover:shadow-[0_22px_50px_-10px_rgba(37,211,102,0.7)] hover:-translate-y-0.5 active:translate-y-0",
  ghost:
    "bg-transparent text-brand-700 hover:bg-brand-50 border border-brand-200",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-brand-500/30 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0";

type LinkButtonProps = BaseProps & {
  href: string;
  external?: boolean;
};

export function LinkButton({
  children,
  href,
  variant = "primary",
  className,
  external,
}: LinkButtonProps) {
  const classes = cn(base, styles[variant], className);
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  variant = "primary",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button className={cn(base, styles[variant], className)} {...rest}>
      {children}
    </button>
  );
}
