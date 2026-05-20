import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Afiliados from "./pages/Afiliados";
import Forms from "./pages/Forms";
import GrupoRecupera from "./pages/GrupoRecupera";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RecuperaCash from "./pages/RecuperaCash";
import ScaleUp from "./pages/ScaleUp";
import VSL3 from "./pages/VSL3";
import VSL30 from "./pages/VSL3-0";
import VSL31 from "./pages/VSL3-1";

import React from "react";
import { UserFormProvider } from "./context/UserFormContext";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: React.ReactNode }) {
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
            <Suspense
              fallback={
                <div className="flex items-center justify-center min-h-screen">
                  Carregando...
                </div>
              }
            >
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/scale-up" element={<ScaleUp />} />
                <Route
                  path="/afiliados"
                  element={
                    <ErrorBoundary>
                      <Afiliados />
                    </ErrorBoundary>
                  }
                />
                <Route path="/startupsummit" element={<Forms />} />
                <Route path="/forms" element={<Forms />} />
                <Route path="/recupera-cash" element={<RecuperaCash />} />
                <Route path="/grupo-recuperacao" element={<GrupoRecupera />} />
                <Route path="/vsl3" element={<VSL3 />} />
                <Route path="/vsl3-0" element={<VSL30 />} />
                <Route path="/vsl3-1" element={<VSL31 />} />
                {/* Rota catch-all para páginas não encontradas */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </UserFormProvider>
        </QueryClientProvider>
      </BrowserRouter>
      {/*<WhatsAppButton
        phoneNumber={import.meta.env.VITE_WHATSAPP_PHONE ?? "5585994314736"}
        message={
          import.meta.env.VITE_WHATSAPP_MESSAGE ??
          "Olá! Gostaria de mais informações."
        }
      />*/}
    </>
  );
};

export default App;
