import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="/" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <img
                src="/esusu-chain-logo.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <span className="font-bold text-xl">EsusuChain</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#features"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            How It Works
          </a>
          <a
            href="#faq"
            className="text-foreground/80 hover:text-foreground transition-colors"
          >
            FAQ
          </a>
          <Button asChild>
            <a href="#download">Access App</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex items-center justify-center"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border/40 py-4 px-4 flex flex-col gap-4">
            <a
              href="#features"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={toggleMenu}
            >
              FAQ
            </a>
            <Button asChild className="w-full">
              <a href="#download" onClick={toggleMenu}>
                Access App
              </a>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
