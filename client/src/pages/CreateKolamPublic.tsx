import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeritageBackground } from "@/components/HeritageBackground";
import { LogIn, UserPlus, Sparkles } from "lucide-react";

export default function CreateKolamPublic() {
  return (
    <HeritageBackground className="min-h-screen flex items-center justify-center py-12 px-4">
      <Card className="max-w-2xl w-full border-2 border-kolam-gold/50 shadow-2xl">
        <CardHeader className="text-center space-y-4">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mx-auto">
            <Sparkles className="w-10 h-10 text-kolam-ivory" />
          </div>
          <CardTitle className="font-playfair text-4xl text-kolam-maroon">
            Create Beautiful Kolam
          </CardTitle>
          <CardDescription className="text-lg">
            Sign in or create an account to start designing your own traditional Kolam patterns
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="bg-gradient-to-br from-kolam-ivory/50 to-kolam-gold/10 rounded-xl p-6 border border-kolam-gold/30">
            <h3 className="font-playfair text-xl font-semibold text-kolam-maroon mb-3">
              What You'll Get:
            </h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-2">
                <span className="text-kolam-maroon mt-1">✦</span>
                <span>Access to AI-powered Kolam generation tools</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolam-maroon mt-1">✦</span>
                <span>Grid-based design system with symmetry options</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolam-maroon mt-1">✦</span>
                <span>Professional color editing and export features</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolam-maroon mt-1">✦</span>
                <span>Save and share your beautiful creations</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-kolam-maroon mt-1">✦</span>
                <span>Explore a gallery of inspiring designs</span>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <Link href="/login">
              <Button
                size="lg"
                className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                data-testid="button-login"
              >
                <LogIn className="w-5 h-5 mr-2" />
                Login to Your Account
              </Button>
            </Link>
            
            <Link href="/signup">
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-kolam-maroon text-kolam-maroon hover:bg-kolam-maroon hover:text-kolam-ivory"
                data-testid="button-signup"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Create Free Account
              </Button>
            </Link>
          </div>

          <div className="text-center pt-4 border-t border-kolam-gold/30">
            <Link href="/">
              <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-back-home">
                ← Back to Home
              </a>
            </Link>
          </div>
        </CardContent>
      </Card>
    </HeritageBackground>
  );
}
