# TechQuiz — Grupo 05

Aplicação web de perguntas e respostas sobre **Fundamentos de Desenvolvimento Front-End**, criada para o Trabalho Final da disciplina Desenvolvimento Front-End Para Web.

- **Repositório:** https://github.com/Ricard0-o/TechQuiz-Grupo-05
- **Site publicado:** https://ricard0-o.github.io/TechQuiz-Grupo-05/

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

## Integrantes e divisão de tarefas

| Integrante | GitHub informado | Tarefa | Entrega esperada | Situação |
| --- | --- | --- | --- | --- |
| Ricardo Nelber Nascimento Junior | [Ricard0-o](https://github.com/Ricard0-o) | Analisar os requisitos, implementar HTML, CSS, JavaScript e JSON, integrar, testar e documentar. | Código, documentação e testes já registrados no histórico do projeto. | Implementação registrada |
| Daniel Ares Gontijo Pinto | [danielareses0806](https://github.com/danielareses0806) | Revisar a clareza do conteúdo e preparar sua parte da apresentação. | Apontamentos de revisão e roteiro ou demonstração da parte apresentada. | Pendente de realização ou confirmação |
| Ricardo Oliveira da Silva | [ro213377-sys](https://github.com/ro213377-sys) | Testar o layout em celular, tablet e computador, incluindo rolagem horizontal e legibilidade. | Registro das larguras e dispositivos testados, problemas encontrados e correções sugeridas. | Pendente de realização ou confirmação |
| Clara Puerta Lopes da Purificação | [Phgomes05](https://github.com/Phgomes05)¹ | Revisar o uso por teclado, foco visível, leitura do retorno e identificação das alternativas. | Checklist de acessibilidade com resultados e problemas encontrados. | Pendente de realização ou confirmação |
| Pablo Henrique Silva Gomes | [Phgomes05](https://github.com/Phgomes05)¹ | Conferir as dez perguntas, respostas, explicações e fontes; executar uma partida final. | Lista de questões revisadas e resultado da validação final. | Pendente de realização ou confirmação |

¹ O mesmo endereço de GitHub foi informado para Pablo e Clara. A associação de uma conta individual à Clara precisa ser confirmada; este link não comprova autoria de trabalho dela.

As tarefas pendentes são uma divisão proposta. Atualize o [registro de trabalho](docs/REGISTRO_DE_TRABALHO.md) com a data e o resultado somente depois da execução. O histórico Git deve identificar quem realmente fez cada alteração; não crie commits em nome de outro integrante.

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
