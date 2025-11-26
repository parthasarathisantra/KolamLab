import { Flower2, Github, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-kolam-maroon text-kolam-ivory border-t-4 border-kolam-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Flower2 className="w-8 h-8 text-kolam-gold" />
              <span className="font-playfair text-2xl font-bold">KolamCraft</span>
            </div>
            <p className="text-kolam-ivory/80 text-sm leading-relaxed">
              Preserving the ancient art of Kolam through modern technology.
              Create, explore, and celebrate South Indian heritage.
            </p>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-kolam-gold">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm" data-testid="footer-link-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-kolam" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm" data-testid="footer-link-about">
                  About Kolam
                </Link>
              </li>
              <li>
                <Link href="/explore" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm" data-testid="footer-link-explore">
                  Explore Gallery
                </Link>
              </li>
              <li>
                <Link href="/generate" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm" data-testid="footer-link-create">
                  Create Kolam
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-kolam-gold">
              About
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm">
                  Our Mission
                </a>
              </li>
              <li>
                <a href="#" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm">
                  Cultural Heritage
                </a>
              </li>
              <li>
                <a href="#" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-playfair text-lg font-semibold mb-4 text-kolam-gold">
              Connect With Us
            </h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors"
                data-testid="social-link-github"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors"
                data-testid="social-link-twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors"
                data-testid="social-link-instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="mailto:hello@kolamcraft.com"
                className="text-kolam-ivory/80 hover:text-kolam-gold transition-colors"
                data-testid="social-link-email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="text-kolam-ivory/80 text-sm">
              Stay updated with our latest designs and cultural insights.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-kolam-gold/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-kolam-ivory/70 text-sm">
              © {currentYear} KolamCraft. All rights reserved. Built with love for heritage.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-kolam-ivory/70 hover:text-kolam-gold text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-kolam-ivory/70 hover:text-kolam-gold text-sm transition-colors">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-kolam-gold via-kolam-sand to-kolam-gold" />
    </footer>
  );
}
