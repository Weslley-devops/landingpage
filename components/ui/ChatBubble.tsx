import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ChatBubbleProps = {
  icon: ReactNode;
  title: ReactNode;
  body: ReactNode;
  className?: string;
};

export function ChatBubble({ icon, title, body, className }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "relative max-w-xs rounded-2xl rounded-bl-md bg-white px-5 py-4 shadow-[0_20px_50px_-18px_rgba(11,31,23,0.25)]",
        "ring-1 ring-black/5",
        className,
      )}
    >
      <div className="flex items-center gap-2 text-brand-700 font-semibold">
        <span className="shrink-0">{icon}</span>
        <span>{title}</span>
      </div>
      <p className="mt-1 text-sm text-muted leading-snug">{body}</p>
      <span
        aria-hidden
        className="absolute -bottom-2 left-4 h-4 w-4 rotate-45 bg-white ring-1 ring-black/5"
      />
    </div>
  );
}
