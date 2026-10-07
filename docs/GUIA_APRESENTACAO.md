# Guia rápido para apresentação

## Resumo em 30 segundos

O TechQuiz é uma página única que testa fundamentos de front-end. O HTML separa as telas de início, perguntas e resultado; o CSS cuida do visual, dos estados e da responsividade; o JavaScript carrega as perguntas do JSON, controla o jogo e salva o ranking apenas durante a sessão da aba.

## Fluxo para demonstrar

1. Informar o nome do jogador.
2. Responder uma pergunta e mostrar que a alternativa correta recebe texto, símbolo e cor.
3. Abrir o link da fonte da explicação.
4. Concluir o quiz e mostrar pontuação e ranking.
5. Jogar novamente e explicar que o ranking usa `sessionStorage`.
6. Reduzir a janela e mostrar a mudança de duas colunas para uma.
7. Pressionar `Tab` para demonstrar o foco visível.

## Perguntas que podem ser feitas

**Por que não abrir o arquivo diretamente?** Porque o navegador pode bloquear o `fetch` de um arquivo local; um servidor HTTP evita esse problema.

**Onde ficam as respostas corretas?** No campo `correta` de cada objeto em `perguntas.json`, usando o índice da alternativa.

**Como o ranking funciona?** Ao terminar, o resultado entra em uma lista, é ordenado pela pontuação e salvo no `sessionStorage`.

**Como a página é responsiva?** A grade usa duas colunas em telas amplas e media queries mudam para uma coluna em larguras menores.

**Como a acessibilidade foi considerada?** Foram usados elementos semânticos, botões nativos, foco visível, região `aria-live`, bom contraste e retorno que não depende apenas da cor.
