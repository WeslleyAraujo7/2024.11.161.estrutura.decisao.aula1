// Crie um algoritmo que solicite um número e 
// informe se o  número é PAR ou ÍMPAR

const prompt = require('prompt-sync')();


const numero = parseFloat(prompt('Digite um número: '));

const PAR = numero % 2 == 0;


if (PAR) {
    console.log(`Numero PAR`);
} else {
    console.log(`Numero ÍMPAR`);
}