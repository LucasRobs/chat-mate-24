
import { Suspense } from "react";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/ui/whatsapp-button";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Startupsummit from "./pages/Startupsummit";
import { UserFormProvider } from "./context/UserFormContext";

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <UserFormProvider>
            <DefaultToaster />
            <SonnerToaster />
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Carregando...</div>}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/startupsummit" element={<Startupsummit />} />
                {/* Rota catch-all para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </UserFormProvider>
        </QueryClientProvider>
      </BrowserRouter>
      <WhatsAppButton phoneNumber="5588997492536" message="Olá! Gostaria de mais informações." />
    </>
  );
};

export default App;
