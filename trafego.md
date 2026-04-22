# PRD - Landing Page Followop

## Visão Geral

Landing page de alta conversão para a Followop, plataforma de automação de WhatsApp com IA para e-commerce. A página tem como objetivo capturar leads qualificados através de um formulário de contato e demonstrar os benefícios da solução de automação.

**URL Principal:** `/` (Index page)
**Objetivo Principal:** Captura de leads e demonstração de valor da solução
**Público Alvo:** Donos de e-commerce, gestores de vendas, empreendedores digitais

---

## Stack Tecnológico

### Frontend Framework
- **React 18.3.1** com TypeScript
- **Vite 5.4.1** como bundler
- **React Router DOM 6.26.2** para navegação

### UI & Styling
- **Tailwind CSS 3.4.11** - Framework CSS utility-first
- **Radix UI** - Componentes acessíveis (accordion, dialog, dropdown, etc.)
- **Framer Motion 12.35.1** - Animações e transições
- **Lucide React 0.462.0** - Ícones
- **shadcn/ui** - Componentes UI baseados em Radix

### Funcionalidades Extras
- **@tanstack/react-query 5.56.2** - Gerenciamento de queries
- **react-hook-form 7.53.0** - Gerenciamento de formulários
- **zod 3.23.8** - Validação de schemas
- **@hotjar/browser 1.0.9** - Analytics e heatmaps

---

## Sistema de Design

### Paleta de Cores

#### Cores Principais
- **Primary (Verde):** `#16B763` (HSL: 151 78% 39%)
  - Usado em CTAs, badges, destaques
  - Variação hover: `#14A357`
  - Variação clara: `#A2DE5D` (para botões secundários)

- **Secondary (Verde Escuro):** `#0D3719` (HSL: 149 64% 14%)
  - Usado em textos secundários, footer
  - Foreground: `#33334F`

- **Background:** `#FAFAFA` (cinza muito claro)
- **Surface (Cards):** `#FFFFFF`
- **Text Primary:** `#111827` (gray-900)
- **Text Secondary:** `#6B7280` (gray-500)

#### Cores de Estado
- **Destructive (Vermelho):** Para alertas e erros
- **Accent:** Para elementos interativos

### Tipografia

#### Fonte Principal
- **Outfit** (Google Fonts)
- Pesos: 100, 200, 300, 400, 500, 600, 700, 800, 900
- Peso padrão do body: 300 (light)
- Peso padrão dos headings: medium/semibold

#### Escala Tipográfica
- **H1 (Hero):** 2xl → 6xl (responsive)
  - Mobile: 24px
  - Desktop: 60px
  - Font weight: 800 (extrabold)

- **H2 (Section Titles):** 2xl → 5xl
  - Mobile: 24px
  - Desktop: 48px
  - Font weight: 800 (extrabold)

- **H3 (Card Titles):** base → 2xl
  - Mobile: 16px
  - Desktop: 24px
  - Font weight: 700 (bold)

- **Body Text:** base → lg
  - Mobile: 16px
  - Desktop: 18px
  - Font weight: 300 (light)

### Espaçamento

#### Padding de Seções
- **Mobile:** `py-16` (64px)
- **Tablet:** `py-20` (80px)
- **Desktop:** `py-24` (96px)
- **Large Desktop:** `py-32` (128px)

#### Container
- **Mobile:** `px-4` (16px)
- **Tablet:** `px-6` (24px)
- **Desktop:** `px-8` (32px)
- **Large Desktop:** `px-16` (64px)

### Border Radius
- **Botões:** `rounded-xl` (12px) → `rounded-2xl` (16px)
- **Cards:** `rounded-2xl` (16px) → `rounded-3xl` (24px)
- **Inputs:** `rounded-md` (6px)
- **Global:** `0.75rem` (12px)

### Sombras
- **Light:** `shadow-sm`
- **Medium:** `shadow-md`
- **Heavy:** `shadow-lg`
- **Extra Heavy:** `shadow-xl`

---

## Estrutura da Página

### Layout Global

```
Navbar (Fixed)
├── Logo (followop)
├── Links de Navegação
└── Botão "Entrar"

Main Content
├── Hero Section
├── Proof Strip
├── Market Pain Section
├── How It Works Section
├── Benefits Section
├── Objection Section
└── Contact Form Section

Footer
├── Brand & Social Links
├── Contact Info
├── Product Links
├── Company Links
└── Legal Links

WhatsApp Button (Fixed - Bottom Right)
```

---

## Seções Detalhadas

### 1. Hero Section

**Arquivo:** `src/components/sections/Hero.tsx`

#### Propósito
Capturar atenção imediatamente e direcionar para o CTA principal.

#### Layout
- **Background:** `#FAFAFA` com orbs animados (verde/indigo)
- **Pattern:** Grid pattern sutil (opacity 0.02)
- **Badge:** Meta Business Partner (centralizado)

#### Conteúdo

**Badge Meta Tech Partner**
- Logo Meta (c5206104-ee78-44ed-b432-e4d2a4bb0863.png)
- Texto: "Meta Business Partner"
- Cor: `#0668E1` (azul Meta)
- Tamanho: 10px-11px

**Headline Principal**
- Texto: "2026 VAI QUEBRAR MUITA LOJA"
- Tamanho: 2xl → 6xl (responsive)
- Font weight: 800 (extrabold)
- Cor: gray-900
- Animação: fade-in-up (0.5s)

**Subheadline**
- Texto: "Automação no WhatsApp com IA que faz sua loja vender mais, sem aumentar tráfego."
- Tamanho: base → 2xl
- Font weight: 400 (normal)
- Cor: gray-600
- Max-width: 2xl

**CTA Principal**
- Texto: "Quero aumentar meu lucro"
- Link: `https://www.followop.com.br/register` (target="_blank")
- Cor de fundo: `#16B763` (verde)
- Cor do texto: white
- Ícone: ArrowRight em círculo branco
- Tamanho: lg (mobile) → xl (desktop)
- Padding: px-6 py-4 (mobile) → px-12 py-7 (desktop)
- Border radius: xl → 2xl
- Animação: fade-in-up (delay 0.3s)
- Shadow: shadow-lg
- Hover: `#14A357`

#### Animações
- Background orbs: animate-pulse (2s delay)
- Hero text: fade-in-up (0.5s)
- CTA: fade-in-up (0.3s delay)

#### Responsividade
- **Mobile:** Texto menor, padding reduzido, CTA full-width
- **Desktop:** Texto maior, padding aumentado, CTA auto-width

---

### 2. Proof Strip Section

**Arquivo:** `src/components/sections/ProofStrip.tsx`

#### Propósito
Demonstrar credibilidade através de métricas sociais.

#### Layout
- **Background:** `bg-gray-50` com bordas `border-gray-200`
- **Padding:** py-8 (mobile) → py-12 (desktop)

#### Conteúdo

**Mobile Layout (Vertical)**
- Métrica principal: "+150 empresas ativas"
  - Tamanho: text-4xl (mobile)
  - Cor: gray-900
  - Font weight: bold
- Métricas secundárias (horizontal):
  - "4.9/5 avaliação"
  - "+2M mensagens"
  - Separador: "•"

**Desktop Layout (Horizontal)**
- 3 métricas em linha com divisores verticais
- **Métrica 1:** "+150"
  - Label: "empresas ativas"
  - Tamanho: text-3xl
  - Cor: gray-700
  - Label: uppercase, tracking-wide, text-xs
- **Divisor:** h-10 w-px bg-gray-200
- **Métrica 2:** "4.9/5"
  - Label: "avaliação média"
- **Métrica 3:** "+2M"
  - Label: "mensagens automatizadas"

#### Animações
- Staggered fade-in-up (0.1s delay entre cada)
- viewport: once (animapenas uma vez)

---

### 3. Market Pain Section

**Arquivo:** `src/components/sections/MarketPain.tsx`

#### Propósito
Identificar o problema que o produto resolve.

#### Layout
- **Background:** `bg-white`
- **Padding:** py-20 → py-32

#### Conteúdo

**Section Title**
- Texto: "O problema em 2026"
- Tamanho: 2xl → 5xl
- Font weight: 800 (extrabold)
- Cor: gray-900

**Mobile Layout (Editorial)**
- **Card Principal (Destaque):**
  - Background: white
  - Border: 2px border-red-100
  - Border radius: 2xl → 3xl
  - Shadow: shadow-md
  - Icon: TrendingDown (red-600)
  - Icon background: red-50
  - Icon size: 7x7
  - Título: "Tráfego caro, margem caindo"
  - Texto: "O custo por lead explodiu. Quem não automatiza, perde."
  
- **Cards Secundários (2 colunas):**
  - **Card 1:**
    - Icon: AlertTriangle (orange-600)
    - Icon background: orange-50
    - Título: "Cliente não volta"
    - Texto: "Vende uma vez e some. Sem follow-up, LTV cai."
  
  - **Card 2:**
    - Icon: Target (green-600)
    - Icon background: green-50
    - Título: "Quem entendeu"
    - Texto: "Vende 5x para o mesmo cliente. Automação paga."

#### Animações
- Main card: fade-in-up (0.5s)
- Secondary cards: fade-in-up (0.1s, 0.2s delay)

---

### 4. How It Works Section

**Arquivo:** `src/components/sections/HowItWorks.tsx`

#### Propósito
Explicar o processo de implementação em 3 passos simples.

#### Layout
- **Background:** `bg-gray-50`
- **Padding:** py-16 → py-32
- **ID:** `como-funciona` (para scroll navigation)

#### Conteúdo

**Section Header**
- Badge: "COMO FUNCIONA"
  - Background: green/10
  - Text: green
  - Border: green/20
  - Rounded: full
- Título: "Em 3 passos simples"
- Subtítulo: "Automatizado em poucos dias."

**Mobile Layout (Timeline Vertical)**
- Timeline com linha vertical
- 3 steps com números pequenos (w-3 h-3)
- **Step 1:** "Conecte seu WhatsApp" - "Conecte em 5 minutos."
- **Step 2:** "Configuramos a IA" - "Nossa equipe treina com sua operação."
- **Step 3:** "Venda automático" - "Atenda e venda 24/7 em até 7 dias."

**Desktop Layout (Grid Horizontal)**
- 3 cards em grid-cols-3
- Números em círculos (w-10 h-10, green background, white text)
- ArrowRight entre cards
- Cards com border e shadow-sm

#### Animações
- Mobile: fade-in-left (staggered 0.1s)
- Desktop: fade-in-up (staggered 0.1s)

---

### 5. Benefits Section

**Arquivo:** `src/components/sections/BenefitsSection.tsx`

#### Propósito
Destacar os principais benefícios da solução.

#### Layout
- **Background:** `bg-white`
- **Padding:** py-20 → py-36

#### Conteúdo

**Section Title**
- Texto: "Seu WhatsApp vendendo em escala, sem travar sua operação"
- Tamanho: 2xl → 5xl
- Font weight: 800 (extrabold)

**Mobile Layout (Vertical)**
- **Card Principal (Destaque):**
  - Background: gradient `from-[#16B763] to-[#14A357]`
  - Border radius: 2xl → 3xl
  - Shadow: shadow-lg
  - Icon: Workflow (white)
  - Icon background: white/20
  - Título: "Centralize atendimento, qualificação e conversão no WhatsApp"
  - Texto: "Automatize seu WhatsApp para vender com velocidade e consistência, sem depender do seu time."

- **Cards Secundários (3 cards):**
  - **Benefit 1:** Zap icon - "Nunca deixe lead esfriar" - "IA responde em segundos, dia e noite."
  - **Benefit 2:** Database icon - "Saiba quem está pronto para comprar" - "CRM que qualifica leads automaticamente."
  - **Benefit 3:** BarChart2 icon - "Veja onde seu lucro está travando" - "Métricas em tempo real do seu funil."

**Desktop Layout (2x2 Grid)**
- **Card Principal (top-left):** Gradient, maior destaque
- **Benefit 1 (top-right):** White background, border, shadow-md
- **Benefit 2 (bottom-left):** Gray-50 background, border, shadow-sm
- **Benefit 3 (bottom-right):** Gray-50 background, border, shadow-sm

#### Animações
- Main card: fade-in-up (0.5s)
- Secondary cards: fade-in-up (staggered 0.1s)

---

### 6. Objection Section

**Arquivo:** `src/components/sections/Objection.tsx`

#### Propósito
Tratar a objeção principal "Não sei tecnologia".

#### Layout
- **Background:** `bg-gray-50`
- **Padding:** py-16 → py-32

#### Conteúdo

**Container Principal**
- Background: white
- Border: border-gray-100
- Border radius: 2xl → [2rem] (32px)
- Shadow: shadow-sm
- Padding: p-6 → p-12

**Objeção Principal**
- Icon: MessageCircle (green)
- Icon background: green/10
- Icon border: green/20
- Título: "Não sei tecnologia"
- Texto: "Implantação assistida por nossos engenheiros com suporte direto. Treinamos a IA uma única vez."

**Mobile Layout (Horizontal Strip)**
- 3 benefícios em coluna:
  - **Benefício 1:** Clock icon - "Implantação Assistida" - "Configuramos tudo para você"
  - **Benefício 2:** Shield icon - "Garantia de 7 Dias" - "Risco zero para testar"
  - **Benefício 3:** MessageCircle icon - "Suporte Direto" - "Canal exclusivo"

**Desktop Layout (Grid 3 cols)**
- Mesmos 3 benefícios em grid-cols-3
- Layout com ícones maiores

#### Animações
- Container: fade-in-up (0.5s)

---

### 7. Contact Form Section

**Arquivo:** `src/components/sections/ContactForm.tsx`

#### Propósito
Capturar lead qualificado através de formulário.

#### Layout
- **Background:** `bg-white`
- **Padding:** py-16
- **Layout:** 2 colunas (desktop) / 1 coluna (mobile)

#### Conteúdo

**Coluna Esquerda (Copy)**
- Badge (Alert): "2026 não vai esperar"
  - Background: red-100
  - Text: red-700
  - Icon: AlertTriangle
- Título: "Não espere a conta não fechar"
  - Tamanho: 2xl → 4xl
  - Font weight: bold
- Texto: "Perdendo 40% dos leads por demora no atendimento? Seu custo vai explodir em 2026."
- Texto secundário: "Instalação em 5 minutos. Sem fidelidade."

**Coluna Direita (Formulário)**
- **Hidden Fields:**
  - event: "text"
  - flowId: ""
  - formId: "form_1776877862813"
  - redirect_url: "?"
  - raw_query_string: ""
  - phone: ""

- **Campo Nome:**
  - Type: text
  - Placeholder: "Insira seu nome"
  - ID: name-2
  - Height: 38px
  - Border: gray-300
  - Focus ring: green-500

- **Campo Email:**
  - Type: email
  - Placeholder: "Insira seu melhor e-mail"
  - ID: email-2
  - Required
  - Height: 38px

- **Campo Telefone (com DDI):**
  - DDI Select:
    - ID: ddi-2
    - Options: Brasil (+55), EUA (+1), Portugal (+351), Espanha (+34)
    - Max-width: 25%
    - Height: 38px
  - Telefone Input:
    - Type: tel
    - ID: tel-2
    - Placeholder: "(00) 00000-0000"
    - MaxLength: 15
    - Required
    - Height: 38px

- **Botão Submit:**
  - Texto: "Quero aumentar meu lucro"
  - ID: btn-continuar
  - Background: green-500
  - Text: white
  - Font weight: bold
  - Uppercase
  - Border radius: xl
  - Shadow: shadow-lg
  - Hover: green-600

#### Integração
- **Webhook:** `https://n8n.comea.com.br/webhook/webhook_718dpyim`
- **Method:** POST
- **Headers:** Content-Type: application/json
- **Payload:** FormData + redirect_url com parâmetros

#### Validação
- Nome: obrigatório
- Email: obrigatório, formato válido
- Telefone: obrigatório, mínimo 10 dígitos
- Feedback visual: borda vermelha em campos inválidos

#### Redirect
- Após envio: redireciona para `redirect_url` com parâmetros:
  - name
  - email
  - phone
  - phonenumber
  - raw_query_string (UTM params)

---

## Componentes de Layout

### Navbar

**Arquivo:** `src/components/layout/Navbar.tsx`

#### Características
- **Posição:** Fixed, z-50
- **Background:** glass/blur effect
- **Shape:** Pill/rounded-full
- **Max-width:** 560px (scroll > 10) / 620px (scroll <= 10)
- **Mobile:** max-w-[95%], h-12, top-2
- **Desktop:** h-14 (scroll <= 10) / h-12 (scroll > 10)

#### Conteúdo
- **Logo:** followop.png (w-6 h-6)
- **Links:**
  - Funcionalidades (#features)
  - Parceiros (#partners)
  - Planos (#pricing)
- **Botão Entrar:** Link para `https://www.followop.com.br/login`
- **Mobile Menu:** Hamburger com dropdown

#### Comportamento
- Scroll > 10px: reduz tamanho e aumenta sombra
- Active section: highlight no link correspondente
- Mobile: backdrop menu com animação fade-in-down

---

### Footer

**Arquivo:** `src/components/layout/Footer.tsx`

#### Características
- **Background:** gradient `from-white to-gray-50`
- **Border top:** border-gray-100
- **Padding:** pt-16 pb-8 (mobile) / pt-24 pb-12 (desktop)
- **Pattern:** impulso-pattern (opacity 0.05)

#### Conteúdo

**Brand Column**
- Logo: 669aaab1-10dd-437a-a1b9-789ae5f02809.png
- Texto: "Automatize seu atendimento no WhatsApp de forma profissional e eficiente."
- Social Links:
  - Instagram: https://www.instagram.com/followop.ia
  - LinkedIn: https://www.linkedin.com/company/followop/

**Contact Column**
- Email: followop.oficial@gmail.com
- Phone: +55 (85) 99431-4736
- Address (desktop only): BS Design Torre Sul, Aldeota, Fortaleza - CE

**Product Column**
- Recursos (#features)
- Preços (#pricing)
- FAQ

**Company Column**
- Sobre (#partners)
- Afiliados (/afiliados)
- Parceiros (#partners)
- Contato

**Legal Column**
- Termos de Uso
- Privacidade
- Cookies

**Bottom Bar**
- Copyright: © {currentYear} followop. Todos os direitos reservados.

#### Mobile Behavior
- Accordion style para cada coluna
- Toggle animation
- Arrow rotation

---

### WhatsApp Button

**Arquivo:** `src/components/ui/whatsapp-button`

#### Características
- **Posição:** Fixed bottom-right
- **Ícone:** WhatsApp
- **Phone:** `5585994314736` (env var: VITE_WHATSAPP_PHONE)
- **Message:** "Olá! Gostaria de mais informações." (env var: VITE_WHATSAPP_MESSAGE)
- **Link:** `https://wa.me/{phone}?text={encoded_message}`

---

## Animações

### Keyframes Customizados

```css
fade-in: opacity 0 → 1, translateY 20px → 0
fade-in-left: opacity 0 → 1, translateX -20px → 0
fade-in-right: opacity 0 → 1, translateX 20px → 0
fade-in-down: opacity 0 → 1, translateY -10px → 0
float: translateY 0 → -10px → 0 (6s infinite)
spin-once: rotate 0deg → 360deg (0.5s)
pulse-light: opacity 1 → 0.7 → 1 (2s infinite)
marquee: translateX 0% → -50% (25s linear infinite)
```

### Classes de Animação

- `.reveal` - Fade in com translateY
- `.blur-reveal` - Blur fade in
- `.animate-on-scroll` - Trigger no scroll
- `.fade-in-left/right/up/down` - Direções específicas
- `.scale-in` - Scale animation
- `.rotate-in` - Rotate animation

### Scroll Animations
- Intersection Observer para detectar elementos
- `viewport={{ once: true }}` (Framer Motion)
- Threshold: 0.1
- Delay staggered para múltiplos elementos

---

## Assets e Imagens

### Logos
- **followop.png** - Logo principal (162972 bytes)
- **669aaab1-10dd-437a-a1b9-789ae5f02809.png** - Logo footer (162972 bytes)
- **c5206104-ee78-44ed-b432-e4d2a4bb0863.png** - Meta logo (63864 bytes)
- **Meta_Logo.png** - Meta logo alternativo (54003 bytes)

### Imagens de Treinamento/Parceiros
- **2p_treinamentos.png** (100709 bytes)
- **6443dfd4-5a5c-403f-aa89-1b43aa9f7f99.png** (72642 bytes)
- **danieldoto.png** (307323 bytes)
- **d0b3b40d-b7c8-49cd-a80d-68f0fe56e7d5.png** (92834 bytes)

### Vídeos
- **WhatsApp Video 2026-04-22 at 13.04.46.mp4** (5.4MB)

### Outros
- **2192a165-35d0-46af-ace8-64e6e8f4c8d4.png** (30820 bytes)
- **71fbeaff-0928-4752-9ae7-7f042a270e23.png** (3967 bytes)
- **74050f6a-3a71-4162-b5e1-547d7624bf8c.png** (46058 bytes)
- **c241bc16-7cad-45e8-b380-8f698a4eaa41.png** (35270 bytes)
- **c9324512-b0e3-4543-bbef-c18d92b285d6.png** (23221 bytes)
- **d2eb300a-216a-4188-86fe-e79f877db05c.png** (13380 bytes)
- **e48ef412-b1e7-4c54-9104-d48ddcb141f8.png** (42084 bytes)
- **emergency_talks_logo.png** (3951 bytes)

---

## Context e State Management

### UserFormContext

**Arquivo:** `src/context/UserFormContext.tsx`

#### Propósito
Gerenciar estado do formulário de usuário.

#### Estado
```typescript
{
  hasSubmitted: boolean;
  setHasSubmitted: (value: boolean) => void;
  userInfo: { name: string; phone: string } | null;
  setUserInfo: (info: { name: string; phone: string } | null) => void;
}
```

#### Persistência
- Salva em localStorage
- Carrega no mount
- Atualiza quando userInfo muda

---

## Hooks Customizados

### useIsMobile

**Arquivo:** `src/hooks/use-mobile.tsx`

#### Propósito
Detectar se é dispositivo mobile.

#### Breakpoint
- Mobile: < 768px
- Usa window.matchMedia para performance

---

## Rotas

### Página Principal (/)
- Componente: `Index`
- Seções: Hero → ProofStrip → MarketPain → HowItWorks → Benefits → Objection → ContactForm

### Outras Rotas
- `/scale-up` - Página Scale Up
- `/afiliados` - Página de Afiliados
- `/startupsummit` - Formulário Startup Summit
- `/forms` - Formulários
- `/plano-2026` - Plano 2026
- `*` - NotFound (404)

---

## Integrações de Terceiros

### Hotjar
- Inicializado em `src/utils/hotjar.ts`
- Carregado apenas no client
- Para analytics e heatmaps

### N8N Webhook
- Endpoint: `https://n8n.comea.com.br/webhook/webhook_718dpyim`
- Método: POST
- Payload: JSON com dados do formulário
- Usado para processamento de leads

### Meta Business Partner
- Badge exibido no Hero
- Credibilidade através de parceria com Meta

---

## Performance Otimizations

### Mobile
- Background orbs ocultos no mobile (hidden sm:block)
- Reduzido número de animações no mobile
- Layout simplificado para melhor performance
- Touch targets mínimos de 36px

### Scroll
- Scrollbar oculto visualmente
- Smooth scroll habilitado
- Intersection Observer com threshold otimizado

### Loading
- Suspense boundary para lazy loading
- Fallback: "Carregando..."
- Error boundary para capturar erros

---

## Responsividade

### Breakpoints
- **Mobile:** < 640px
- **Tablet:** 640px - 768px
- **Desktop:** 768px - 1024px
- **Large Desktop:** 1024px - 1280px
- **XL Desktop:** > 1280px

### Estratégias
- Mobile-first design
- Layouts diferentes por breakpoint
- Text sizes responsive
- Padding e spacing adaptativos
- Grid changes (1 col → 2 col → 3 col)
- Menu hamburger no mobile

---

## Acessibilidade

### Semântica
- HTML5 semantic elements (section, nav, footer, main)
- Aria labels em ícones e botões
- Alt text em imagens
- Heading hierarchy (h1 → h2 → h3)

### Navegação
- Keyboard navigation
- Focus states visíveis
- Skip links (se necessário)
- Tab order lógico

### Cores
- Contraste ratio adequado
- Focus rings visíveis
- Estados hover/active claros

---

## SEO

### Meta Tags
- Deve ser implementado no index.html
- Title, description, keywords
- Open Graph tags
- Twitter Card tags

### Performance
- Imagens otimizadas
- Lazy loading
- Critical CSS
- Minificação de assets

---

## Analytics

### Hotjar
- Heatmaps
- Session recordings
- Funnels
- Form analytics

### Webhook Tracking
- Form submissions
- Lead capture
- Conversion tracking

---

## Variáveis de Ambiente

### Required
- `VITE_WHATSAPP_PHONE` - Número WhatsApp (default: 5585994314736)
- `VITE_WHATSAPP_MESSAGE` - Mensagem WhatsApp (default: "Olá! Gostaria de mais informações.")

---

## Scripts NPM

### Development
- `npm run dev` - Start dev server (Vite)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run preview` - Preview production build
- `npm run lint` - ESLint

### Remotion (Video)
- `npm run remotion:preview` - Preview video animation
- `npm run remotion:render` - Render video to MP4

---

## Deploy

### Vercel
- Config: `vercel.json`
- Build command: `vite build`
- Output directory: `dist`

---

## Notas de Implementação

### Design System
- Apple-inspired design
- Glass morphism effects
- Smooth animations
- Precision borders
- Brightness slider effect em botões

### CSS Architecture
- Modular CSS imports
- Tailwind layers (base, components, utilities)
- Custom animations
- Responsive utilities

### Component Architecture
- Section-based components
- Reusable UI components (shadcn/ui)
- Context for state management
- Custom hooks for logic

---

## Próximos Passos / Melhorias Sugeridas

### Short Term
- Implementar meta tags SEO
- Adicionar schema markup
- Otimizar imagens (WebP)
- Adicionar loading skeletons

### Medium Term
- A/B testing de CTAs
- Personalização baseada em UTM
- Lead scoring
- Email automation integration

### Long Term
- Multi-language support
- Progressive Web App
- Offline functionality
- Advanced analytics dashboard

---

## Contato

**Empresa:** followop
**Email:** followop.oficial@gmail.com
**Phone:** +55 (85) 99431-4736
**Address:** BS Design Torre Sul, Aldeota, Fortaleza - CE
**Instagram:** @followop.ia
**LinkedIn:** https://www.linkedin.com/company/followop/

---

**Versão do Documento:** 1.0
**Data de Criação:** 2026-04-22
**Última Atualização:** 2026-04-22
