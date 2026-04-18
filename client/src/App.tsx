import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import Home from "./pages/Home"; // <--- MATCHES YOUR FILENAME EXACTLY
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <WouterRouter base="/a-portfolio">
      <Switch>
        {/* This is the command that actually "calls" Home.tsx */}
        <Route path="/" component={Home} /> 
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </ThemeProvider>
  );
}

export default App;
