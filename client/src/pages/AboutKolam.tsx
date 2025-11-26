import { AuthGuard } from "@/components/AuthGuard";
import { HeritageBackground } from "@/components/HeritageBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Circle, Square, Star, Flower2, Hexagon, Triangle } from "lucide-react";
import kolam1 from "@assets/generated_images/kolam_gallery_1.png";
import kolam2 from "@assets/generated_images/kolam_gallery_2.png";
import kolam3 from "@assets/generated_images/kolam_gallery_3.png";
import kolam4 from "@assets/generated_images/kolam_gallery_4.png";

export default function AboutKolam() {
  const kolamTypes = [
    {
      icon: Circle,
      name: "Pulli Kolam",
      description: "Dot-based designs where lines connect dots in intricate patterns, representing the interconnectedness of life.",
    },
    {
      icon: Square,
      name: "Sikku Kolam",
      description: "Continuous line patterns drawn without lifting the hand, symbolizing the unbroken cycle of time.",
    },
    {
      icon: Star,
      name: "Kambi Kolam",
      description: "Grid-based geometric designs with perfect symmetry, representing cosmic order and balance.",
    },
    {
      icon: Flower2,
      name: "Poo Kolam",
      description: "Floral designs celebrating nature's beauty and abundance, often used during festivals.",
    },
    {
      icon: Hexagon,
      name: "Neli Kolam",
      description: "Intricate patterns with multiple loops and curves, demonstrating advanced artistic skills.",
    },
    {
      icon: Triangle,
      name: "Chikku Kolam",
      description: "Maze-like designs with complex pathways, representing life's journey and choices.",
    },
  ];

  return (
    <AuthGuard>
      <HeritageBackground className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="The Art of Kolam"
            subtitle="A deep dive into the heritage, symbolism, and significance of this ancient tradition"
            centered
          />

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h2 className="font-playfair text-3xl font-bold text-kolam-maroon mb-6">
                  Ancient Origins
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Kolam, also known as Rangoli in other parts of India, is a folk art
                    that has been practiced for over 5,000 years. The tradition originated
                    in the Indus Valley Civilization and has been passed down through
                    generations of women as both an art form and a sacred ritual.
                  </p>
                  <p>
                    Every morning, women across South India create these geometric patterns
                    at the threshold of their homes using rice flour, limestone powder, or
                    colored powders. This daily practice is believed to invite prosperity,
                    ward off evil, and welcome guests with beauty and grace.
                  </p>
                  <p>
                    The word "Kolam" comes from the Tamil words "kō" (king) and "alam"
                    (beauty), literally meaning "beauty of the king," reflecting its
                    revered status in Tamil culture.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src={kolam1}
                  alt="Traditional Kolam"
                  className="rounded-lg shadow-lg border-2 border-kolam-gold"
                />
                <img
                  src={kolam2}
                  alt="Heritage Kolam"
                  className="rounded-lg shadow-lg border-2 border-kolam-gold mt-8"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-kolam-maroon mb-8 text-center">
              Types of Kolam
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kolamTypes.map((type, index) => (
                <Card
                  key={index}
                  className="border-2 border-kolam-gold/50 hover-elevate active-elevate-2 transition-all"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mb-3">
                      <type.icon className="w-6 h-6 text-kolam-ivory" />
                    </div>
                    <CardTitle className="font-playfair text-xl text-kolam-maroon">
                      {type.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="grid grid-cols-2 gap-4 order-2 md:order-1">
                <img
                  src={kolam3}
                  alt="Symbolic Kolam"
                  className="rounded-lg shadow-lg border-2 border-kolam-gold"
                />
                <img
                  src={kolam4}
                  alt="Cultural Kolam"
                  className="rounded-lg shadow-lg border-2 border-kolam-gold mt-8"
                />
              </div>
              <div className="order-1 md:order-2">
                <h2 className="font-playfair text-3xl font-bold text-kolam-maroon mb-6">
                  Symbolism & Philosophy
                </h2>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    Kolam is rich with symbolism that reflects Hindu philosophy and Tamil
                    culture. The dots represent obstacles and challenges, while the lines
                    connecting them show how creativity and patience can overcome any difficulty.
                  </p>
                  <p>
                    Circular patterns symbolize the eternal cycle of birth, death, and
                    rebirth. Geometric designs represent the underlying mathematical order
                    of the universe. Floral motifs celebrate the abundance and beauty of
                    nature.
                  </p>
                  <p>
                    The temporary nature of Kolam - washed away by rain or worn down by
                    footsteps - teaches the philosophy of impermanence and detachment,
                    core principles of Hindu and Buddhist thought.
                  </p>
                  <p>
                    Using rice flour to draw Kolam serves a dual purpose: artistic expression
                    and feeding small creatures like ants and birds, embodying the principle
                    of compassion toward all living beings.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-playfair text-3xl font-bold text-kolam-maroon mb-8 text-center">
              Cultural Significance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 border-kolam-gold/50 bg-card text-center">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-kolam-maroon">
                    Daily Ritual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Creating Kolam is a meditative practice that brings focus, calmness,
                    and a sense of accomplishment to start each day.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-kolam-gold/50 bg-card text-center">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-kolam-maroon">
                    Community Bonding
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Women gather to create Kolam together during festivals, sharing
                    techniques and fostering community connections.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-kolam-gold/50 bg-card text-center">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-kolam-maroon">
                    Cultural Identity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    Kolam serves as a powerful symbol of Tamil heritage and identity,
                    connecting modern generations to their ancestors.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="bg-gradient-to-r from-kolam-maroon/10 via-kolam-gold/10 to-kolam-maroon/10 rounded-2xl p-8 md:p-12 text-center border-2 border-kolam-gold/50">
            <h2 className="font-playfair text-3xl font-bold text-kolam-maroon mb-4">
              Preserving Heritage Through Technology
            </h2>
            <p className="text-foreground/80 leading-relaxed max-w-3xl mx-auto">
              KolamCraft combines traditional art with modern technology to ensure this
              beautiful practice continues to thrive. By making Kolam accessible to everyone,
              we honor the past while building the future of this sacred art form.
            </p>
          </section>
        </div>
      </HeritageBackground>
    </AuthGuard>
  );
}
