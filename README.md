# TechQuiz — Grupo 05

Aplicação web de perguntas e respostas sobre **Fundamentos de Desenvolvimento Front-End**, criada para o Trabalho Final da disciplina Desenvolvimento Front-End Para Web.

## Funcionalidades

- 10 perguntas carregadas de `perguntas.json` com `fetch`;
- identificação do jogador antes da partida;
- uma pergunta por vez, com quatro alternativas e uma resposta correta;
- retorno textual e visual de acerto ou erro;
- explicação e fonte depois de cada resposta;
- pontuação final e ranking das 10 melhores partidas da sessão;
- opção de jogar novamente ou trocar o jogador;
- navegação por teclado, foco visível, contraste e layout responsivo.

## Como executar

Por usar `fetch`, o projeto deve ser aberto por um servidor HTTP, e não diretamente pelo arquivo.

1. Baixe ou clone este repositório.
2. Na pasta do projeto, inicie um servidor local. Exemplo: `python -m http.server 8000`.
3. Acesse `http://localhost:8000` no navegador.

Depois da publicação, o endereço do GitHub Pages será incluído aqui.

## Estrutura

```text
TechQuiz-Grupo-05/
├── index.html              # Estrutura e três telas do quiz
├── perguntas.json          # Dados das 10 perguntas
├── css/estilos.css         # Aparência, estados e responsividade
├── js/scripts.js           # Lógica, pontuação e ranking
├── img/logo-techquiz.svg   # Ícone local do projeto
└── docs/                   # Prompt, guia e registro do trabalho
```

## Regras do jogo

1. Informe um nome com pelo menos dois caracteres.
2. Selecione uma alternativa em cada pergunta.
3. Leia o retorno, a explicação e a fonte antes de avançar.
4. Ao final, confira a pontuação e o ranking da sessão.
5. O ranking permanece enquanto a aba do navegador estiver aberta.

## Integrantes e responsabilidades

| Integrante | Responsabilidade registrada |
| --- | --- |
| Ricardo Nelber Nascimento Junior | Coordenação, análise dos requisitos, implementação de HTML, CSS, JavaScript e JSON, integração, testes e documentação. |
| Daniel Ares Gontijo Pinto | Revisão de conteúdo e apoio à apresentação — participação a confirmar pelo integrante. |
| Ricardo Oliveira da Silva | Teste responsivo em diferentes telas — participação a confirmar pelo integrante. |
| Clara Puerta Lopes da Purificação | Revisão de acessibilidade e navegação por teclado — participação a confirmar pela integrante. |
| Pablo Henrique Silva Gomes | Revisão das perguntas e validação final — participação a confirmar pelo integrante. |

O histórico Git registra apenas o trabalho efetivamente realizado. Não foram criados commits em nome de outras pessoas.

## Tecnologias

HTML5, CSS3, JavaScript e JSON, sem frameworks ou bibliotecas.

## Fontes de estudo

- [Elementos HTML — MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Reference/Elements)
- [CSS Grid — MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Guides/Grid_layout)
- [Flexbox — MDN](https://developer.mozilla.org/pt-BR/docs/Web/CSS/Guides/Flexible_box_layout)
- [Fetch API — MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [sessionStorage — MDN](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/sessionStorage)
- [Foco visível — W3C WAI](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible)

## Versionamento

O projeto usa branches por funcionalidade e mensagens semânticas. A tag `cp1-entrega` identifica o estado preparado para o primeiro checkpoint. As tags dos checkpoints seguintes só devem ser criadas após a validação das respectivas entregas.
