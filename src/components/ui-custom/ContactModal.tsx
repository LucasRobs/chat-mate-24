
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { toast } from "@/hooks/use-toast"
import { ArrowRight, Loader2 } from "lucide-react"

export function ContactModal({ children, source = "Pricing Scale Up" }: { children: React.ReactNode, source?: string }) {
    const [open, setOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        // Simulating API call
        console.log("Form submitted:", { ...formData, source })

        await new Promise((resolve) => setTimeout(resolve, 1500))

        setIsLoading(false)
        setOpen(false)
        toast({
            title: "Solicitação enviada!",
            description: "Nossa equipe entrará em contato em breve.",
        })
        setFormData({ name: "", email: "", company: "", phone: "", message: "" })
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-[600px] border-none shadow-2xl bg-white/95 backdrop-blur-xl">
                <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl font-semibold text-gray-900">Fale com um Especialista</DialogTitle>
                    <DialogDescription className="text-gray-500 font-light text-base">
                        Preencha os dados abaixo para receber um contato personalizado sobre o plano Scale Up.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="name" className="text-gray-700 font-medium">Nome</Label>
                            <Input
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome completo"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="company" className="text-gray-700 font-medium">Empresa</Label>
                            <Input
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                required
                                placeholder="Nome da sua empresa"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-gray-700 font-medium">Email Corporativo</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="voce@empresa.com"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone" className="text-gray-700 font-medium">Telefone / WhatsApp</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="(00) 00000-0000"
                                className="bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700 font-medium">Mensagem (Opcional)</Label>
                        <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Conte-nos um pouco sobre sua necessidade..."
                            className="min-h-[100px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                        />
                    </div>

                    <div className="pt-2 flex justify-end">
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="bg-gray-900 text-white hover:bg-black px-8 py-2 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Enviando...
                                </>
                            ) : (
                                <>
                                    Solicitar Contato
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    )
}
