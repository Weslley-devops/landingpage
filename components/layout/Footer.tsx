import { Mail } from "lucide-react";
import { site } from "@/lib/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.52 3.48A11.87 11.87 0 0012 0C5.37 0 0 5.37 0 12a11.9 11.9 0 001.64 6L0 24l6.18-1.62A11.93 11.93 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.22-3.48-8.52zM12 21.82a9.82 9.82 0 01-5-1.37l-.36-.21-3.67.96.98-3.58-.23-.37A9.82 9.82 0 1121.82 12 9.83 9.83 0 0112 21.82zm5.4-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.48-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.35.44-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.03 1.01-1.03 2.46 0 1.46 1.06 2.87 1.2 3.06.16.2 2.08 3.17 5.04 4.44.7.3 1.26.48 1.69.62.7.22 1.35.19 1.86.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0d2818",
        borderTop: "1px solid rgba(34,197,94,0.35)",
        padding: "2rem",
      }}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <p
          className="text-center md:text-left"
          style={{ color: "#FFFFFF", fontSize: "0.95rem" }}
        >
          &copy; {new Date().getFullYear()} {site.name}. Protegendo famílias
          brasileiras contra golpes.
        </p>
        <nav
          aria-label="Redes sociais e contato"
          className="flex items-center gap-3 md:ml-auto"
        >
          <a
            href={site.whatsapp.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fale conosco no WhatsApp"
            className="group grid h-11 w-11 place-items-center rounded-full text-white transition hover:scale-105"
            style={{ backgroundColor: "#22c55e" }}
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <a
            href={site.email.href}
            aria-label="Enviar e-mail"
            className="group grid h-11 w-11 place-items-center rounded-full text-white transition hover:scale-105"
            style={{ backgroundColor: "#22c55e" }}
          >
            <Mail className="h-5 w-5" strokeWidth={2} />
          </a>
        </nav>
      </div>
    </footer>
  );
}
