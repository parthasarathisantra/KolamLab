import { useEffect } from "react";
import { useLocation } from "wouter";

interface AuthGuardProps {
  children: React.ReactNode;
}

export function AuthGuard({ children }: AuthGuardProps) {
  const [, setLocation] = useLocation();

  useEffect(() => {
    const user = localStorage.getItem("kolamcraft_user");
    if (!user) {
      setLocation("/login");
    }
  }, [setLocation]);

  const user = localStorage.getItem("kolamcraft_user");
  if (!user) {
    return null;
  }

  return <>{children}</>;
}
