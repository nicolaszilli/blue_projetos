const prompt = require("prompt-sync")();
console.clear();

console.log(`Olá, bem vindo ao jogo Detetive, qual seu nome? `);
let nomeSuspeito = prompt("");
console.log("");
console.log(
  `${nomeSuspeito}, você foi considerado um dos suspeitos de um assassinato a tiros que ocorreu na sala de estar da mansão! `
);
console.log(
  'Respondas as questões com "sim" ou "não" e no final saberemos qual será o seu destino...'
);
console.log();

console.log("Você utilizou arma de fogo hoje?");
let perg1 = prompt("").toLowerCase();
console.log();
while (perg1 != "sim" && perg1 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Você utilizou arma de fogo hoje?");
  perg1 = prompt("").toLowerCase();
  console.log();
}

console.log("Você esteve na sala de jantar hoje?");
let perg2 = prompt("").toLowerCase();
console.log();
while (perg2 != "sim" && perg2 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Você esteve na sala de jantar hoje?");
  perg2 = prompt("").toLowerCase();
  console.log();
}

console.log("Você já matou alguém?");
let perg3 = prompt("").toLowerCase();
console.log();
while (perg3 != "sim" && perg3 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Você já matou alguém?");
  perg3 = prompt("").toLowerCase();
  console.log();
}

console.log("Você conhecia a pessoa que morreu? ");
let perg4 = prompt("").toLowerCase();
console.log();
while (perg4 != "sim" && perg4 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Você conhecia a pessoa que morreu? ");
  perg4 = prompt("").toLowerCase();
  console.log();
}

console.log("O revolver caliber 38 que foi utilizado no crime é seu?");
let perg5 = prompt("").toLowerCase();
console.log();
while (perg5 != "sim" && perg5 != "nao") {
  console.log('Favor responder com "sim" ou "nao": ');
  console.log("Esse revolver 38 que foi utilizado no crime é seu?");
  perg5 = prompt("").toLowerCase();
  console.log();
}

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

if (qtdSim >= 4) {
  console.log(
    "Todas as evidências apontam que você é o CULPADO, vire-se de costas, você tem o direito de permanecer calado, tudo o que disser poderá ser usado contra você no tribunal!"
  );
} else if (qtdSim == 3) {
  console.log(
    `${nomeSuspeito} Temos fortes indicios que você é o SUSPEITO pelo crime por isso está preso preventivamente até que se esclareça os fatos!!!`
  );
} else {
  console.log(
    `${nomeSuspeito}nada nas investigações apontam para você que foi considerado INOCENTE!!`
  );
}
console.log();
