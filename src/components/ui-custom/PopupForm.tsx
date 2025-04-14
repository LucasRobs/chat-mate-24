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
import { ArrowRight } from "lucide-react";

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
        title: "Você já demonstrou interesse!",
        description: "Em breve nossa IA entrará em contato com você.",
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
      title: "Transformando seu Negócio!",
      description: "Recebemos suas informações. Nossa IA vai revolucionar suas vendas!",
      duration: 5000,
    });
  };

  return (
    <>
      <Button 
        className={`${buttonClassName} relative group`} 
        onClick={handleButtonClick}
        {...(onClick ? {} : { type: "button" })}
      >
        {children}
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md max-h-screen overflow-y-auto rounded-3xl shadow-2xl border-none fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 opacity-50 blur-2xl -z-10" />
          <DialogHeader className="text-center">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Vamos Decolar? 🚀
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 max-w-sm mx-auto">
              Preencha seus dados e transforme seu negócio com IA em minutos!
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700">Nome Completo</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Como podemos te chamar?" 
                        className="border-primary/20 focus:ring-primary/50"
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
                    <FormLabel className="text-gray-700">Telefone</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="WhatsApp para contato" 
                        type="tel"
                        className="border-primary/20 focus:ring-primary/50"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 mt-4 group"
              >
                Quero Revolucionar Meu Negócio
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PopupForm;
