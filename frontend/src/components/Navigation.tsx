import { useState, useEffect } from "react";
import { Code2, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";



export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const currentLang = i18n.language;

  const navLinks = [
      { href: "/#register", label: t('register') },
      { href: "/#sponsors", label: t('sponsors') },
      { href: "/#topics", label: t('topics') },
      { href: "/#schedule", label: t('schedule') },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          <a href="#" className={`flex items-center gap-2.5 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            <Code2 className="text-primary" size={24} />
            <span className="font-semibold text-base font-mono tracking-tight hidden sm:inline">
              KI_Code_Camp FFM
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-primary-foreground/70 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              variant="hero" 
              size="sm"
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t("registerNow")}
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                    variant="ghost"
                    size="sm"
                    className={`text-sm font-medium transition-colors ${
                                      isScrolled
                                        ? "text-muted-foreground hover:text-foreground"
                                        : "text-primary-foreground/70 hover:text-foreground"
                                    }`}
                >
                  {currentLang.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => i18n.changeLanguage("de")}>
                  🇩🇪 Deutsch
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
                  🇬🇧 English
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>


          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-secondary/95 backdrop-blur-md border-t border-primary-foreground/10 animate-fade-in">
            <div className="section-container py-4 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                variant="hero" 
                className="w-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {t("registerNow")}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="block text-primary-foreground/80 hover:text-primary transition-colors font-medium"
                  >
                    {currentLang.toUpperCase()}
                  </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => i18n.changeLanguage("de")}>
                    🇩🇪 Deutsch
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => i18n.changeLanguage("en")}>
                    🇬🇧 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
