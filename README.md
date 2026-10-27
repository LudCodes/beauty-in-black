# ✦ Beauty in Black

**Beleza negra. Presença inconfundível.**

O Beauty in Black é um projeto conceitual de site para um salão de beleza especializado na valorização da beleza negra, dos cabelos naturais e da identidade feminina.

Desenvolvido como projeto de portfólio, o site busca unir estética, experiência do usuário e funcionalidade em uma experiência digital elegante, acolhedora e visualmente marcante.

## ✨ Sobre o projeto

A proposta do Beauty in Black é criar uma presença digital que celebre a beleza negra e transmita os valores de identidade, autoestima, cuidado e autenticidade.

A identidade visual combina tons escuros, dourado e elementos editoriais para construir uma experiência sofisticada, com destaque para imagens, tipografia e conteúdo.

## 🎯 Funcionalidades

- **Página inicial:** apresentação da marca com destaque visual e chamadas para ação.
- **Nossa essência:** seção institucional sobre o propósito e os valores do salão.
- **Serviços:** apresentação dos serviços de beleza e cuidados capilares.
- **Galeria:** seleção visual de referências de beleza, cabelos e estilos.
- **Navegação interativa:** menu com acesso às principais seções do site.
- **Agendamento pelo WhatsApp:** links para iniciar uma conversa e consultar informações sobre os serviços.
- **Layout responsivo:** adaptação da interface para diferentes tamanhos de tela.
- **Animações e efeitos visuais:** interações sutis para enriquecer a experiência de navegação.

## 🛠️ Tecnologias utilizadas

- **Next.js 16** — framework React para desenvolvimento web.
- **React 19** — construção da interface e gerenciamento de interações.
- **TypeScript** — tipagem estática para maior organização do código.
- **Tailwind CSS 4** — suporte à estilização.
- **CSS personalizado** — identidade visual, layout, responsividade e animações.
- **Lucide React** — biblioteca de ícones.
- **pnpm** — gerenciamento de dependências.
- **Vercel Analytics** — suporte à análise de acesso na versão de produção.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- Node.js
- pnpm

### 1. Clone o repositório

```bash
git clone https://github.com/LudCodes/beauty-in-black.git
```

### 2. Entre na pasta do projeto

```bash
cd beauty-in-black
```

### 3. Instale as dependências

```bash
pnpm install
```

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

### 5. Acesse no navegador

Abra:

```text
http://localhost:3000
```

Para encerrar o servidor, volte ao terminal e pressione `Ctrl + C`.

## 📱 Configuração do WhatsApp

O site utiliza links do WhatsApp para facilitar o contato e as solicitações de agendamento.

Por padrão, o projeto possui um número de exemplo. Para configurar o seu, crie um arquivo `.env.local` na raiz do projeto e adicione:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Substitua o número de exemplo pelo número desejado, utilizando o código do país e o DDD, sem espaços, parênteses ou hífens.

Depois de alterar a variável, reinicie o servidor de desenvolvimento.

## 📂 Estrutura principal

```text
beauty-in-black/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
├── lib/
│   └── utils.ts
├── public/
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── next.config.mjs
└── tsconfig.json
```

## 🎨 Conceito visual

A identidade visual foi pensada para transmitir sofisticação, confiança e valorização da beleza negra.

**Paleta de cores:**
- Preto profundo — elegância e presença.
- Tons de café — acolhimento e conexão.
- Dourado — sofisticação e destaque.
- Tons de creme e champanhe — equilíbrio e legibilidade.

A composição utiliza imagens editoriais, tipografia serifada nos títulos e elementos minimalistas para reforçar a personalidade da marca.

## 📌 Objetivos do projeto

Este projeto foi desenvolvido para praticar e demonstrar conhecimentos em desenvolvimento front-end, incluindo:

- Construção de interfaces com React e Next.js.
- Organização de componentes e conteúdo.
- Estilização com CSS.
- Criação de layouts responsivos.
- Implementação de interações com JavaScript e React.
- Integração de chamadas para ação com o WhatsApp.
- Aplicação de princípios de experiência do usuário e identidade visual.

## 👩🏽‍💻 Desenvolvido por

**Ludmila Alves — LudCodes**

Desenvolvedora Web em formação, com interesse em desenvolvimento front-end, interfaces digitais e experiência do usuário.

- GitHub: [@LudCodes](https://github.com/LudCodes)

---

*Beauty in Black — Sua beleza. Suas raízes. Seu poder.*
