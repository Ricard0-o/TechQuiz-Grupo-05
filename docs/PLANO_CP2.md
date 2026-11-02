# Plano de execução — TechQuiz CP2

## Objetivo

Preparar o segundo checkpoint do TechQuiz, preservando a implementação existente e comprovando os requisitos funcionais, de acessibilidade, publicação e versionamento indicados na atividade **Entrega CP2**.

## Diagnóstico inicial

O projeto já contém o fluxo principal do quiz: perguntas carregadas de `perguntas.json`, identificação do jogador, uma pergunta por vez, verificação de resposta, explicação com fonte, pontuação, ranking em `sessionStorage` e opção de jogar novamente. Também já há foco visível, retorno textual além das cores e layout responsivo.

Esta atualização torna o ranking mais resistente quando o navegador bloqueia o armazenamento da sessão. Nesse caso, o resultado continua disponível em memória até o fim da página. No uso normal, o ranking continua sendo salvo em `sessionStorage`.

## Passo a passo de execução

1. **Confirmar o ponto de partida**
   - Trabalhar no repositório `TechQuiz-Grupo-05` e conferir a branch atual.
   - Revisar a lista de requisitos da atividade e manter o histórico existente.
   - Confirmar com o grupo nomes, responsabilidades e participação antes de registrar atribuições.

2. **Revisar os dados**
   - Conferir se `perguntas.json` contém ao menos 10 perguntas válidas.
   - Para cada pergunta, conferir enunciado, alternativas, índice da resposta correta, explicação e fonte consultável.

3. **Percorrer o fluxo do jogo**
   - Iniciar com um nome válido.
   - Responder uma pergunta e verificar retorno textual, pontuação, explicação e fonte.
   - Confirmar que apenas uma resposta é aceita por pergunta e avançar até o resultado.
   - Conferir placar, ranking da sessão, opção de jogar novamente e troca de jogador.

4. **Revisar acessibilidade e telas**
   - Percorrer tudo com teclado e conferir o foco visível.
   - Confirmar que acerto, erro e seleção são comunicados por texto, sem depender só de cor.
   - Verificar a leitura do retorno por tecnologia assistiva e ausência de rolagem horizontal em telas estreitas.

5. **Validar em servidor HTTP**
   - Executar o projeto por um servidor local, pois o navegador pode bloquear `fetch` em `file://`.
   - Repetir o fluxo do quiz e verificar o console do navegador.
   - Fazer a validação final também em janela anônima, conforme a atividade.

6. **Preparar os entregáveis**
   - Atualizar o README com instruções e links reais, após conferi-los.
   - Conferir o repositório GitHub e a publicação por HTTPS.
   - Criar e publicar a tag `cp2-entrega` somente depois de validar a versão final.
   - Entregar na atividade os dois links exigidos: repositório com a tag e site publicado.

## Situação observada

| Item do CP2 | Situação no projeto encontrado |
| --- | --- |
| Perguntas carregadas de JSON | Implementado em `js/scripts.js` |
| Nome solicitado antes da partida | Implementado em `index.html` e `js/scripts.js` |
| Uma pergunta por vez | Implementado |
| Pontuação final | Implementada |
| Ranking em `sessionStorage` | Implementado; fallback em memória adicionado nesta atualização |
| Jogar novamente | Implementado |
| Explicação e link da fonte | Implementados |
| Teclado, foco e contraste | Há suporte no HTML/CSS existente; conferir no percurso final |
| Sem depender apenas de cor | O retorno inclui texto e símbolos |
| Sem rolagem horizontal em mobile | Há regras responsivas; conferir no percurso final |
| Tag `cp2-entrega` | Ainda não confirmada/criada |
| Site publicado com HTTPS | O README registra uma URL; precisa ser conferida antes da entrega |

## Critério de conclusão

O CP2 fica pronto para entrega quando o fluxo completo e os pontos de acessibilidade forem conferidos, a URL HTTPS responder, a tag `cp2-entrega` apontar para a versão validada e ambos os links estiverem prontos para serem informados no Blackboard. O envio da atividade permanece sob controle do estudante.
