import { AuthGuard } from "@/components/AuthGuard";
import { HeritageBackground } from "@/components/HeritageBackground";
import { SectionHeader } from "@/components/SectionHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import kolam1 from "@assets/generated_images/kolam_gallery_1.png";
import kolam2 from "@assets/generated_images/kolam_gallery_2.png";
import kolam3 from "@assets/generated_images/kolam_gallery_3.png";
import kolam4 from "@assets/generated_images/kolam_gallery_4.png";
import kolam5 from "@assets/generated_images/kolam_gallery_5.png";
import kolam6 from "@assets/generated_images/kolam_gallery_6.png";
import kolam7 from "@assets/generated_images/kolam_gallery_7.png";
import kolam8 from "@assets/generated_images/kolam_gallery_8.png";
import kolam9 from "@assets/generated_images/kolam_gallery_9.png";

export default function Explore() {
  const kolamGallery = [
    { id: 1, image: kolam1, name: "Sacred Mandala", description: "Traditional circular pattern representing cosmic unity and eternal cycles" },
    { id: 2, image: kolam2, name: "Lotus Blessing", description: "Elegant lotus design symbolizing purity, enlightenment, and divine beauty" },
    { id: 3, image: kolam3, name: "Geometric Harmony", description: "Intricate square pattern showcasing mathematical precision and balance" },
    { id: 4, image: kolam4, name: "Peacock Grace", description: "Majestic peacock motif celebrating nature's splendor and cultural heritage" },
    { id: 5, image: kolam5, name: "Star of Prosperity", description: "Eight-pointed star bringing blessings of abundance and good fortune" },
    { id: 6, image: kolam6, name: "Flowing Waves", description: "Spiral design representing the eternal flow of time and cosmic energy" },
    { id: 7, image: kolam7, name: "Honeycomb Unity", description: "Hexagonal pattern symbolizing community, cooperation, and strength" },
    { id: 8, image: kolam8, name: "Garden of Joy", description: "Floral vine design celebrating nature's abundance and life's beauty" },
    { id: 9, image: kolam9, name: "Simple Circles", description: "Beginner-friendly concentric pattern perfect for daily practice" },
    { id: 10, image: kolam1, name: "Temple Gateway", description: "Ornate entrance design welcoming prosperity and divine blessings" },
    { id: 11, image: kolam2, name: "Festival Radiance", description: "Vibrant celebration pattern for special occasions and ceremonies" },
    { id: 12, image: kolam3, name: "Morning Prayer", description: "Daily ritual design invoking peace, harmony, and positive energy" },
    { id: 13, image: kolam4, name: "Nature's Dance", description: "Dynamic pattern inspired by birds, flowers, and natural elements" },
    { id: 14, image: kolam5, name: "Cosmic Order", description: "Symmetrical design reflecting the mathematical order of the universe" },
    { id: 15, image: kolam6, name: "Spiral Meditation", description: "Meditative pattern guiding the mind toward inner peace and clarity" },
    { id: 16, image: kolam7, name: "Sacred Geometry", description: "Ancient geometric wisdom encoded in beautiful visual form" },
    { id: 17, image: kolam8, name: "Spring Blossom", description: "Seasonal design celebrating renewal, growth, and new beginnings" },
    { id: 18, image: kolam9, name: "Eternal Loop", description: "Continuous line pattern symbolizing the endless cycle of existence" },
    { id: 19, image: kolam1, name: "Divine Protection", description: "Protective pattern believed to ward off negative energies" },
    { id: 20, image: kolam2, name: "Harvest Joy", description: "Celebratory design honoring abundance and gratitude" },
    { id: 21, image: kolam3, name: "Rainbow Blessing", description: "Colorful pattern bringing joy and positive vibrations" },
    { id: 22, image: kolam4, name: "Ancient Wisdom", description: "Traditional design passed down through countless generations" },
    { id: 23, image: kolam5, name: "Unity in Diversity", description: "Complex pattern showing harmony within intricate details" },
    { id: 24, image: kolam6, name: "Celestial Dance", description: "Cosmic-inspired design reflecting the movements of heavenly bodies" },
    { id: 25, image: kolam7, name: "Heart's Devotion", description: "Loving design created as an offering of devotion and prayer" },
    { id: 26, image: kolam8, name: "Garden Path", description: "Winding pattern inviting visitors with warmth and hospitality" },
    { id: 27, image: kolam9, name: "Simple Start", description: "Perfect beginner pattern for learning the art of Kolam" },
    { id: 28, image: kolam1, name: "Festival of Lights", description: "Diwali special design bringing light and joy to celebrations" },
    { id: 29, image: kolam2, name: "Heritage Pride", description: "Traditional pattern preserving cultural identity and wisdom" },
    { id: 30, image: kolam3, name: "Future Vision", description: "Modern interpretation blending tradition with contemporary aesthetics" },
  ];

  return (
    <AuthGuard>
      <HeritageBackground className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Explore Kolam Gallery"
            subtitle="Discover stunning designs from our community of heritage artists"
            centered
          />

          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Kolam designs, patterns, or themes..."
                className="pl-10 pr-4 h-12 border-2 border-kolam-gold/50 focus:border-kolam-maroon"
                data-testid="input-search"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4 justify-center">
              {["All", "Traditional", "Geometric", "Floral", "Festival", "Beginner"].map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className="border-kolam-gold/50 hover:bg-kolam-maroon hover:text-kolam-ivory"
                  data-testid={`filter-${category.toLowerCase()}`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kolamGallery.map((kolam) => (
              <div
                key={kolam.id}
                className="group cursor-pointer hover-elevate active-elevate-2 transition-all"
                data-testid={`kolam-card-${kolam.id}`}
              >
                <div className="relative overflow-hidden rounded-xl border-2 border-kolam-gold/50 bg-card shadow-md group-hover:shadow-2xl transition-all">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={kolam.image}
                      alt={kolam.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-kolam-maroon/90 via-kolam-maroon/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-4">
                    <div className="text-center text-kolam-ivory">
                      <h3 className="font-playfair text-lg font-semibold mb-1">
                        {kolam.name}
                      </h3>
                      <p className="text-xs text-kolam-ivory/90 leading-relaxed">
                        {kolam.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2">
                  <h3 className="font-playfair text-lg font-semibold text-kolam-maroon truncate">
                    {kolam.name}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
                    {kolam.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-kolam-gold/50 hover:bg-kolam-maroon hover:text-kolam-ivory"
              data-testid="button-load-more"
            >
              Load More Designs
            </Button>
          </div>
        </div>
      </HeritageBackground>
    </AuthGuard>
  );
}
