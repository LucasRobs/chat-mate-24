
import { Suspense } from "react";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WhatsAppButton from "./components/ui/whatsapp-button";
import Index from "./pages/Index";
import ScaleUp from "./pages/ScaleUp";
import Afiliados from "./pages/Afiliados";
import NotFound from "./pages/NotFound";
import Forms from "./pages/Forms";
import { UserFormProvider } from "./context/UserFormContext";
import React from "react";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, ErrorBoundaryState> {
  constructor(props: {children: React.ReactNode}) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught error", error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: "2rem", color: "red", backgroundColor: "#fee" }}>
          <h2>Render Error!</h2>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

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
                <Route path="/scale-up" element={<ScaleUp />} />
                <Route path="/afiliados" element={<ErrorBoundary><Afiliados /></ErrorBoundary>} />
                <Route path="/startupsummit" element={<Forms />} />
                <Route path="/forms" element={<Forms />} />
                {/* Rota catch-all para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </UserFormProvider>
        </QueryClientProvider>
      </BrowserRouter>
      <WhatsAppButton
        phoneNumber={import.meta.env.VITE_WHATSAPP_PHONE ?? "5585994314736"}
        message={import.meta.env.VITE_WHATSAPP_MESSAGE ?? "Olá! Gostaria de mais informações."}
      />
    </>
  );
};

export default App;
