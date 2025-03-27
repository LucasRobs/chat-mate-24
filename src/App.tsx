import { Suspense, useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Skeleton } from "@/components/ui/skeleton";

// Loading spinner component with dot pattern background
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-10 dot-pattern"></div>
    </div>
    <div className="flex flex-col items-center relative z-10">
      <div className="relative mb-8">
        <img
          src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
          alt="FollowOP Logo"
          className="h-16 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-slide-left"></div>
      </div>
      <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 animate-slide-left loading-bar"></div>
      </div>
      <p className="mt-6 text-gray-600 text-sm">Carregando...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {isLoading && <LoadingSpinner />}
        <Suspense fallback={<LoadingSpinner />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
