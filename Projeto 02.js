console.clear();
var prompt = require('prompt-sync')();

const armasEspaciais = ['raio', 'escudo', 'bomba'];

const resultado = [
    ' Você sem dúvidas está entre os maiores das galáxias!',
    'Você perdeu feio, pelo menos está viv@ para tentar de novo!',
    'Isso nunca aconteceu antes, um empate técnico, meus deuses!'];

do {
    var jogador = [];
    var pontospc = [];
    var empate = [];


    console.log('Bem-vind@ ao Space Figth XXII, nesse jogo você disputa o título do "ser mais forte da galáxia"!');
console.log();

console.log('Você já deve estar familiarizad@ com o jogo, mas não custa relembrar, esse é um jogo de sorte e habilidade, você deve escolher uma entre três armas e seu adversário escolherá outra.');
console.log();

console.log('O Raio X - Arma letal, consegue detonar uma Bomba de Neutrons a distância, mas é inviável contra um Escudo Gama.');
console.log();

console.log('O Escudo Gama - Você jamais será atingid@ por um Raio X, mas cuidado com a explosão de uma Bomba de Neutrons.');
console.log();

console.log('A Bomba de Neutrons - Ótima para quebrar Escudos Gama, mas totalmente vulnerável a Raios X.');
console.log();

console.log('Para facilitar vamos chamar de Raio, Escudo e Bomba certo? Vamos lá!')

console.log();
let enter2 = prompt("Pressione ENTER...");
console.clear("");

let nome = prompt('Primeiro, me fala seu nome: ');
console.log();

console.log('${nome}, vamos lá, você irá enfrentar o desafiante Euritran o Louco do planeta X0172!');
console.log();
      
      var rodadas = +prompt('Quantas batalhas você quer travar? ');
      console.log();

    while (isNaN(rodadas) || rodadas == '') {
        rodadas = +prompt(` Quantas batalhas você quer travar?: `);
        console.clear();
    }

    for (i = 0; i < rodadas; i++) {
console.log()
        var EscolhaPlayer = prompt(`${i+1}ª Batalha - Faça sua escolha com sabedoria, raio, escudo ou bomba? `).toLowerCase();
        let computer = Math.floor(Math.random() * armasEspaciais.length);
        var EscolhaComputer = (armasEspaciais[computer]);

        console.log();

        while (EscolhaPlayer != armasEspaciais[0] && EscolhaPlayer != armasEspaciais[1] && EscolhaPlayer != armasEspaciais[2]) {
            EscolhaPlayer = prompt(`Essa arma é proibida, escolha uma das três informadas no começo do jogo! `).toLowerCase();
            console.log();
        }
        console.log(`Você escolheu: ${EscolhaPlayer}`);
        console.log();
        console.log(`Euritran o Louco escolheu: ${EscolhaComputer} `);

        if (EscolhaPlayer == EscolhaComputer) {
 console.log();
            console.log(`Que batalha incrivel, empate justo!`);
            empate.push(1);

        } else if (EscolhaPlayer == 'raio' && EscolhaComputer == 'bomba') {
 console.log();
            console.log(`Você destroçou Euritran!`);
            jogador.push(1);

        } else if (EscolhaPlayer == 'raio' && EscolhaComputer == 'escudo') {
 console.log();
            console.log(`Euritran te destroçou.`);
            pontospc.push(1);

        } else if (EscolhaPlayer == 'escudo' && EscolhaComputer == 'raio') {
 console.log();
            console.log(`Você destroçou Euritran!`);
            jogador.push(1);

        } else if (EscolhaPlayer == 'escudo' && EscolhaComputer == 'bomba') {
 console.log();
            console.log(`Euritran te destroçou.`);
            pontospc.push(1);            
            
        } else if (EscolhaPlayer == 'bomba' && EscolhaComputer == 'escudo') {
 console.log();
            console.log("Você destroçou Euritran!");
            jogador.push(1);   

        } else if (EscolhaPlayer == 'bomba' && EscolhaComputer == 'raio') {
 console.log();
            console.log(`Euritran te destroçou.`);
            pontospc.push(1);
        }
    }

console.log();
    console.clear(prompt('Aperte enter para saber quem venceu a maior batalha galáctica de todos os tempos... '));
    console.log(` Você ganhou ${jogador.length} batalhas.`);
    console.log();
    console.log(` Euritran o Louco ganhou ${pontospc.length} batalhas.`);
    console.log();
    console.log(` Vocês empataram ${empate.length} batalhas.`);
    console.log();

    if (jogador.length > pontospc.length || jogador.length > empate.lenght) {
        console.log(resultado[0]);

    } else if (pontospc.length > jogador.length || pontospc.length > jogador.length) {
        console.log(resultado[1]);

    } else if (empate.length > (pontospc + jogador)) {
        console.log(resultado[2]);

    } else (console.log(resultado[2]));
    console.log();

    var PlayAgain = prompt(` Aperte enter para uma revanche ou X e depois Enter para descansar!`);
    console.clear();
    console.log();

} while (PlayAgain == '');

console.log(' Pronto, pode descansar! ');
console.log();
