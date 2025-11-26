import { useState, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import Landing from "@/pages/Landing";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Dashboard from "@/pages/Dashboard";
import AboutKolam from "@/pages/AboutKolam";
import Generator from "@/pages/Generator";
import Editor from "@/pages/Editor";
import Explore from "@/pages/Explore";
import CreateKolamPublic from "@/pages/CreateKolamPublic";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/create-kolam" component={CreateKolamPublic} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/about-kolam" component={AboutKolam} />
      <Route path="/generate" component={Generator} />
      <Route path="/editor" component={Editor} />
      <Route path="/explore" component={Explore} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [location] = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("kolamcraft_user");
    setIsAuthenticated(!!user);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("kolamcraft_user");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  const hideNavbarFooter = ["/login", "/signup"].includes(location);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          {!hideNavbarFooter && (
            <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
          )}
          <main className="flex-1">
            <Router />
          </main>
          {!hideNavbarFooter && <Footer />}
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
