type NavbarProps = {
  variant?: "light" | "dark";
};

export function Navbar({ variant: _variant = "dark" }: NavbarProps) {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <img
            src="/Logo.svg"
            alt="CuidaLink"
            style={{ height: "80px", width: "auto" }}
          />
          <span style={{ fontSize: "1.8rem", fontWeight: "bold" }}>
            <span style={{ color: "white" }}>Cuida</span>
            <span style={{ color: "#22c55e" }}>Link</span>
          </span>
        </a>
      </div>
    </header>
  );
}
