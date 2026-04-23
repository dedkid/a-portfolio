import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Router as WouterRouter } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext"; 
import Home from "./pages/Home"; 
import NotFound from "./pages/NotFound";
import { useEffect } from "react"; // 1. Import useEffect

function Router() {
  return (
    <WouterRouter base="/a-portfolio">
      <Switch>
        <Route path="/" component={Home} /> 
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  // 2. This logic sets your tab logo using a URL
  useEffect(() => {
    const logoUrl = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b82ba2b-aff7-44e6-9afe-a57a5c42014d/dgjb2yq-cac02d68-535f-4b7d-bd90-4a84bdac2613.png/v1/fill/w_1141,h_701/akira_symbol_by_kingevan210_dgjb2yq-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzgxIiwicGF0aCI6Ii9mLzFiODJiYTJiLWFmZjctNDRlNi05YWZlLWE1N2E1YzQyMDE0ZC9kZ2piMnlxLWNhYzAyZDY4LTUzNWYtNGI3ZC1iZDkwLTRhODRiZGFjMjYxMy5wbmciLCJ3aWR0aCI6Ijw9MTI3MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.VYZs5wjN-Po1K1B2Lx2hagcKbKedvR5sVDMJxmgWO9U"; // REPLACE THIS URL
    
    let link: HTMLLinkElement | null = document.querySelector("link[rel~='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = logoUrl;
    
    // Optional: Set the Tab Title here too
    document.title = "Akira Nieva | Portfolio";
  }, []);

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