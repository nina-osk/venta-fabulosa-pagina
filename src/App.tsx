
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {supabase} from "./supabaseClient.js/supabaseClient";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import LegalPolicies from "./pages/LegalPolicies";
import CookieBanner from "./components/CookieBanner";
import RoboticArms from "./pages/RoboticArms";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/legal" element={<LegalPolicies />} />
          <Route path="/brazosRoboticos" element={<RoboticArms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
