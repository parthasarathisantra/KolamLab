import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { HeritageBackground } from "@/components/HeritageBackground";
import { useToast } from "@/hooks/use-toast";
import { Flower2 } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLocation] = useLocation();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !password) {
      toast({
        title: "Missing Information",
        description: "Please enter both email and password.",
        variant: "destructive",
      });
      return;
    }

    const user = { email, name: email.split("@")[0] };
    localStorage.setItem("kolamcraft_user", JSON.stringify(user));
    
    toast({
      title: "Welcome Back!",
      description: "You have successfully logged in.",
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
            Welcome back to your creative sanctuary
          </p>
        </div>

        <Card className="border-2 border-kolam-gold/50 shadow-2xl">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="font-playfair text-3xl text-kolam-maroon">
              Login
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
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
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-kolam-gold/50 focus:border-kolam-maroon"
                  data-testid="input-password"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-kolam-maroon hover:bg-kolam-maroon/90 text-kolam-ivory"
                data-testid="button-submit-login"
              >
                Login
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link href="/signup">
                  <a className="text-kolam-maroon hover:text-kolam-maroon/80 font-medium" data-testid="link-signup">
                    Create one here
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
