# Guia rápido para apresentação

## Resumo em 30 segundos

O TechQuiz é uma página única que testa fundamentos de front-end. O HTML separa as telas de início, perguntas e resultado; o CSS cuida do visual, dos estados e da responsividade; o JavaScript carrega as perguntas do JSON, controla o jogo e salva o ranking apenas durante a sessão da aba.

## Fluxo para demonstrar

1. Informar o nome do jogador na tela inicial.
2. Responder a uma pergunta e destacar como a alternativa correta recebe simultaneamente o texto descritivo, o símbolo gráfico e a cor de validação.
3. Abrir o link integrado da fonte para exibir a explicação detalhada do conceito abordado.
4. Concluir o quiz para apresentar o painel de pontuação final e a tabela do ranking.
5. Jogar novamente e esclarecer que a persistência do ranking utiliza o sessionStorage da sessão atual da aba.
6. Reduzir a largura da janela do navegador para demonstrar a transição responsiva do layout de duas colunas para coluna única.
7. Pressionar a tecla Tab para evidenciar a gestão correta do foco visível em termos de acessibilidade.

## Perguntas que podem ser feitas

1. Por que não abrir o arquivo diretamente? Porque abrir o arquivo via protocolo file:// pode fazer com que o navegador bloqueie requisições fetch de arquivos locais por questões de segurança (CORS); o uso de um servidor HTTP local resolve esse problema.

2. Onde ficam as respostas corretas? No campo correta de cada objeto dentro do arquivo perguntas.json, referenciando o índice numérico da alternativa correspondente.

3. Como o ranking funciona? Ao concluir o quiz, a pontuação do jogador é inserida em um array, ordenada de forma decrescente e persistida no sessionStorage para durar apenas durante a sessão ativa da aba.

4. Como a página é responsiva? A estrutura utiliza layouts flexíveis e de grade (Grid) que se adaptam para duas colunas em telas amplas, recorrendo a media queries para reorganizar o conteúdo em coluna única em telas menores.

5. Como a acessibilidade foi considerada? O projeto emprega elementos HTML semânticos, botões nativos, estilos claros de foco visível (Tab), região aria-live para leitores de tela, além de garantir bom contraste de cores e feedbacks visuais que não dependem exclusivamente da cor (como textos e ícones).
