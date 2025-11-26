import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeritageBackground } from "@/components/HeritageBackground";
import { useToast } from "@/hooks/use-toast";
import { Flower2 } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 6) {
      toast({
        title: "Weak Password",
        description: "Password must be at least 6 characters long.",
        variant: "destructive",
      });
      return;
    }

    const user = { email, name };
    localStorage.setItem("kolamcraft_user", JSON.stringify(user));
    
    toast({
      title: "Welcome to KolamCraft!",
      description: "Your account has been created successfully.",
    });
    
    setLocation("/dashboard");
  };

  return (
    <HeritageBackground className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/">
            <a className="inline-flex items-center gap-2 mb-4 hover-elevate active-elevate-2 px-4 py-2 rounded-md">
              <Flower2 className="w-10 h-10 text-kolam-maroon" />
              <span className="font-playfair text-3xl font-bold text-kolam-maroon">
                KolamCraft
              </span>
            </a>
          </Link>
          <p className="text-muted-foreground">
            Join our community of heritage artists
          </p>
        </div>

        <Card className="border-2 border-kolam-gold/50 shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-playfair text-3xl text-kolam-maroon">
              Create Account
            </CardTitle>
            <CardDescription>
              Start your Kolam journey today
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground/80">
                  Full Name
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border-kolam-gold/50 focus:border-kolam-maroon"
                  data-testid="input-name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground/80">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-kolam-gold/50 focus:border-kolam-maroon"
                  data-testid="input-email"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground/80">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a strong password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-kolam-gold/50 focus:border-kolam-maroon"
                  data-testid="input-password"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                data-testid="button-submit-signup"
              >
                Create Account
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link href="/login">
                  <a className="text-kolam-maroon hover:text-kolam-maroon/80 font-medium" data-testid="link-login">
                    Login here
                  </a>
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/">
            <a className="text-sm text-muted-foreground hover:text-foreground" data-testid="link-back-home">
              ← Back to Home
            </a>
          </Link>
        </div>
      </div>
    </HeritageBackground>
  );
}
