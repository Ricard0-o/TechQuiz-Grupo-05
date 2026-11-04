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


## CP3 — sequência de 5 a 7 minutos (proposta para o grupo)

1. **Objetivo e estrutura (1 min):** abrir o site HTTPS e explicar o tema; mostrar index.html, CSS, scripts.js e perguntas.json. Informar que não há backend.
2. **Demonstração (2 min):** iniciar com um nome, responder uma certa e uma errada, ler explicação e abrir a fonte; concluir a rodada para mostrar o resultado.
3. **Ranking (1 min):** mostrar sessionStorage, recarregar e comparar o placar. Explicar a duração por aba e o fallback em memória se o navegador bloquear storage.
4. **Acessibilidade e responsividade (1 min):** navegar com Tab e Enter, mostrar foco, rótulo e retorno textual; reduzir a tela e verificar ausência de rolagem horizontal.
5. **Decisões e fechamento (1 min):** mostrar tag cp3-entrega, relatar correção de contraste e fontes 404 e explicar por que dados e código ficam separados.

Antes da aula: abrir site e repositório na tag, testar internet e ensaiar. Distribuir as falas entre os integrantes com base no que cada um efetivamente fez; não apresentar tarefas planejadas como concluídas.

Perguntas adicionais: por que amarelo no botão? O coral com texto verde não atingia o contraste mínimo para texto pequeno. Por que validar o JSON? Para impedir uma partida incompleta ou com índice inválido. Por que um logo com alt vazio? O link já tem nome acessível; repetir o nome no ícone seria redundante.
