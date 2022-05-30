const prompt = require("prompt-sync")();
console.clear();

console.log(
  `Bem vindo herói, você está prestes a iniciar a maior aventura em busca do tesouro do pirata Zulmiro, qual é seu nome ? `
);
let nomeHeroi = prompt("");
console.log(`De que cidade você vem? `);
let cidadeHeroi = prompt("");
console.log("");
console.log(
  `${nomeHeroi}, o pirata zulmiro deixou um tesouro escondido na cidade de ${cidadeHeroi}, procure todas as pistas e elas poderão te levar ao maior tesouro pirata de todos os tempos! `
);
console.log(
  `Respondas as questões com "sim" ou "não" e no final saberemos se você falhou ou é o novo milionário de ${cidadeHeroi}!!!`
);
console.log();

console.log(
  `Na igreja matriz de ${cidadeHeroi}, encontra-se encondido nas catapumbas um crucifixo mágico, vá até lá e o encontre-o, cuidado com o padre ele não pode te ver. Ele dorme com um pouco de vinho... `
);
console.log(`Você ofereceu uma taça de vinho a padre e pegou o crucifixo? `);
let perg1 = prompt("").toLowerCase();
console.log();
while (perg1 != "sim" && perg1 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Você ofereceu uma taça de vinho a padre e pegou o crucifixo?");
  perg1 = prompt("").toLowerCase();
  console.log();
}

console.log(
  `A próxima pista nos remete a estação ferroviária de ${cidadeHeroi}, corra e pegue o trem das onze, o máquinista adora donuts, roube o apito dele... Esse trem pode te levar para a próxima pista...`
);
console.log(
  "O maquinista está com fome, você pegou o trem das onze e roubou o apito do maquinista? Espero que tenha deixado um donuts... "
);
let perg2 = prompt("").toLowerCase();
console.log();
while (perg2 != "sim" && perg2 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("O tempo é nosso inimigo, pegou o trem certo e roubou o apito?");
  perg2 = prompt("").toLowerCase();
  console.log();
}

console.log(
  `O trem te deixou na estação Everest, suba o monte, encontre o pé grande e pegue um fio do bigode dele, mas tome cuidado... O pé grande fica calminho quando come doce de amendoim... Pegue o oxigênio e partiu cume!!!`
);
console.log(
  "Achou o pé grande e deu pra ele uma paçoça para acalmá-lo e conseguiu pegar um fio de bigode? "
);
let perg3 = prompt("").toLowerCase();
console.log();
while (perg3 != "sim" && perg3 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log(
    "Achou o pé grande e deu pra ele uma paçoça para acalmá-lo e pegou um fio de bigode??"
  );
  perg3 = prompt("").toLowerCase();
  console.log();
}

console.log(
  `Faltou paçoca e o pé grande te jogou numa avalanche lá pra baixo mas o caminho esta correto... Você chegou ao condado, a terra dos pequeninos, procure por Bilbo, o bolseiro, pegue um certo anel que está com ele e siga adiante...`
);
console.log("Encontrou Bilbo, o bolseiro, e pegou o anel? Não use ele!!!  ");
let perg4 = prompt("").toLowerCase();
console.log();
while (perg4 != "sim" && perg4 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Encontrou Bilbo, o bolseiro, e pegou o anel? ");
  perg4 = prompt("").toLowerCase();
  console.log();
}

console.log(
  "Você entrou na floresta negra, siga adiante sem olhar para trás, olhe para frente que é onde o futuro está... Quando ver o primeiro raio de luz você chegará a casa do mago Merlin, ele é amigável!!!"
);
console.log(
  `Pegue com o Mago Merlin um pedaço da pedra de onde foi retirada a espada excalibur e tome uma poção da força de Asterix para seguir adiante...`
);
console.log(`Pegou a pedra e bebeu a poção mágica? `);
let perg5 = prompt("").toLowerCase();
console.log();
while (perg5 != "sim" && perg5 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log(
    "O tempo está contra o seu favor, pegou a pedra e tomou a poção?"
  );
  perg5 = prompt("").toLowerCase();
  console.log();
}
console.log("");
console.log(
  "Vá até o monte das oliveiras e procure pela árvore que toca o céu, jogue tudo que você conseguiu de objetos na fenda no caule da oliveira, se você for digno do tesouro ela abrirá a entrada da caverna onde está o tesouro do pirata Zulmiro!!"
);
console.log();

let qtdSim = 0;
if (perg1 === "sim") {
  qtdSim += 1;
}
if (perg2 === "sim") {
  qtdSim += 1;
}
if (perg3 === "sim") {
  qtdSim += 1;
}
if (perg4 === "sim") {
  qtdSim += 1;
}
if (perg5 === "sim") {
  qtdSim += 1;
}

if (qtdSim == 5) {
  console.log(
    `Nobre ${nomeHeroi}, você venceu todos os obstáculos e se provou digno de todo o tesouro do pirata Zulmiro, aproveite!"`
  );
} else if (qtdSim == 4) {
  console.log(
    `Apesar de ter falhado em uma das etapas, nobre ${nomeHeroi} se tornou digno do tesouro pelos seus atos heroicos, mas aproveite você tem 24 horas para retirar o que conseguir e o portal se fechará!`
  );
} else if (qtdSim == 3) {
  console.log(
    `${nomeHeroi} apesar de tudo que passou e ter conseguido 3 objetos, você infelizmente náo é digno do tesouro, quem sabe numa próxima vez...`
  );
} else if (qtdSim >= 1) {
  console.log(
    `${nomeHeroi}, você até que tentou, mas não se provou capaz, FUJA imediatamente antes que você seja engolido pelas oliveiras!!!`
  );
} else {
  console.log(
    `${nomeHeroi}, seu tempo acabou, você consegiui falhar em todas as etapas e será transformado em uma árvore!!! Adeus...`
  );
}
console.log();
console.log("GAME OVER!");
