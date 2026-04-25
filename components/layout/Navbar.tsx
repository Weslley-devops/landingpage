type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant: _variant = "dark" }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 no-underline cursor-pointer"
        >
          <img src="/Logo.svg" alt="CuidaLink" className="h-20 w-auto" />
          <span className="text-[1.8rem] font-bold">
            <span className="text-white">Cuida</span>
            <span className="text-[#22c55e]">Link</span>
          </span>
        </a>
      </div>
    </header>
  );
}
