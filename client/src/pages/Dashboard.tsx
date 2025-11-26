import { AuthGuard } from "@/components/AuthGuard";
import { HeritageBackground } from "@/components/HeritageBackground";
import { PageCard } from "@/components/PageCard";
import { BookOpen, Palette, Image, User } from "lucide-react";

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem("kolamcraft_user") || "{}");

  return (
    <AuthGuard>
      <HeritageBackground className="min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ANIMATED HEADER */}
          <div className="text-center mb-12">
            <h1 className="animate-slideInLeft font-playfair text-4xl md:text-5xl font-bold text-kolam-maroon mb-4">
              Welcome back, {user.name || "Artist"}!
            </h1>

            <p className="animate-slideInLeft text-lg text-muted-foreground">
              Continue your journey in the beautiful world of Kolam art
            </p>
          </div>

          {/* ANIMATED GRID (each card slides in) */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">

            <div className="animate-slideInLeft">
              <PageCard
                title="About Kolam"
                description="Learn about the rich history, cultural significance, and diverse styles of traditional Kolam art."
                icon={BookOpen}
                href="/about-kolam"
                testId="card-about-kolam"
              />
            </div>

            <div className="animate-slideInLeft">
              <PageCard
                title="Create Kolam"
                description="Design your own beautiful Kolam patterns using our intuitive generator tools."
                icon={Palette}
                href="/generate"
                testId="card-create-kolam"
              />
            </div>

            <div className="animate-slideInLeft">
              <PageCard
                title="Explore Gallery"
                description="Browse and discover stunning Kolam designs from our community of artists."
                icon={Image}
                href="/explore"
                testId="card-explore"
              />
            </div>

            <div className="animate-slideInLeft">
              <PageCard
                title="My Profile"
                description="View your saved designs, manage preferences, and track your creative journey."
                icon={User}
                href="/profile"
                testId="card-profile"
              />
            </div>
          </div>

          {/* ANIMATED QUOTE */}
          <div className="mt-12 text-center animate-slideInLeft">
            <div className="inline-block px-6 py-4 bg-card border-2 border-kolam-gold/50 rounded-xl">
              <p className="text-sm text-muted-foreground italic">
                "Every Kolam is a prayer, a blessing, and a work of art"
              </p>
            </div>
          </div>

        </div>
      </HeritageBackground>
    </AuthGuard>
  );
}
