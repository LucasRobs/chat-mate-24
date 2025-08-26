
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

const LeadForm = () => {
  return (
    <section className="py-12 sm:py-16 bg-white animated-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="bg-gray-100 rounded-2xl p-8 sm:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-800">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                Pronto para transformar seu <span className="text-primary">Atendimento</span>?
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Comece agora sem compromisso. Preencha o formulário e nossa equipe entrará em contato.
              </p>
            </div>
            <div>
              <form
                method="post"
                action="https://n8n.comea.com.br/webhook/webhook_r7p8pncn"
                accept-charset="UTF-8"
                className="space-y-4"
              >
                <meta charSet="UTF-8" />
                <input type="hidden" name="event" value="invoice_open" />
                <input type="hidden" name="flowId" value="flow_1756228432027" />
                <div>
                  <Input
                    type="text"
                    id="name-2"
                    name="name"
                    placeholder="Insira seu nome"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Insira seu e-mail"
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    placeholder="Insira seu WhatsApp"
                    className="w-full"
                  />
                </div>
                <Button
                  type="submit"
                  variant="apple"
                  className="w-full inline-flex items-center justify-center gap-2 text-sm py-2.5 h-auto animated-button font-light"
                >
                  Enviar
                  <span className="bg-[#2D2D4A] text-white p-1 rounded-full">
                    <ArrowRight size={12} />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
