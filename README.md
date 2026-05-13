# Valeroth é top

## Requisitos

### Requisitos Técnicos
- Possibilitar criação de personagem
- Possibilitar edição de personagem
  - Edição deve ser bloqueada no meio da campanha
- Ter um modo de saber se a campanha está rolando
- Possibilitar mestre de editar atributos e inventário dos personagens
  - Mestre não vai editar Informações básicas e história
- Mestre ditar quando o mapa estará disponível para os personagens
- Local do mapa aparecerá dinamicamente, sem mapa, sem opção de ver mapa
- Login simples de usuário (Não personagem)
  - Possibilitar ver personagens antigos


### Requisitos Visuais
- Checar se personagem foi criado no dispositivo para a campanha atual
  - Se sim, abrir direto a tela do personagem
  - Caso não, abrir tela de criação de personagem
- Existir tela de criação de personagem
  - Criar personagem "conversando" com o sistema
  - Setar dados básicos e dados comuns
- Existir tela de personagem
  - Precisa conter: 
    - Nome
    - História
    - Atributos do personagem
    - Inventário
    - Dados "extras" (Mudam conforme campanha)
  - Mapa
- Existir tela do Mestre
  - Informações de cada personagem
    - Básicas
    - História
    - Imagem
  - Linha da Campanha
  - Mapa

## Steps
- Levantamento de Requisitos

- Prototipação
  - Desenho
  - Técnica

- Desenvolvimento
  - Front
  - Back
  - Infra

- Testes em Produção

- Ferramentas
  - Git --> Github
  - Front + Back --> Nuxt + TS
  - Hospedagem --> Server privado + tunel Cloudfare
  - Database --> Mongo