const prompt = require("prompt-sync")();
console.clear();

const jogoVelha = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let vitoria = false;
let vencedor;
let jogada = "X";
let rounds = 0;
let winsX = 0;
let winsO = 0;

while (true) {
  rounds = +prompt(`Digite o número de rodadas que você quer jogar: `);

  for (i = 0; i < rounds; i++) {
    while (!vitoria) {
      console.log(`É a vez do jogador ${jogada}`);

      const linhaDesejada = +prompt(`Digite a linha: `);
      if (linhaDesejada < 0 || linhaDesejada > 2) {
        console.log("Favor escolher entre a linha 0, 1 ou 2: ");
        continue;
      }
      const colunaDesejada = +prompt(`Digite a coluna: `);
      if (colunaDesejada < 0 || colunaDesejada > 2) {
        console.log("Favor escolher entre a coluna 0, 1 ou 2: ");
        continue;
      }

      if (jogoVelha[linhaDesejada][colunaDesejada]) {
        console.log("Essa casa está ocupada, digite outra coordenada: ");

        continue;
      }

      jogoVelha[linhaDesejada][colunaDesejada] = jogada;

      if (jogada === "X") {
        jogada = "O";
      } else {
        jogada = "X";
      }

      let coordenadasVazias = 0;

      for (let linhaAtual = 0; linhaAtual < jogoVelha.length; linhaAtual++) {
        const linha = jogoVelha[linhaAtual];

        for (let coluna = 0; coluna < linha.length; coluna++) {
          const jogadaAtual = linha[coluna];

          if (!jogadaAtual) {
            coordenadasVazias++;
          }
        }
      }
      if (coordenadasVazias === 0) {
        break;
      }

      const condicoesVitoria = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      for (const condicaoVitoria of condicoesVitoria) {
        let quantidadeValoresIguais = 0;
        let ultimoValor;

        for (const coordenada of condicaoVitoria) {
          const linha = parseInt(coordenada / 3);
          const coluna = coordenada % 3;

          const jogada = jogoVelha[linha][coluna];

          if (jogada && (!ultimoValor || jogada === ultimoValor)) {
            quantidadeValoresIguais++;
          }

          ultimoValor = jogada;
        }

        if (quantidadeValoresIguais === 3) {
          vitoria = true;
          vencedor = ultimoValor;
          break;
        }
      }

      console.log(jogoVelha);
    }
  }
  if (vitoria) {
    console.log(`O jogador ${vencedor} venceu a partida!`);
  } else {
    console.log(`A partida terminou em empate!`);
    console.log(winsO);
  }

  console.log();

  exit = prompt("Deseja jogar novamente? s / n ").toLowerCase();

  if (exit == "n") {
    console.log("Encerrando jogo...");
    break;
  }
}
