import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import PopupForm from '@/components/ui-custom/PopupForm';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowRight } from 'lucide-react';

const Startupsummit: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Bem-vindo à followop
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Automatize seu atendimento e vendas com a nossa plataforma de WhatsApp.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Dialog open={isPopupOpen} onOpenChange={setIsPopupOpen}>
              <DialogTrigger asChild>
                <Button 
                  onClick={() => setIsPopupOpen(true)}
                  variant="apple"
                  size="lg"
                  className="text-lg py-3 flex items-center gap-2 h-auto animated-button"
                >
                  Começar agora
                  <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                    <ArrowRight size={16} />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full">
                <DialogHeader>
                  <DialogTitle>Vamos nessa!</DialogTitle>
                  <DialogDescription>
                    Preencha seus dados para turbinar suas vendas com a followop.
                  </DialogDescription>
                </DialogHeader>
                <PopupForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Startupsummit;
