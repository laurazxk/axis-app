AXIS — Planeje viagens com quem importa

Descrição

O Axis é um aplicativo mobile de planejamento de viagens em grupo. Ele resolve o problema da desorganização entre amigos que viajam juntos: roteiros bagunçados, gastos mal divididos e falta de sincronização entre os participantes. A proposta é centralizar tudo em um único lugar — destino, datas, atividades, orçamento e divisão de despesas — de forma simples e colaborativa.

Objetivo

Permitir que grupos de amigos ou familiares planejem suas viagens dentro de um único aplicativo, com criação de itinerários (manual ou por IA), compartilhamento em tempo real entre os participantes e controle transparente de gastos.

Tecnologias Utilizadas

Backend 

Node.js
Express
Firebase / Supabase (autenticação e banco de dados)


Mobile

React Native 
Expo Router (navegação)
expo-blur (efeito glass)
expo-linear-gradient


Funcionalidades

Tela de boas-vindas com apresentação do aplicativo 
Cadastro e login de usuário (e-mail/senha)
Exploração de destinos e países populares
Criação de roteiro de viagem com destino, datas, atividades e orçamento
Geração de itinerário automática por Inteligência Artificial
Código de convite para compartilhar a viagem com o grupo
Controle de despesas com gráfico por categorias
Divisão de gastos entre os participantes (igualmente ou personalizado)
Perfil do usuário com configurações (notificações e tema claro ou escuro)


Estrutura do Projeto

axis-app/
├── app/                    # Telas do aplicativo
│   ├── (auth)/             # Fluxo de autenticação
│   │   ├── splash.tsx      # Tela inicial com logo
│   │   ├── welcome.tsx     # Carrossel de onboarding
│   │   ├── login.tsx       # Login
│   │   └── register.tsx    # Cadastro
│   ├── (tabs)/             # Telas principais (após login)
│   │   ├── home.tsx        # Explorar destinos
│   │   ├── trips.tsx       # Minhas viagens / itinerário
│   │   ├── expenses.tsx    # Despesas
│   │   └── profile.tsx     # Perfil
│   └── _layout.tsx         # Configuração de navegação
├── components/             # Componentes reutilizáveis
│   ├── GlassCard.tsx
│   ├── GlassButton.tsx
│   └── GlassInput.tsx
├── constants/
│   └── theme.ts            # Cores, fontes e espaçamentos
├── services/
│   ├── api.ts              # Configuração de requisições
│   └── supabase.ts         # Conexão com banco de dados
└── assets/                 # Imagens e fontes

Como Executar
Pré-requisitos

Node.js instalado (versão 18 ou superior)
Expo CLI instalado globalmente
Aplicativo Expo Go no celular (iOS ou Android)

Passos

bash# 1. Clonar o repositório
git clone https://github.com/seu-usuario/axis-app.git   

# 2. Entrar na pasta do projeto
cd axis-app

# 3. Instalar as dependências
npm install

# 4. Iniciar o projeto
npx expo start

Após rodar o último comando, escaneie o QR code com o aplicativo Expo Go para visualizar o app no celular.


Deploy


Link do deploy no Render: (a ser adicionado)



Aplicativo Mobile

O aplicativo é desenvolvido com React Native + Expo. Para testar:


Instale o app Expo Go na loja do seu celular (App Store ou Google Play)
Clone o repositório e rode npx expo start
Escaneie o QR code gerado no terminal com o Expo Go


Futuramente será disponibilizado um APK para instalação direta no Android.

Integrantes

Julia Bandeira
Laura Marques
Laila Camile
Kyara Murayama


Pitch

O Axis foi desenvolvido para resolver um problema real: quem já tentou organizar uma viagem em grupo sabe que é caos. Mensagens perdidas, planilhas confusas, brigas por dinheiro. O Axis resolve isso com um app intuitivo que reúne roteiro, grupo e finanças em um só lugar — com a ajuda de inteligência artificial para montar o itinerário perfeito. Nossa proposta é simples: você foca em viver a viagem, a gente cuida do planejamento.


Links Importantes

Repositório GitHub: (a ser adicionado após criação)
Deploy Render: https://axis-app-yj1r.onrender.com/
Protótipo: https://axisapp2tw.vercel.app
