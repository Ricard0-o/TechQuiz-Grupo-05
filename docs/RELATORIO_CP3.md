# Relatório de validação — CP3

Data: 04/11/2026. Ambiente: Chrome no Windows, servidor HTTP local 127.0.0.1:8766. Base main cbf1933. Testes executados com auxílio de automação, sem atribuir ações a integrantes que não as realizaram.

## Problemas encontrados e correções

- Botão principal: texto #193b34 sobre coral #df6249 tinha contraste 3,48:1, insuficiente para texto comum. Fundo alterado para amarelo da marca; hover amarelo claro. Coral preservado em detalhes e títulos grandes.
- Nome com espaços passava pela validação nativa. Agora o nome aparado precisa de dois caracteres; nova entrada limpa a mensagem de erro.
- Início antes de carregar dados: botão desabilitado no HTML e habilitado após leitura e validação das perguntas.
- Validação das perguntas: ids únicos, campos textuais, quatro alternativas, índice de resposta e fonte HTTPS.
- Ranking: registros malformados são filtrados antes de renderizar e ordenar.
- Ajuda do campo associada por aria-describedby; progresso com nome acessível; destino do atalho de conteúdo focalizável.
- Duas fontes retornavam 404 (perguntas 4 e 8). Substituídas por páginas atuais da MDN, conferidas por HTTP e conteúdo.
- README tinha pendências do CP2 e trecho solto ++++Branch; removidos ao consolidar o CP3.

## Evidências de execução

| Caso | Resultado observado |
|---|---|
| Arquivo perguntas.json | Dez perguntas; fontes HTTPS |
| Nome com dois espaços | Mensagem de validação e permanência na tela inicial |
| Partida correta | Dez respostas certas, feedback e fonte em cada pergunta; 10 de 10 e 100% |
| Partida errada | Dez respostas erradas; 0 de 10; quatro alternativas desabilitadas após resposta |
| Jogar novamente | Retorna à pergunta 1 de 10 e zera pontuação |
| Trocar jogador | Retorna à tela inicial |
| Recarregar a aba | Ranking exibe 10/10 antes de 0/10 |
| Teclado | Partidas concluídas com Enter; Tab destaca alternativa com outline coral sólido de 3 px |
| 375, 768 e 1280 px | Início, pergunta e resultado sem largura de documento maior que a viewport |
| Imagens | Logo decorativo com alt vazio dentro de link com nome acessível TechQuiz — início |
| Console | Sem erros ou avisos nos fluxos normais observados |
| Sintaxe JS | node --check js/scripts.js passou |

Os testes locais usam nomes sintéticos. Não há servidor de ranking nem envio de dados de jogadores. As fontes são externas e podem mudar posteriormente.

## Limitações e etapa humana

Não executado teste auditivo com leitor de tela, nem dispositivo físico. Apresentação presencial da Aula 13 permanece a cargo do grupo. O roteiro é uma proposta de demonstração e não prova de participação individual. A tag e a publicação são conferidas na conclusão do trabalho.
