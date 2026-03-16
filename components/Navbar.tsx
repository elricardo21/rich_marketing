"use client";

import { useState, useEffect } from "react";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { label: "Moje cesta", href: "#o-mne" },
  { label: "Služby", href: "#sluzby" },
  { label: "Jak to funguje", href: "#jak-to-funguje" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <AnimatedGradientText className="text-lg font-bold tracking-tight">
            RICH_MARKETING
          </AnimatedGradientText>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:richard@richmarketing.cz"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium bg-[#f95738] hover:bg-[#f95738]/90 text-white transition-colors"
          >
            Spolupráce
          </a>

          {/* Mobile menu */}
          {mounted && <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="md:hidden" />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg font-medium hover:text-[#f95738] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                ))}
                <a
                  href="mailto:richard@richmarketing.cz"
                  className="mt-4 text-center py-2 px-4 rounded bg-[#f95738] text-white text-sm font-medium"
                >
                  Spolupráce
                </a>
              </div>
            </SheetContent>
          </Sheet>}
        </div>
      </nav>
    </header>
  );
}
