console.clear();
var prompt = require("prompt-sync")();
var positivo = 0;

console.log("Bem vindo a WestWorld, eu sou Avenue, sua assitente digital,  antes de entrarmos no parque vamos criar juntos sua senha de segurança: ");
console.log();
let nome = prompt("Primeiro, me fala seu nome: ");
console.log();
let senha = prompt(nome + " que nome lindo, bom agora vamos criar sua senha de hóspede, ela deve ter mais de 3 caracteres, pode começar: ");
while (senha.length < 3) {
  console.log();
  console.log("Erro 04");
  console.log();
  console.log("Sua senha deve ter mais de três caracteres");
  console.log();
  senha = prompt("Digite sua senha de hóspede: ");
}
console.clear();
console.log("Pronto para entar");
console.log()
let LoginSenha = prompt("Digite sua senha novamente: ");
while (LoginSenha != senha) {
  console.log();
  console.log("Acessando...");
  console.log();
  console.log("Erro 05");
  console.log();
  console.log("Você errou sua senha!");
  console.log();
  let erro = +prompt("Começe de novo!");
  LoginSenha = prompt("Digite sua senha de hóspede: ");
}
console.log();
console.log("Entramos!");


console.log()
let enter1 = prompt("Pressione ENTER...");
console.clear("");

console.log("........................................");
console.log()
console.log("Bem-vindo ao WestWorld, nesse parque você pode ser quem você quiser, como era sua primeira vez você quis se aventurar ao máximo não é?.")

console.log()
console.log("Porém no meio de sua estadia nossos anfitriões começaram a ter falhas em sua programação e de forma misteriosa evoluíram e agora tem consciência.")

console.log()
console.log("Dependendo de suas atitudes você sairá ileso do parque ou sofrerá a ira dos anfitriões.")

console.log()
console.log("Responda as próximas questões com Sim ou Não e saberemos o seu destino. Está pronto?");

console.log()
let enter2 = prompt("Pressione ENTER...");
console.clear();

console.log();
console.log("Sua locomotiva parou na estação, ao desembarcar você lembrou de verificar seus equipamentos? Nesse parque é vital sempre ter algumas balas no coldre!");
console.log();
let quest01 = prompt("E aí, você lembrou?");
if(quest01.toLowerCase() == "sim" ||
  quest01.toLowerCase() == "s" ||
  quest01.toLowerCase() == "ss") 
  {
  console.clear();
  console.log("É isso aí, bem-preparado, vamos lá!");
  positivo = positivo + 1;
} else {
  console.clear();
  console.log("Isso com toda certeza foi um erro!");
}

console.log()
let enter3 = prompt("Pressione ENTER...");
console.clear();

console.log("Ao chegar em WestWorld você encontrou com Dolores, a anfitrião mais gentil do parque!")
console.log();
let quest02 = prompt("Você fez amizade com ela? ");
if (
  quest02.toLowerCase() == "sim" ||
  quest02.toLowerCase() == "s" ||
  quest02.toLowerCase() == "ss"
) {
  console.clear();
  console.log("Que bom para você, além de gentil ela é mortal, é bom ser querido por ela!");
  positivo = positivo + 1;
} else {
  console.clear();
  console.log("Cuidado amigo, muito cuidado, além de gentil ela é mortal, seria bom ser amigo dela!");
}

console.log()
let enter4 = prompt("Pressione ENTER...");
console.clear();

console.log("Ao chegar no Grande Salão você notou que estava tendo um assalto, um dos criminosos te pediu ajuda, legal né? Ou não?")
console.log();
let quest03 = prompt("Você aceitou o convite do criminoso? ");
if (
  quest03.toLowerCase() == "não" ||
  quest03.toLowerCase() == "n" ||
  quest03.toLowerCase() == "nn"
) {
  console.clear();
  console.log("Honesto como Tio Monroe, que Deus o tenha, aposto que você brincou de xerife né!");
  positivo = positivo + 1;
} else {
  console.clear();
  console.log("Você se divertiu bastante sendo um fora da lei né, mas isso pode ter consequências sérias!");
}

console.log()
let enter5 = prompt("Pressione ENTER...");
console.clear();

console.log("Em suas andanças por WestWorld você encontrou nosso campo de caças, são tantos animais, alguns até extintos!")
console.log();
let quest04 = prompt("Você caçou algum animal? ");
if (
  quest04.toLowerCase() == "não" ||
  quest04.toLowerCase() == "n" ||
  quest04.toLowerCase() == "nn"
) {
  console.clear();
  console.log("Você é um dos poucos que optam por não desfrutar desse “esporte”, admirável!");
  positivo = positivo + 1;
} else {
  console.clear();
  console.log("Os animais também são anfitriões, não sei se eles vão gostar muito disso!");
}

console.log()
let enter6 = prompt("Pressione ENTER...");
console.clear();

console.log("Antes de ir embora você encontrou Bil Beldrock, o anfitrião mais chato do parque, ele começou a falar sem parar, você logo apontou sua arma para ele, respirou fundo, você poderia atirar e fazer ele calar a boca, não teria consequencias não é mesmo?")
console.log();
let quest05 = prompt("Você atirou nele? ");
if (
  quest05.toLowerCase() == "não" ||
  quest05.toLowerCase() == "n" ||
  quest05.toLowerCase() == "nn"
) {
  console.clear();
  console.log("Você tem bom coração cavalheiro!");
  positivo = positivo + 1;
} else {
  console.clear();
  console.log("Cruel e sádico, acho que você vai se dar mal.");
}

console.log()
let enter7 = prompt("Pressione ENTER...");
console.clear();

if (positivo == 5) {
  console.log("Você foi um bom Cowboy meu amigo, nenhum anfitrião vai se revoltar contra você, parabéns, você pode voltar em paz para sua casa!");
} else if (positivo == 4) {
  console.log("Olha, você vai se divertir muito e dominar West World, mas pode perder um dedo no caminho!");
} else if (positivo == 3) {
  console.log("Você morreu meu amigo, quem mandou desagradar os anfitriões!");
}
if (positivo == 2 || positivo == 1) {
  console.log(`Você vai sofrer muito meu caro amigo, mas vão deixar você viver, afinal voce sofrerá sempre que se lembrar do que fizeram com você!`);
}
if (positivo == 0) {
  console.log("Meu amigo, você vai ser o primeiro a morrer!");
}
