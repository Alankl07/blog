# IA na Programação

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GA4](https://img.shields.io/badge/Google%20Analytics-FFA726?style=for-the-badge&logo=googleanalytics&logoColor=white)

Blog single page sobre os benefícios da inteligência artificial na programação e no desenvolvimento de software.

## Visão geral

Este projeto é uma landing page/blog em HTML, CSS e JavaScript, criada para apresentar de forma visual e objetiva como a IA pode melhorar a produtividade, a qualidade e a criatividade no processo de desenvolvimento de software.

## Objetivo

- destacar os principais benefícios da IA na programação
- mostrar como a ferramenta pode atuar como copiloto para desenvolvedores
- apresentar um layout moderno e responsivo para conteúdo de blog
- coletar dados de desempenho com Google Analytics

## Stack utilizada

- HTML5
- CSS3
- JavaScript
- Google Analytics GA4

## Estrutura do projeto

```bash
.
├── index.html
├── style.css
├── script.js
├── README.md
```

## Funcionalidades

- layout de blog moderno e responsivo
- hero section com proposta de valor
- cards de benefícios com destaque visual
- seção de aplicação prática
- citação inspiracional
- tracking de cliques e visualização de seções
- integração com Google Analytics GA4

## Como executar localmente

### Opção 1: abrir diretamente no navegador

1. Acesse a pasta do projeto
2. Abra o arquivo `index.html`

### Opção 2: usar um servidor local

```bash
npx serve .
```

Em seguida, abra no navegador:

```bash
http://localhost:3000
```

## Configuração do Google Analytics

No arquivo `index.html`, substitua o valor de exemplo:

```html
G-XXXXXXXXXX
```

pelo ID real da sua propriedade no Google Analytics.

## Tracking implementado

O projeto já contém eventos para acompanhar:

- clique em navegação (`nav`)
- clique em botões de ação (`cta`)
- visualização de seções do blog (`section_view`)

Esses eventos são enviados via `gtag` para o Google Analytics.

## Personalização

Você pode customizar facilmente:

- textos e títulos
- cores do tema
- botões e CTAs
- conteúdo dos cards
- ID do Google Analytics

## Status do projeto

Em desenvolvimento e pronto para uso como base para apresentação de conteúdo, protótipo de blog ou portfólio técnico.

## Autor

Projeto desenvolvido para apresentar o tema de IA na programação com foco em comunicação visual, UX e análise de desempenho.

## Licença

Este projeto está disponível para fins educacionais e de demonstração.
