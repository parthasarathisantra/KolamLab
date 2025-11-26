import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { HeritageBackground } from "@/components/HeritageBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Sparkles, Palette, BookOpen, Users, ArrowRight } from "lucide-react";

import heroKolamImg from "@assets/generated_images/hero_kolam_banner.png";
import kolam1 from "@assets/generated_images/kolam_gallery_1.png";
import kolam2 from "@assets/generated_images/kolam_gallery_2.png";
import kolam3 from "@assets/generated_images/kolam_gallery_3.png";

export default function Landing() {
  return (
    <HeritageBackground>
      {/* HERO SECTION */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-kolam-maroon/20 via-transparent to-background z-0" />

        <img
          src={heroKolamImg}
          alt="Traditional Kolam Pattern"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent z-10" />

        <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">

          {/* 🎉 TYPEWRITER TITLE */}
          <h1 className="typewriter font-playfair text-5xl md:text-7xl font-bold text-kolam-maroon mb-6 leading-tight">
            KolamCraft
          </h1>

          {/* 🎉 ANIMATED SUBTITLE */}
          <p className="animate-slideInLeft font-playfair text-2xl md:text-3xl text-kolam-sand mb-4 italic">
            Traditional Kolam Generator
          </p>

          {/* 🎉 ANIMATED DESCRIPTION */}
          <p className="animate-slideInLeft text-lg md:text-xl text-foreground/80 leading-relaxed mb-8 max-w-2xl mx-auto">
            Celebrate South Indian heritage through the timeless art of Kolam.
            Create, explore, and preserve this sacred geometric tradition.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/create-kolam">
              <Button
                size="lg"
                className="bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory px-8 py-6 text-lg shadow-lg"
                data-testid="button-hero-create"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Create Kolam
              </Button>
            </Link>

            <a href="#about">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-kolam-maroon text-kolam-maroon hover:bg-kolam-maroon hover:text-kolam-ivory px-8 py-6 text-lg backdrop-blur-sm bg-background/50"
                data-testid="button-hero-learn"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="What is Kolam?"
            subtitle="An ancient art form that connects spirituality, mathematics, and beauty"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src={kolam1}
                alt="Traditional Kolam Design"
                className="rounded-xl shadow-2xl border-4 border-kolam-gold"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-semibold text-kolam-maroon">
                Heritage & History
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Kolam is a traditional decorative art practiced by women in South India,
                particularly in Tamil Nadu. These intricate geometric patterns are drawn
                with rice flour at the entrance of homes, symbolizing welcome, prosperity,
                and the cycle of life.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Dating back thousands of years, Kolam represents the perfect harmony
                between art, mathematics, and spirituality. Each pattern tells a story,
                carries blessings, and connects us to our rich cultural heritage.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 md:order-1">
              <h3 className="font-playfair text-3xl font-semibold text-kolam-maroon">
                Cultural Importance
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                More than mere decoration, Kolam serves as a daily ritual that brings
                communities together. It's an act of meditation, a display of creativity,
                and a gesture of hospitality to both humans and nature.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The rice flour used feeds insects and birds, embodying the principle
                of co-existence with all living beings. This sacred practice has been
                passed down through generations, preserving ancient wisdom and artistic
                excellence.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <img
                src={kolam2}
                alt="Cultural Kolam Pattern"
                className="rounded-xl shadow-2xl border-4 border-kolam-gold"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={kolam3}
                alt="Geometric Kolam Design"
                className="rounded-xl shadow-2xl border-4 border-kolam-gold"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-playfair text-3xl font-semibold text-kolam-maroon">
                Symbolism & Meaning
              </h3>
              <p className="text-foreground/80 leading-relaxed">
                Every Kolam pattern carries deep symbolic meaning. Circular designs
                represent the eternal cycle of time, geometric patterns symbolize
                cosmic order, and floral motifs celebrate nature's abundance.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                The dots in Kolam represent obstacles in life, while the lines
                connecting them show how we navigate challenges with grace and
                creativity. This beautiful metaphor makes Kolam both an art and
                a philosophy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-kolam-ivory/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Why KolamCraft?"
            subtitle="Modern tools to preserve ancient traditions"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-xl bg-card border-2 border-kolam-gold/50 hover-elevate active-elevate-2 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-kolam-ivory" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-kolam-maroon mb-3">
                Create with Ease
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                Design stunning Kolam patterns using our intuitive grid-based
                tools and AI-powered suggestions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border-2 border-kolam-gold/50 hover-elevate active-elevate-2 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-kolam-ivory" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-kolam-maroon mb-3">
                Learn the Art
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                Discover the history, meanings, and techniques behind
                traditional Kolam designs.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-card border-2 border-kolam-gold/50 hover-elevate active-elevate-2 transition-all">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-kolam-ivory" />
              </div>
              <h4 className="font-playfair text-xl font-semibold text-kolam-maroon mb-3">
                Share & Explore
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                Browse a growing gallery of designs from our community
                of Kolam enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-kolam-maroon via-kolam-sand to-kolam-maroon text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-kolam-ivory mb-6">
            Start Your Kolam Journey Today
          </h2>

          <p className="text-kolam-ivory/90 text-lg mb-8 leading-relaxed">
            Join us in preserving and celebrating this beautiful tradition.
            Create your first Kolam design in minutes.
          </p>

          <Link href="/signup">
            <Button
              size="lg"
              className="bg-kolam-ivory text-kolam-maroon hover:bg-kolam-ivory/90 px-8 py-6 text-lg shadow-xl"
              data-testid="button-cta-signup"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </HeritageBackground>
  );
}
