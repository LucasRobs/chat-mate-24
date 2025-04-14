
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserForm } from "@/context/UserFormContext";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  phone: z.string().min(10, { message: "O telefone deve ter pelo menos 10 dígitos" }).regex(/^\d+$/, { message: "O telefone deve conter apenas números" }),
});

type FormValues = z.infer<typeof formSchema>;

interface PopupFormProps {
  children: React.ReactNode;
  buttonClassName?: string;
  onClick?: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ children, buttonClassName, onClick }) => {
  const [open, setOpen] = useState(false);
  const { hasSubmitted, setHasSubmitted, setUserInfo } = useUserForm();
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  const handleButtonClick = () => {
    if (onClick) onClick();
    
    if (hasSubmitted) {
      toast({
        title: "Obrigado pelo seu interesse!",
        description: "Você já demonstrou interesse, em breve a nossa IA entrará em contato com você.",
        duration: 5000,
      });
    } else {
      setOpen(true);
    }
  };

  const onSubmit = (data: FormValues) => {
    setUserInfo({ name: data.name, phone: data.phone });
    setHasSubmitted(true);
    setOpen(false);
    
    toast({
      title: "Informações recebidas!",
      description: "Obrigado! Em breve entraremos em contato com você.",
      duration: 5000,
    });
  };

  return (
    <>
      <Button 
        className={buttonClassName} 
        onClick={handleButtonClick}
        {...(onClick ? {} : { type: "button" })}
      >
        {children}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md mx-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-center">
              Transforme seu Atendimento Agora!
            </DialogTitle>
            <DialogDescription className="text-center mt-2">
              Deixe seus dados para a nossa IA entrar em contato e revolucionar seu negócio!
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Seu nome completo" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone (com DDD)</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ex: 11999999999" 
                        type="tel"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 mt-4"
              >
                Quero Vender Mais Agora
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopupForm;
