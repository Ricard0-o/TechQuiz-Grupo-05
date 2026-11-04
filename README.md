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

## Identidade visual

O TechQuiz usa uma linguagem de placar de rodada: papel claro, tinta verde escura e acentos coral e amarelo. A marca vetorial em `img/logo-techquiz.svg` representa as alternativas e a resposta marcada; o mesmo arquivo funciona como ícone da aba do navegador.

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
├── img/logo-techquiz.svg   # Marca do projeto e favicon
└── docs/                   # Prompt, guia e registro do trabalho
```

## Regras do jogo

1. Informe um nome com pelo menos dois caracteres.
2. Selecione uma alternativa em cada pergunta.
3. Leia o retorno, a explicação e a fonte antes de avançar.
4. Ao final, confira a pontuação e o ranking da sessão.
5. O ranking permanece durante a sessão da aba, inclusive ao recarregar; fechá-la encerra essa sessão (navegadores podem restaurá-la).

## Integrantes e divisão de tarefas

A implementação inicial foi registrada em commits de Ricardo. As tarefas abaixo ampliam a participação do grupo a partir desta etapa; cada integrante deve realizar e registrar sua própria contribuição.

| Integrante | GitHub informado | Trabalho registrado até agora | Próximas tarefas e entrega verificável |
| --- | --- | --- | --- |
| Ricardo Nelber Nascimento Junior | [Ricard0-o](https://github.com/Ricard0-o) | Requisitos, estrutura, interface, perguntas iniciais, lógica, testes e documentação conforme o [registro](docs/REGISTRO_DE_TRABALHO.md) e o histórico Git. | Integrar as contribuições, corrigir problemas apontados pelo grupo, validar a publicação e preparar o documento Word técnico previsto no projeto. |
| Daniel Ares Gontijo Pinto | [danielareses0806](https://github.com/danielareses0806) | Sem atividade concluída registrada. | Revisar clareza e precisão dos textos da introdução e explicações; atualizar `index.html` e/ou `perguntas.json` quando necessário; desenvolver sua parte do roteiro em `docs/GUIA_APRESENTACAO.md`. Entregar alterações ou apontamentos concretos. |
| Ricardo Oliveira da Silva | [ro213377-sys](https://github.com/ro213377-sys) | Sem atividade concluída registrada. | Testar o layout em celular, tablet e computador; corrigir no `css/estilos.css` problemas de largura, legibilidade e disposição; documentar dispositivos, larguras, resultados e correções em `docs/RELATORIO_TESTES.md`. |
| Clara Puerta Lopes da Purificação | [Phgomes05](https://github.com/Phgomes05)¹ | Sem atividade concluída registrada. | Testar navegação por teclado e leitor de tela, foco, nomes acessíveis e retorno das respostas; propor ou implementar ajustes em `index.html`, `css/estilos.css` e `js/scripts.js`; acrescentar checklist e resultados ao relatório de testes. |
| Pablo Henrique Silva Gomes | [Phgomes05](https://github.com/Phgomes05)¹ | Sem atividade concluída registrada. | Revisar as dez perguntas, alternativas, respostas, explicações e links em `perguntas.json`; corrigir inconsistências; testar fluxos de acerto, erro, reinício e ranking; registrar casos e resultados em `docs/RELATORIO_TESTES.md`. |

¹ Clara e Pablo usam o mesmo perfil GitHub, `Phgomes05`. Para distinguir a participação de cada um, registrar o responsável real por cada tarefa; o perfil compartilhado não identifica sozinho a autoria individual.

**Como registrar a participação:** cada integrante realiza a tarefa com sua própria conta, descreve a alteração no commit ou pull request e informa a data e o resultado para atualizar o [registro de trabalho](docs/REGISTRO_DE_TRABALHO.md). Uma tarefa planejada permanece pendente até haver trabalho realizado ou confirmação verificável.

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

## Entrega CP3

A versão final é identificada pela tag [`cp3-entrega`](https://github.com/Ricard0-o/TechQuiz-Grupo-05/tree/cp3-entrega). O site usa HTTPS: https://ricard0-o.github.io/TechQuiz-Grupo-05/.

- Cada acerto vale um ponto; erro vale zero. Não há penalidade nem cronômetro.
- A ordem das dez perguntas e das alternativas é fixa.
- Uma pergunta aceita uma resposta; a correta, a explicação e a fonte aparecem antes do avanço.
- O ranking guarda as dez melhores partidas na sessão da aba, em ordem de acertos. Em empate, a partida mais antiga aparece primeiro.
- Se o navegador impedir sessionStorage, o ranking fica apenas em memória e se perde ao recarregar.
- Os nomes são exibidos como texto, sem interpretar HTML.

O [plano e pedido refinado](docs/PLANO_CP3.md), o [relatório de validação do CP3](docs/RELATORIO_CP3.md) e o [roteiro da apresentação](docs/GUIA_APRESENTACAO.md) acompanham esta entrega. A apresentação presencial na Aula 13 e o envio final no Blackboard são realizados pelos alunos.

## Limites da validação

Validação funcional em Chrome no Windows, com larguras de viewport simuladas. Não foi realizado teste auditivo com leitor de tela nem teste em dispositivo físico. As marcações acessíveis, o foco por teclado e o contraste foram conferidos; isso não equivale a uma certificação completa WCAG.
