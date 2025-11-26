import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Flower2 } from "lucide-react";

interface NavbarProps {
  isAuthenticated: boolean;
  onLogout?: () => void;
}

export function Navbar({ isAuthenticated, onLogout }: NavbarProps) {
  const [location, setLocation] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = isAuthenticated
    ? [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/about-kolam", label: "About Kolam" },
        { href: "/generate", label: "Create Kolam" },
        { href: "/explore", label: "Explore" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/#about", label: "About Kolam" },
        { href: "/create-kolam", label: "Create Kolam" },
      ];

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-kolam-gold/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href={isAuthenticated ? "/dashboard" : "/"} data-testid="link-home" className="flex items-center gap-2 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all">
            <Flower2 className="w-7 h-7 text-kolam-maroon" />
            <span className="font-playfair text-xl font-bold text-kolam-maroon">
              KolamCraft
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                data-testid={`link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className={`text-sm font-medium transition-all hover-elevate active-elevate-2 px-3 py-2 rounded-md relative ${
                  location === link.href
                    ? "text-kolam-maroon"
                    : "text-foreground/70 hover:text-kolam-maroon"
                }`}
              >
                {link.label}
                {location === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-kolam-gold rounded-full" />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            {isAuthenticated ? (
              <Button
                onClick={onLogout}
                variant="outline"
                size="sm"
                data-testid="button-logout"
                className="border-kolam-maroon text-kolam-maroon hover:bg-kolam-maroon hover:text-kolam-ivory"
              >
                Logout
              </Button>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  data-testid="button-login"
                  onClick={() => setLocation("/login")}
                >
                  Login
                </Button>
                <Button 
                  size="sm" 
                  data-testid="button-signup" 
                  className="bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                  onClick={() => setLocation("/signup")}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          <button
            className="md:hidden p-2 hover-elevate active-elevate-2 rounded-md"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-kolam-maroon" />
            ) : (
              <Menu className="w-6 h-6 text-kolam-maroon" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-kolam-gold/30 bg-card">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`block px-4 py-2 rounded-md text-sm font-medium transition-all hover-elevate active-elevate-2 ${
                  location === link.href
                    ? "bg-kolam-maroon/10 text-kolam-maroon"
                    : "text-foreground/70 hover:bg-accent"
                }`}
                onClick={() => setMobileMenuOpen(false)}
                data-testid={`mobile-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-kolam-gold/30 space-y-2">
              {isAuthenticated ? (
                <Button
                  onClick={() => {
                    onLogout?.();
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-kolam-maroon text-kolam-maroon"
                  data-testid="mobile-button-logout"
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="w-full"
                    onClick={() => {
                      setLocation("/login");
                      setMobileMenuOpen(false);
                    }}
                    data-testid="mobile-button-login"
                  >
                    Login
                  </Button>
                  <Button
                    className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                    onClick={() => {
                      setLocation("/signup");
                      setMobileMenuOpen(false);
                    }}
                    data-testid="mobile-button-signup"
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
