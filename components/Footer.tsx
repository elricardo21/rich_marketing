import Image from "next/image";

export function Footer() {
  return (
    <footer className="py-10" style={{ backgroundColor: "var(--background-alt)" }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Image
              src="/logo/secondary_logo.png"
              alt="RICH_MARKETING"
              width={28}
              height={28}
              className="h-7 w-auto opacity-70"
            />
            <span className="text-xs text-muted-foreground">RICH_MARKETING</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs text-muted-foreground">
            <p>IČO: 07452373</p>
            <span className="hidden sm:inline">·</span>
            <p>Nejsem plátce DPH</p>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Richard Stočes</p>
        </div>
      </div>
    </footer>
  );
}
