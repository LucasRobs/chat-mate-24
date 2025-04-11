import { Suspense, useState, useEffect } from "react";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Componente de loading com fundo padronizado
const LoadingSpinner = () => (
  <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 opacity-10 impulso-pattern"></div>
    </div>
    <div className="flex flex-col items-center relative z-10">
      <div className="relative mb-8">
        <img
          src="/lovable-uploads/669aaab1-10dd-437a-a1b9-789ae5f02809.png"
          alt="Followop Logo"
          className="h-16 animate-pulse"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/30 to-primary/0 animate-slide-left" />
      </div>
      <div className="w-16 h-1 bg-gray-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-primary/40 via-primary to-primary/40 animate-slide-left" />
      </div>
      <p className="mt-6 text-gray-600 text-sm">Carregando...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <DefaultToaster />
        <SonnerToaster />
        {isLoading && <LoadingSpinner />}
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Rota catch-all para páginas não encontradas */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
