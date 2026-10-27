# Beauty in Black 🖤

> **Beleza negra. Presença inconfundível.**

O **Beauty in Black** é um projeto conceitual de website para um salão de beleza especializado na valorização da beleza negra, das texturas naturais e da identidade de cada mulher.

O projeto combina uma estética editorial sofisticada com uma experiência digital acolhedora, destacando serviços, representatividade e identidade visual. A proposta é demonstrar como um site pode fortalecer a presença digital de um negócio local, transmitir seus valores e facilitar o contato com potenciais clientes.

---

## ✨ Sobre o projeto

O Beauty in Black foi desenvolvido como um projeto de portfólio de desenvolvimento web, com foco na criação de uma experiência visual marcante, na organização do conteúdo e na comunicação da identidade de uma marca.

Mais do que apresentar serviços, o site busca transmitir uma mensagem de autenticidade, autoestima e valorização da beleza negra.

### 🎯 Objetivos

- Criar uma presença digital sofisticada para um salão de beleza.
- Valorizar a representatividade e a diversidade da beleza negra.
- Apresentar os serviços de forma visual e organizada.
- Facilitar o contato e o agendamento pelo WhatsApp.
- Desenvolver uma interface intuitiva, moderna e adaptável a diferentes dispositivos.

---

## 🎨 Identidade visual

A direção visual do projeto foi pensada para transmitir **sofisticação, confiança, autenticidade e representatividade**.

A experiência combina tipografia expressiva, imagens editoriais, contrastes marcantes e espaços bem definidos para criar uma atmosfera premium, sem perder a sensação de acolhimento.

**Conceitos-chave:**
- Beleza e identidade.
- Elegância contemporânea.
- Representatividade negra.
- Experiência acolhedora.
- Comunicação visual marcante.

---

## 🚀 Funcionalidades

- **Página inicial:** apresentação da marca com destaque para sua identidade e proposta.
- **Navegação por seções:** acesso rápido ao início, serviços, essência da marca, galeria e contato.
- **Apresentação de serviços:** área dedicada aos cuidados e às experiências oferecidas pelo salão.
- **Seção institucional:** conteúdo sobre os valores, a história e o propósito da marca.
- **Manifesto da marca:** mensagem sobre identidade, diversidade e valorização da beleza negra.
- **Agendamento pelo WhatsApp:** chamadas para ação que direcionam o visitante para uma conversa.
- **Layout responsivo:** adaptação da interface para diferentes tamanhos de tela.
- **Elementos visuais personalizados:** ícones, imagens e componentes integrados à identidade do projeto.
- **Rodapé informativo:** navegação complementar e canais de contato demonstrativos.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia | Aplicação |
|---|---|
| [Next.js](https://nextjs.org/) | Framework para desenvolvimento da aplicação web |
| [React](https://react.dev/) | Construção da interface por componentes |
| [TypeScript](https://www.typescriptlang.org/) | Tipagem estática e organização do código |
| [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS) | Estilização e identidade visual |
| [Tailwind CSS](https://tailwindcss.com/) | Ferramentas de estilização disponíveis no projeto |
| [Lucide React](https://lucide.dev/) | Ícones da interface |
| [pnpm](https://pnpm.io/) | Gerenciamento de dependências |

---

## 📂 Estrutura do projeto

```text
beautyInBlack/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── ui/
│       └── button.tsx
├── lib/
│   └── utils.ts
├── public/
│   ├── apple-icon.png
│   ├── icon-dark-32x32.png
│   ├── icon-light-32x32.png
│   └── icon.svg
├── .gitignore
├── components.json
├── next.config.mjs
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## 💻 Como executar o projeto

### Pré-requisitos

Antes de começar, instale:

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/installation)

### 1. Clone o repositório

```bash
git clone https://github.com/LudCodes/beauty-in-black.git
```

### 2. Acesse a pasta do projeto

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

Abra o endereço:

[http://localhost:3000](http://localhost:3000)

### 6. Gere a versão de produção

Para verificar a compilação do projeto:

```bash
pnpm build
```

Se a compilação for concluída, execute a versão de produção localmente com:

```bash
pnpm start
```

---

## ⚙️ Configuração do WhatsApp

Os botões de agendamento utilizam a variável de ambiente `NEXT_PUBLIC_WHATSAPP_NUMBER`.

Para configurar o número desejado, crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
```

Substitua o valor pelo número autorizado do salão, incluindo código do país e DDD, sem espaços, parênteses ou hífens.

**Importante:** o número acima é apenas demonstrativo. Antes de utilizar o site comercialmente, configure o contato correto.

Não envie arquivos com credenciais ou informações privadas para o GitHub.

---

## 📱 Experiência do usuário

A estrutura do site prioriza uma navegação clara, conteúdo organizado e chamadas para ação visíveis.

A experiência foi pensada para que o visitante consiga:

1. Conhecer a proposta e a identidade do salão.
2. Explorar os serviços disponíveis.
3. Compreender os valores da marca.
4. Encontrar os canais de contato.
5. Iniciar uma conversa para consultar os serviços e agendamentos.

---

## 🔮 Melhorias futuras

Entre as possíveis evoluções do projeto estão:

- Implementação de uma galeria com visualização ampliada das imagens.
- Criação de páginas individuais para os serviços.
- Integração com um sistema de agendamento com disponibilidade real.
- Inclusão de depoimentos e avaliações de clientes.
- Otimização de imagens e desempenho.
- Aprimoramento da acessibilidade e da navegação por teclado.
- Configuração de SEO local e metadados para compartilhamento.
- Publicação de uma demonstração online.

---

## 📌 Status do projeto

**Status:** projeto conceitual de portfólio.

O site utiliza informações demonstrativas para representar a presença digital de um salão de beleza. Nome, contatos, endereço e links devem ser adaptados caso o projeto seja utilizado por um estabelecimento real.

---

## 👩🏽‍💻 Desenvolvido por

**LudCodes**

Projeto desenvolvido com foco em desenvolvimento web, identidade visual e experiência digital.

[GitHub — LudCodes](https://github.com/LudCodes)

---

*Beauty in Black — Beleza, identidade e poder.*