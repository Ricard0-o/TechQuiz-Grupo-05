# Prompt profissional — atualização do TechQuiz para o CP2

Atue como desenvolvedor front-end sênior e revisor de acessibilidade. Analise o repositório existente do **TechQuiz — Grupo 05** e atualize-o para atender à atividade **Entrega CP2** do curso Desenvolvimento Front-End Para Web.

## Contexto e objetivo

O projeto é um quiz sobre fundamentos de desenvolvimento front-end. O CP2 pede a lógica completa do jogo, com carregamento de perguntas, fluxo de partida, pontuação, ranking da sessão, explicação das respostas e opção de jogar novamente. Preserve o que já funciona, prefira alterações pequenas e coerentes com a estrutura atual e não reescreva o projeto sem necessidade.

## Requisitos obrigatórios

1. Carregar perguntas de `perguntas.json` com JavaScript.
2. Solicitar o nome do jogador antes de iniciar.
3. Exibir uma pergunta por vez, com uma única resposta correta.
4. Informar acerto ou erro e apresentar a pontuação final.
5. Armazenar e exibir o ranking durante a sessão usando `sessionStorage`.
6. Permitir iniciar outra partida.
7. Mostrar a explicação de cada resposta com link para a fonte.
8. Oferecer navegação por teclado, foco visível e contraste legível.
9. Comunicar acerto, erro e seleção com texto, sem usar cor como único indicador.
10. Evitar rolagem horizontal em dispositivos móveis.
11. Preparar o repositório para a tag `cp2-entrega` e a publicação HTTPS, sem declarar esses itens concluídos antes de confirmá-los.

## Forma de trabalho

- Primeiro inspecione os arquivos, o histórico Git, o README e a versão já existente.
- Compare o estado atual com cada requisito e implemente somente lacunas reais.
- Mantenha HTML semântico, CSS externo, JavaScript nativo e dados JSON.
- Preserve a identidade do placar de rodada do TechQuiz: papel claro, tinta verde escura, coral e amarelo, linguagem próxima e elementos gráficos ligados a perguntas e pontuação. Evite gradientes decorativos, cartões repetidos, brilhos e textos genéricos de template.
- Trate erros de carregamento e indisponibilidade de `sessionStorage` sem deixar a interface travada.
- Não invente participação, nomes, links, testes ou resultados. Registre como pendente aquilo que depender de conferência humana, acesso externo ou validação ainda não feita.
- Explique as mudanças em português claro e indique os arquivos alterados.

## Verificação final

Quando autorizado a validar, abra o projeto por HTTP e percorra: início com nome válido, respostas corretas e incorretas, explicação e fonte, pontuação, ranking, nova partida e troca de jogador. Repita em janela anônima. Revise teclado, foco, contraste, leitores de tela quando disponível e larguras mobile; confira o console e a disponibilidade do site HTTPS.

## Limites da entrega

Não envie a atividade no Blackboard. Antes de criar ou publicar a tag `cp2-entrega`, confirme que o código foi validado e que a tag não existe. Não faça push, publicação ou alteração no Blackboard sem autorização específica. Ao final, apresente os links reais do repositório e do site somente depois de verificar que estão acessíveis.
