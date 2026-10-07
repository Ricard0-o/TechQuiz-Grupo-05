"use strict";

const CHAVE_RANKING = "techquiz-ranking";

const estado = {
  perguntas: [],
  nome: "",
  indice: 0,
  acertos: 0,
  respondeu: false
};

const elementos = {
  telaInicial: document.querySelector("#tela-inicial"),
  telaQuiz: document.querySelector("#tela-quiz"),
  telaResultado: document.querySelector("#tela-resultado"),
  formInicio: document.querySelector("#form-inicio"),
  nomeJogador: document.querySelector("#nome-jogador"),
  erroCarregamento: document.querySelector("#erro-carregamento"),
  progressoTexto: document.querySelector("#progresso-texto"),
  pontuacaoAtual: document.querySelector("#pontuacao-atual"),
  barraProgresso: document.querySelector("#barra-progresso"),
  categoriaPergunta: document.querySelector("#categoria-pergunta"),
  perguntaTitulo: document.querySelector("#pergunta-titulo"),
  alternativas: document.querySelector("#alternativas"),
  feedback: document.querySelector("#feedback"),
  feedbackTitulo: document.querySelector("#feedback-titulo"),
  feedbackExplicacao: document.querySelector("#feedback-explicacao"),
  feedbackFonte: document.querySelector("#feedback-fonte"),
  botaoProxima: document.querySelector("#botao-proxima"),
  tituloResultado: document.querySelector("#titulo-resultado"),
  mensagemResultado: document.querySelector("#mensagem-resultado"),
  resumoResultado: document.querySelector("#resumo-resultado"),
  jogarNovamente: document.querySelector("#jogar-novamente"),
  trocarJogador: document.querySelector("#trocar-jogador"),
  rankingInicial: document.querySelector("#ranking-inicial"),
  rankingFinal: document.querySelector("#ranking-final")
};

async function carregarPerguntas() {
  try {
    const resposta = await fetch("perguntas.json");

    if (!resposta.ok) {
      throw new Error(`Falha HTTP: ${resposta.status}`);
    }

    const perguntas = await resposta.json();

    if (!Array.isArray(perguntas) || perguntas.length < 10) {
      throw new Error("O arquivo precisa conter pelo menos 10 perguntas.");
    }

    estado.perguntas = perguntas;
  } catch (erro) {
    elementos.erroCarregamento.textContent = "Não foi possível carregar as perguntas. Abra o projeto por um servidor local e tente novamente.";
    elementos.erroCarregamento.hidden = false;
    elementos.formInicio.querySelector("button").disabled = true;
    console.error(erro);
  }
}

function mostrarTela(telaAtiva) {
  [elementos.telaInicial, elementos.telaQuiz, elementos.telaResultado].forEach((tela) => {
    tela.hidden = tela !== telaAtiva;
  });
}

function iniciarQuiz(nome) {
  estado.nome = nome.trim();
  estado.indice = 0;
  estado.acertos = 0;
  estado.respondeu = false;

  mostrarTela(elementos.telaQuiz);
  mostrarPergunta();
}

function mostrarPergunta() {
  const pergunta = estado.perguntas[estado.indice];

  estado.respondeu = false;
  elementos.progressoTexto.textContent = `Pergunta ${estado.indice + 1} de ${estado.perguntas.length}`;
  elementos.pontuacaoAtual.textContent = `Acertos: ${estado.acertos}`;
  elementos.barraProgresso.value = estado.indice + 1;
  elementos.barraProgresso.max = estado.perguntas.length;
  elementos.categoriaPergunta.textContent = pergunta.categoria;
  elementos.perguntaTitulo.textContent = pergunta.pergunta;
  elementos.alternativas.replaceChildren();
  elementos.feedback.hidden = true;
  elementos.botaoProxima.hidden = true;

  pergunta.alternativas.forEach((texto, indice) => {
    const botao = document.createElement("button");
    botao.type = "button";
    botao.className = "alternativa";
    botao.textContent = `${String.fromCharCode(65 + indice)}. ${texto}`;
    botao.addEventListener("click", () => selecionarResposta(indice));
    elementos.alternativas.append(botao);
  });

  elementos.perguntaTitulo.focus();
}

function selecionarResposta(indiceSelecionado) {
  if (estado.respondeu) {
    return;
  }

  estado.respondeu = true;
  const pergunta = estado.perguntas[estado.indice];
  const acertou = indiceSelecionado === pergunta.correta;
  const botoes = elementos.alternativas.querySelectorAll("button");

  if (acertou) {
    estado.acertos += 1;
  }

  botoes.forEach((botao, indice) => {
    botao.disabled = true;

    if (indice === pergunta.correta) {
      botao.classList.add("correta");
      botao.textContent = `✓ Correta — ${botao.textContent}`;
    } else if (indice === indiceSelecionado) {
      botao.classList.add("incorreta");
      botao.textContent = `✗ Sua resposta — ${botao.textContent}`;
    }
  });

  elementos.feedbackTitulo.textContent = acertou ? "✓ Resposta correta!" : "✗ Resposta incorreta.";
  elementos.feedbackExplicacao.textContent = pergunta.explicacao;
  elementos.feedbackFonte.href = pergunta.fonte;
  elementos.feedback.hidden = false;
  elementos.botaoProxima.textContent = estado.indice === estado.perguntas.length - 1 ? "Ver resultado" : "Próxima pergunta";
  elementos.botaoProxima.hidden = false;
  elementos.pontuacaoAtual.textContent = `Acertos: ${estado.acertos}`;
  elementos.feedback.focus?.();
  elementos.botaoProxima.focus();
}

function avancarQuiz() {
  if (!estado.respondeu) {
    return;
  }

  if (estado.indice < estado.perguntas.length - 1) {
    estado.indice += 1;
    mostrarPergunta();
  } else {
    encerrarQuiz();
  }
}

function encerrarQuiz() {
  const total = estado.perguntas.length;
  const percentual = Math.round((estado.acertos / total) * 100);

  salvarRanking({
    nome: estado.nome,
    acertos: estado.acertos,
    total,
    registradoEm: new Date().toISOString()
  });

  elementos.mensagemResultado.textContent = `${estado.acertos} de ${total}`;
  elementos.resumoResultado.textContent = `${estado.nome}, você acertou ${percentual}% das perguntas.`;
  renderizarRanking();
  mostrarTela(elementos.telaResultado);
  elementos.tituloResultado.focus();
}

function obterRanking() {
  try {
    return JSON.parse(sessionStorage.getItem(CHAVE_RANKING)) ?? [];
  } catch {
    return [];
  }
}

function salvarRanking(resultado) {
  const ranking = obterRanking();
  ranking.push(resultado);
  ranking.sort((a, b) => b.acertos - a.acertos || a.registradoEm.localeCompare(b.registradoEm));
  sessionStorage.setItem(CHAVE_RANKING, JSON.stringify(ranking.slice(0, 10)));
}

function preencherListaRanking(lista, ranking) {
  lista.replaceChildren();

  if (ranking.length === 0) {
    const item = document.createElement("li");
    item.textContent = "Nenhuma partida concluída ainda.";
    lista.append(item);
    return;
  }

  ranking.forEach((resultado) => {
    const item = document.createElement("li");
    item.textContent = `${resultado.nome}: ${resultado.acertos}/${resultado.total}`;
    lista.append(item);
  });
}

function renderizarRanking() {
  const ranking = obterRanking();
  preencherListaRanking(elementos.rankingInicial, ranking);
  preencherListaRanking(elementos.rankingFinal, ranking);
}

elementos.formInicio.addEventListener("submit", (evento) => {
  evento.preventDefault();

  if (elementos.formInicio.reportValidity() && estado.perguntas.length >= 10) {
    iniciarQuiz(elementos.nomeJogador.value);
  }
});

elementos.botaoProxima.addEventListener("click", avancarQuiz);

elementos.jogarNovamente.addEventListener("click", () => {
  iniciarQuiz(estado.nome);
});

elementos.trocarJogador.addEventListener("click", () => {
  elementos.formInicio.reset();
  renderizarRanking();
  mostrarTela(elementos.telaInicial);
  elementos.nomeJogador.focus();
});

renderizarRanking();
carregarPerguntas();
