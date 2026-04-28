import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
  optional?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, error, optional, className, id, ...rest }, ref) {
    const inputId = id ?? rest.name;
    return (
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor={inputId}
          className="font-semibold uppercase tracking-[0.12em] text-[#00E5C0] text-[0.75rem]"
        >
          {label}
          {optional && (
            <span className="ml-1 normal-case font-normal tracking-normal text-[#00E5C0]/60">
              (opcional)
            </span>
          )}
        </label>
        <input
          ref={ref}
          id={inputId}
          aria-invalid={error ? "true" : "false"}
          className={cn(
            "lead-input w-full min-h-[48px] rounded-lg px-3 py-3 text-base transition focus:outline-none",
            error && "lead-input--error",
            className,
          )}
          {...rest}
        />
        {error && (
          <p role="alert" className="text-xs mt-0.5 text-[#fca5a5]">
            {error}
          </p>
        )}
      </div>
    );
  },
);
