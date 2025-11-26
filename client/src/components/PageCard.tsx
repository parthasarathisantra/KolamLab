import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface PageCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  testId?: string;
}

export function PageCard({ title, description, icon: Icon, href, testId }: PageCardProps) {
  return (
    <Link href={href}>
      <Card
        className="group cursor-pointer hover-elevate active-elevate-2 transition-all border-2 border-kolam-gold/50 hover:border-kolam-gold bg-card hover:shadow-xl overflow-visible h-full"
        data-testid={testId}
      >
        <CardHeader className="space-y-4">
          <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-kolam-maroon to-kolam-sand flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
            <Icon className="w-8 h-8 text-kolam-ivory" />
          </div>
          <CardTitle className="text-center font-playfair text-2xl text-kolam-maroon group-hover:text-kolam-maroon/90">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-center leading-relaxed">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </Link>
  );
}
