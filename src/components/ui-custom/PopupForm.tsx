
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUserForm } from "@/context/UserFormContext";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "O nome deve ter pelo menos 2 caracteres" }),
  phone: z
    .string()
    .min(10, { message: "O telefone deve ter pelo menos 10 dígitos" })
    .regex(/^\d+$/, { message: "O telefone deve conter apenas números" }),
});

type FormValues = z.infer<typeof formSchema>;

interface PopupFormProps {
  children: React.ReactNode;
  buttonClassName?: string;
  onClick?: () => void;
  redirectUrl?: string;
  redirectToPhone?: boolean;
}

const PopupForm: React.FC<PopupFormProps> = ({
  children,
  buttonClassName,
  onClick,
  redirectUrl = "https://www.followop.com.br/register",
  redirectToPhone = false,
}) => {
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
        title: "Calma! Já recebemos seu interesse 😉",
        description:
          "Em breve nossa IA vai entrar em ação. Fique ligado!",
        duration: 5000,
      });
      
      // Redirect after showing toast if user already submitted
      if (redirectToPhone) {
        window.location.href = "tel:+5588997492536";
      } else if (redirectUrl) {
        window.open(redirectUrl, "_blank");
      }
    } else {
      setOpen(true);
    }
  };

  const onSubmit = (data: FormValues) => {
    setUserInfo({ name: data.name, phone: data.phone });
    setHasSubmitted(true);
    setOpen(false);

    toast({
      title: "Parabéns, seu negócio acaba de evoluir!",
      description:
        "Nossa IA já está se preparando para te gerar resultados incríveis!",
      duration: 5000,
    });
    
    // Redirect after form submission
    setTimeout(() => {
      if (redirectToPhone) {
        window.location.href = "tel:+5588997492536";
      } else if (redirectUrl) {
        window.open(redirectUrl, "_blank");
      }
    }, 1500);
  };

  return (
    <>
      <Button
        className={`${buttonClassName} relative group`}
        onClick={handleButtonClick}
        {...(onClick ? {} : { type: "button" })}
      >
        {children}
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent
          className="sm:max-w-md max-h-screen overflow-y-auto rounded-3xl shadow-2xl border-none p-4 w-[95%] sm:w-full"
          style={{
            margin: 0,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            position: "fixed",
          }}
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-primary/10 opacity-80 blur-2xl -z-10" />

          <DialogHeader className="text-center">
            <DialogTitle className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
              Pronto para Vender Muito Mais com IA? 💥
            </DialogTitle>
            <DialogDescription className="text-base text-gray-600 max-w-sm mx-auto">
              Garanta sua vantagem agora. Preencha seus dados e veja a IA impulsionar seu faturamento!
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
                Quero Vender Mais Agora
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
