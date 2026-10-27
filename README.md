**Beauty in Black**  
**Beleza negra. Presença inconfundível.**  
**O Beauty in Black é um projeto conceitual de website para um salão de beleza especializado na valorização da beleza negra, das texturas naturais e da identidade de cada pessoa. A proposta combina uma estética editorial sofisticada com uma experiência digital acolhedora, destacando serviços, identidade da marca e agendamento de atendimentos.**  
**O projeto foi desenvolvido para compor um portfólio de desenvolvimento web, demonstrando a criação de uma presença digital para um negócio local.**  
**✨ Funcionalidades**  
**· Página inicial de impacto: apresentação da marca com destaque visual e chamada para agendamento.**  
**· Navegação por seções: acesso rápido ao início, serviços, essência da marca, galeria e contato.**  
**· Apresentação de serviços: seção dedicada a cabelos naturais, tranças e penteados, tratamentos capilares e styling.**  
**· Galeria visual interativa: imagens que podem ser ampliadas em uma visualização sobreposta (lightbox).**  
**· Manifesto da marca: conteúdo dedicado à representatividade, identidade e valorização da beleza negra.**  
**· Agendamento pelo WhatsApp: chamadas para ação que direcionam o visitante para uma conversa com o salão.**  
**· Menu responsivo: navegação adaptada para dispositivos móveis.**  
**· Cabeçalho dinâmico: alteração visual conforme a página é rolada.**  
**· Acessibilidade básica: rótulos para controles interativos e textos alternativos em imagens relevantes.**  
**🎨 Conceito visual**  
**A identidade visual busca transmitir sofisticação, autenticidade, confiança e representatividade. A direção de arte utiliza imagens editoriais, tipografia expressiva, contrastes marcantes e espaços bem definidos para construir uma experiência premium sem perder o acolhimento.**  
**O conteúdo foi escrito em português e a interface foi pensada para apresentar os serviços de forma clara, fortalecer a personalidade da marca e facilitar o contato.**  
**🛠️ Tecnologias utilizadas**  
**· Next.js — framework React para a aplicação web.**  
**· React — construção da interface por componentes.**  
**· TypeScript — tipagem estática.**  
**· Tailwind CSS — infraestrutura de estilos e integração CSS.**  
**· Lucide React — ícones da interface.**  
**· pnpm — gerenciamento de pacotes.**  
**🚀 Como executar o projeto**  
**Pré-requisitos**  
**Antes de começar, tenha instalado:**  
**· Node.js em uma versão compatível com o Next.js utilizado.**  
**· pnpm.**  
**Instalação**  
**1. Clone o repositório:**  
**2. git clone URL_DO_SEU_REPOSITORIO**  
**3. Entre na pasta do projeto:**  
**4. cd site-beauty-in-black**  
**5. Instale as dependências:**  
**6. pnpm install**  
**7. Inicie o servidor de desenvolvimento:**  
**8. pnpm dev**  
**9. Abra http://localhost:3000 no navegador.**  
**Gerar a versão de produção**  
**Para verificar se o projeto pode ser compilado para produção:**  
**pnpm build**  
**Depois da compilação, execute a versão de produção localmente com:**  
**pnpm start**  
**⚙️ Configuração do WhatsApp**  
**Os botões de agendamento usam a variável de ambiente NEXT_PUBLIC_WHATSAPP_NUMBER.**  
**Crie um arquivo .env.local na raiz do projeto e adicione:**  
**NEXT_PUBLIC_WHATSAPP_NUMBER=55DDDNUMERO**  
**Substitua 55DDDNUMERO pelo número do salão, incluindo código do país e DDD, somente com números. Por exemplo, use o formato 55 + DDD + número, sem espaços, parênteses ou hífens.**  
**Se a variável não for configurada, o projeto utiliza um número demonstrativo definido no código. Antes de publicar ou apresentar o site a um cliente, substitua esse valor por um número autorizado.**  
**📁 Estrutura do projeto**  
**site-beauty-in-black/├── app/│   ├── globals.css       # Estilos globais e identidade visual│   ├── layout.tsx        # Layout raiz e metadados da aplicação│   └── page.tsx          # Página principal e suas seções├── components/│   └── ui/│       └── button.tsx    # Componente de botão├── lib/│   └── utils.ts          # Funções utilitárias├── public/               # Ícones e recursos estáticos├── next.config.mjs       # Configuração do Next.js├── package.json          # Scripts e dependências├── pnpm-lock.yaml        # Versões resolvidas das dependências└── tsconfig.json         # Configuração do TypeScript**  
**📌 Observações**  
**· Este é um projeto conceitual para portfólio. Nome, textos de contato e endereço são demonstrativos e devem ser ajustados para uso comercial.**  
**· As fotografias são carregadas de URLs externas; sua disponibilidade depende dos respectivos servidores.**  
**· O link do Instagram é demonstrativo e pode ser substituído pelo perfil oficial do estabelecimento.**  
**· O site apresenta chamadas para contato e agendamento via WhatsApp, mas não inclui um sistema próprio de reservas ou gestão de horários.**  
**💡 Possíveis melhorias futuras**  
**· Adicionar uma página individual para cada serviço.**  
**· Integrar formulário de contato e sistema de agendamento com disponibilidade real.**  
**· Incluir depoimentos de clientes e avaliações.**  
**· Otimizar o carregamento e a entrega das imagens.**  
**· Adicionar testes automatizados e aprimorar a auditoria de acessibilidade.**  
**· Configurar metadados para compartilhamento em redes sociais e SEO local.**  
**👩‍💻 Sobre o projeto**  
**O Beauty in Black foi criado como exercício de desenvolvimento de uma experiência web para um negócio local, unindo identidade visual, organização de conteúdo, responsividade e caminhos claros para conversão.**  
**Status: projeto conceitual de portfólio.**  
   
**Desenvolvido com foco em beleza, identidade e experiência digital.**  
