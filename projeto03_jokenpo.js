const prompt = require("prompt-sync")();
console.clear();

const arrayEscolha = ["Pedra", "Papel", "Tesoura"];
let choiceComp;
let choiceUser;
let winsUser = 0;
let winsComp = 0;
let draws = 0;

let name = prompt("Bem vindo ao JO KEN PÔ Bubble Bee, digite seu nome: ");
let rounds = 0;
console.log(`Bem vindo ${name}, após anos de guerras intergálaticas, finalmente Optimus Prime, Bubble Bee e os Autobots derrotaram os Decepticons 
e seu líder Megatron. Agora Bubble Bee ficou meio ocioso, enquanto nenhuma força do mal tenta dominar o universo, que tal desafiá-lo no Jo Ken Pô?`)

while (true) {
  rounds = +prompt(`Humano... Digite o número de rodadas que você quer jogar: `);
  while (isNaN(rounds)) {
    rounds = +prompt("Bee Bee... Digite o número de rodadas humano: ");
  }
  draws = 0;
  winsComp = 0;
  winsUser = 0;
  for (i = 0; i < rounds; i++) {
    choiceUser = +prompt(
      "Digite 0 para Pedra, 1 para Papel e 2 para Tesoura: "
    );
    choiceComp = Math.floor(Math.random() * 3);
    while (choiceUser !== 0 && choiceUser !== 1 && choiceUser !== 2) {
      choiceUser = +prompt(
        "Digite o número 0 para Pedra, 1 para papel ou 2 para tesoura: "
      );
    }
    if (choiceUser == 0 && choiceComp == 0) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(`Empatou, pedra com pedra só sai faísca!`);
      draws++;
      console.log();
    } else if (choiceUser == 0 && choiceComp == 1) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(`Bubble Bee venceu, o papel embrulhou a sua pedra!!!`);
      winsComp++;
      console.log();
    } else if (choiceUser == 0 && choiceComp == 2) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(`Você venceu, sua pedra estragou a tesoura dele!!!`);
      winsUser++;
      console.log();
    } else if (choiceUser == 1 && choiceComp == 0) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(`Você venceu! Teu papel embrulhou a pedra e você acertou a cabeça do Bubble Bee... O.o !`);
      winsUser++;
      console.log();
    } else if (choiceUser == 1 && choiceComp == 1) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(`Empatou, papel com papel dá pra fazer uma pipa!`);
      draws++;
      console.log();
    } else if (choiceUser == 1 && choiceComp == 2) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(
        `Você perdeu, a tesoura do Bubble Bee dilacerou seu papel, que papelão hein!`
      );
      winsComp++;
      console.log();
    } else if (choiceUser == 2 && choiceComp == 0) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(
        `Bubble Bee te humilhou nessa, onde já se viu tentar cortar pedra com tesoura! Lamentável...`
      );
      winsComp++;
      console.log();
    } else if (choiceUser == 2 && choiceComp == 1) {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(
        `Você venceu, finalmente se ligou que tesoura é pra cortar papel!!!`
      );
      winsUser++;
      console.log();
    } else {
      console.log(
        `${name} escolheu ${arrayEscolha[choiceUser]} e o Bubble Bee escolheu ${arrayEscolha[choiceComp]}`
      );
      console.log(
        `Empatou, essa rodada quem levou foi o Edward Mãos de tesoura!!!`
      );
      draws++;
      console.log();
    }
  }
  console.log();
  console.log("Calculando resultados...");
  console.log();
  if (winsUser > winsComp) {
    console.log(
      `Hoje o Bubble Bee estava mais para um fusquinha...Parabéns você ganhou pelo placar de ${winsUser} x ${winsComp} `
    );
  } else if (winsComp > winsUser) {
    console.log(
      `Deu ruim... Bubble Bee estava virado num Camaro e te atropelou por ${winsComp}x${winsUser}`
    );
  } else {
    console.log(`Bubble Bee estava com pena de você e empatou por ${winsUser}x${winsComp} `);
  }
  console.log();
  exit = prompt("Deseja jogar novamente? s / n ").toLowerCase();
  if ((exit == "n")) {
    console.log("Encerrando jogo...");
    break;
  } 
}
