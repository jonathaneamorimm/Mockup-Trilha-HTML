## Coleta de informações 
- Desenvolvimento da página estática  sem funcionalidades. Ao final do projeto o estagiário será capaz de desenvolver páginas Web estáticas com uma organização e aplicação de padrões de projeto. Segue link do mockup:
  - [Link do Mockup](https://xd.adobe.com/view/de4ad55e-606e-45a1-8c9e-7a5500198ae0-8b19/grid/)  
- Requisitos obrigatórios
  - Desenvolvimento de um arquivo HTML e CSS a partir dos mockups apresentados;
  - Utilização de um repositório git remoto durante o desenvolvimento;
  - O menu deve continuar fixo a medida que usuário desce a tela;
  - Não há necessidade de criação de nenhuma funcionalidade;
  - Todos os botões devem ter uma mudança de cor para uma mais clara quando o usuário passa o mouse;
  - Seguir os padrões de desenvolvimento da Raccoon (container, encapsulamento e mobile-first);
  - Organização de arquivos 
  - Responsividade 
  - Clean Code 

- Requisitos não obrigatorios:
  - Utilizar a metodologia BEM para nomenclatura das classes.
  - Boas práticas de SEO

## Anotações 
- Evitar usar o `!important`, ao invés disso, optar por aumentar a especificidade do elemento para que possua prioridade.
- Emmet para gerar os cards: `article*10.main-cards__card>img:s+div>h1{Lorem Ipsum}/p{Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua}`.
- A orientação foi ajustada para a proporção 1920x1080.

## Acessibilidade
- Uso do ALT em imagens: Isso permite que a imagem possua um texto que caso ela não seja renderizada será exibida ou será lida por leitores de tela
- Uso do aria-label em elementos pouco descritivos: Utilizado em elementos para serem lidos pelos leitores de tela
- Uso do aria-hidden: Ocuta elementos unicamente visuais para leitores de tela.
- Uso do title: Definir o titlo das imagens

## Teste
- Navegadores: Google Chrome e Mozila Firefox.
- Mobile: Testado em diversos formatos de tela.