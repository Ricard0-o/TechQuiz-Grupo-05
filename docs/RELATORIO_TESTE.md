# Relatório de teste de responsividade e funcionalidade

Data da validação: 20/10/2026

## Resumo executivo

O projeto TechQuiz foi testado em diferentes larguras de tela e em fluxo funcional completo. A aplicação mantém a usabilidade no desktop e ajusta corretamente a apresentação para dispositivos móveis, sem quebras visuais nem rolagem horizontal.

## Checklist de validação

| Verificação | Resultado |
| --- | --- |
| Carregamento do arquivo `perguntas.json` em HTTP | Aprovado |
| Quantidade de perguntas | 10 perguntas válidas |
| Fluxo completo com respostas corretas | Placar 10/10 exibido |
| Retorno após cada resposta | Texto, símbolo, estilo e explicação exibidos |
| Ranking em `sessionStorage` | Resultado armazenado e exibido corretamente |
| Jogar novamente e trocar jogador | Controles funcionais |
| Navegação por teclado | Foco visível e acessível |
| Largura de 1280 px | Layout em duas colunas, sem rolagem horizontal |
| Largura de 720 px | Layout em uma coluna, sem rolagem horizontal |
| Largura de 480 px | Layout responsivo e botões empilhados |
| Largura de 360 px | Layout estável sem quebra de estrutura |
| Console do navegador | Sem erros ou avisos |
| Sintaxe JavaScript e leitura do JSON | Aprovadas |

## Observações de responsividade

- A partir de 720 px, o painel principal passa a uma coluna para melhorar a leitura em telas menores.
- Em larguras abaixo de 480 px, os elementos do formulário e botões passam a ocupar toda a largura disponível, mantendo o toque confortável.
- O ranking e os blocos de feedback ajustam altura e espaçamento para evitar overflow excessivo.
- A navegação por teclado continua funcionando com foco visível e sem ocultar qualquer elemento importante.

## Conclusão

A aplicação atende ao objetivo de quiz acessível, funcional e responsivo, com comportamento consistente em desktop e celulares. O projeto está pronto para uso e validação em ambiente de execução HTTP.